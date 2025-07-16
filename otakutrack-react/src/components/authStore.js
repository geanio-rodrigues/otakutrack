import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
    persist(
        (set) => ({
            user: null,
            isLoggedIn: false,

            // Criar uma nova conta
            createAccount: (userData) => {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const existingUser = users.find(u => u.email === userData.email);

                if (existingUser) {
                    throw new Error("Usuário com este e-mail já existe.");
                }

                const newUser = {
                    username: userData.email.split('@')[0],
                    email: userData.email,
                    password: userData.password,
                }

                localStorage.setItem('users', JSON.stringify([...users, newUser]));

                // Loga o usuário automaticamente após o cadastro
                set({ user: { username: newUser.username, email: newUser.email }, isLoggedIn: true });
            },

            // Realizar login
            login: (credentials) => {
                const users = JSON.parse(localStorage.getItem('users')) || [];
                const foundUser = users.find(
                    (u) => u.email === credentials.email && u.password === credentials.password
                );

                if(foundUser) {
                    set({ user: { username: foundUser.username, email: foundUser.email }, isLoggedIn: true});
                } else {
                    throw new Error('Usuário ou senha inválidas!');
                }
            },

            // Editar usuário
            editUser: (newUsername) => {
                set((state) => ({
                    user: {
                        ...state.user,
                        username: newUsername,
                    }
                }))
            },

            // Realizar logout
            logout: () => {
                set({ user: null, isLoggedIn: false})
            },
        }),
        {
            name: 'auth-storage',
            getStorage: () => localStorage
        }
    )
);

export default useAuthStore;