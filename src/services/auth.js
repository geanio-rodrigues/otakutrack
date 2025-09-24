import api from "./api";

// Registrar usuário
export const register = async (name, email, password) => {
    const response = await api.post("/auth/register", {
        name,
        email,
        password,
    });
    return response.data;
};

// Login
export const login = async (email, password) => {
    const response = await api.post("/auth/login", {
        email,
        password,
    });

    // Salvar o token no localStorage (ou sessionStorage)
    localStorage.setItem("token", response.data.token);

    return response.data;
};

// Buscar usuário logado (/me)
export const getMe = async () => {
    const token = localStorage.getItem("token");

    const response = await api.get("/me", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    return response.data;
};

// Editar usuário
export const update = async (id, name) => {
    const response = await api.put("/user", {
        id,
        name
    });

    return response.data;
}