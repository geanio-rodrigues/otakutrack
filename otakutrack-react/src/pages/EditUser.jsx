import { Fragment, useState } from "react";
import useAuthStore from "../components/authStore";

export default function EditUser() {
    const user = useAuthStore((state) => state.user);
    const editUser = useAuthStore((state) => state.editUser);
    const [username, setUsername] = useState(user.username || '');

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            editUser(username);
            alert(`Nome de usuário modificado: de ${user.username} para ${username}`);
            location.reload();
        } catch(error) {
            alert(error.message);
        }
    };

    return (
        <Fragment>
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">

                <div className="text-center">
                    <h2 className="teste">Editar Usuário</h2>
                </div>

                <div className="w-full max-w-sm p-4 sm:p-0">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">

                        <div className="relative mb-8">
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                placeholder=""
                                className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="username"
                                className="absolute text-base text-gray-500 duration-300 -translate-y-7 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Nome de usuário
                            </label>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <button
                                type="submit"
                                className="w-50 size-8 text-base font-medium text-white bg-logored rounded-lg hover:bg-bgblue"
                            >
                                Editar Usuário
                            </button>
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    )
}