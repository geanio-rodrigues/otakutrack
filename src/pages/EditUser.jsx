import { Fragment, useState, useEffect } from "react";
import { getMe, update } from "../services/auth";
import { useNavigate } from "react-router-dom";

export default function EditUser() {
    const [user, setUser] = useState(null);
    const [isLoading, setIdsLoading] = useState(true);
    const [name, setName] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            try {
                const userData = await getMe();
                setUser(userData);
                setId(userData.id || "");
                setName(userData.name || "");
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
                setUser(false);
            } finally {
                setIdsLoading(false);
            }
        }

        loadUser();
    }, []);
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const isConfirmed = window.confirm(`Tem certeza que deseja alterar seu nome para ${name}?`);
        if(!isConfirmed){
            setMessage("Alteração cancelada");
            return;
        }

        try {
            const user = await update(id, name);
            alert("Nome de usuário alterado com sucesso!");
            navigate("/");
            window.location.reload();
        } catch(error) {
            alert(error.message);
        }
    };

    if (isLoading) {
        return (
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">
                <div className="text-center">
                    <p>Carregando...</p>
                </div>
            </main>
        );
    }

    if (user === false) {
        return (
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">
                <div className="text-center">
                    <p>Usuário não encontrado. Faça login novamente.</p>
                </div>
            </main>
        );
    }

    return (
        <Fragment>
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">

                <div className="text-center">
                    <h2 className="teste">Editar Usuário</h2>
                </div>

                <div className="w-full max-w-sm p-4 sm:p-0">
                    <form className="w-full flex flex-col gap-8" onSubmit={handleSubmit}>

                        <div className="relative mb-8">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder=""
                                className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="name"
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