import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/auth";

export default function Home() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = await login(email, password);
            if(user) {
                navigate('/edit-user');                
                alert(`Login bem-sucedido com: ${email}`);
            } else {
                alert(`Usuário ou Senha inválidos!`);
            }
        } catch(error) {
            alert(error.message);
            console.error('Falha no login:', error);
        }
    };

    return (
        <Fragment>
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">

                <div className="text-center">
                    <h2 className="teste">Login</h2>
                </div>

                <div className="w-full max-w-sm p-4 sm:p-0">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">

                        <div className="relative mb-8">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder=""
                                className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="email"
                                className="absolute text-base text-gray-500 duration-300 -translate-y-7 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Digite seu E-mail
                            </label>
                        </div>

                        <div className="relative mb-4">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder=""
                                className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="password"
                                className="absolute text-base text-gray-500 duration-300 -translate-y-7 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Senha
                            </label>
                            <div className="text-right mb-8">
                                <a href="#" className="text-sm text-links hover:text-linkshover">
                                    Esqueci minha senha
                                </a>
                            </div>
                        </div>


                        <div className="flex flex-col items-center gap-2">
                            <button
                                type="submit"
                                className="w-50 size-8 text-base font-medium text-white bg-logored rounded-lg hover:bg-bgblue"
                            >
                                Criar Conta
                            </button>
                            <p className="text-sm text-center text-gray-500">
                                Não tem uma conta?{' '}
                                <Link to="/create-account" className="font-medium text-links hover:text-linkshover">
                                    Cadastre-se
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    )
}