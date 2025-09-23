import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {register} from "../services/auth";

export default function CreateAccount() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (password !==confirmPassword){
            alert("As senhas deve ser iguais");
            return;
        }
        try {
            const user = await register(name, email, password);
            if(user){
                alert(`Conta para ${email} criada com sucesso!`);
                navigate('/');   
            } else {
                alert(`Erro ao cadastrar, tente novamente!`);
            }
        } catch(error) {
            alert(error.message);
        }

    };

    return (
        <Fragment>
            <main className="flex-grow flex flex-col items-center justify-center min-h-[75vh]">

                <div className="text-center">
                    <h2 className="teste">Criar Conta</h2>
                </div>

                <div className="w-full max-w-sm">
                    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-8">

                        <div className="relative">
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
                                Digite seu Nome
                            </label>
                        </div>

                        <div className="relative">
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

                        <div className="relative">
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
                        </div>

                        <div className="relative">
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                placeholder=""
                                className="block w-full px-0 py-2 text-white bg-transparent border-0 border-b-2 border-white appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            />
                            <label
                                htmlFor="confirmPassword"
                                className="absolute text-base text-gray-500 duration-300 -translate-y-7 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
                            >
                                Confirme Sua Senha
                            </label>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <button
                                type="submit"
                                className="w-50 size-8 text-base font-medium text-white bg-logored rounded-lg hover:bg-bgblue"
                            >
                                Criar Conta
                            </button>
                            <p className="text-sm text-center text-gray-500">
                                Já tem uma conta?{' '}
                                <Link to="/login" className="font-medium text-links hover:text-linkshover">
                                    Entrar
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </Fragment>
    )
}