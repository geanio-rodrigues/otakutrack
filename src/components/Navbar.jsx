import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { navItems } from "./navItems";
import { getMe } from "../services/auth";

import logoDesktop from "../assets/logo/logo.png";
import logoMobile from "../assets/logo/logo_ico.png";


export default function Navbar() {
    const [isAuthMenuOpen, setAuthMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            try {
                const userData = await getMe();
                setUser(userData);
            } catch (error) {
                console.error("Erro ao buscar usuário:", error);
            } finally {
                setIsLoading(false);
            }
        }

        loadUser();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(false);
        toggleAuthMenu();
    }

    const handleNavChange = (event) => {
    const path = event.target.value;
        if (path) {
            navigate(path);
            toggleMobileMenu();
        }
    };

    // Fecha ambos os menus se um for aberto enquanto o outro está ativo
    const toggleAuthMenu = () => {
        if (isMobileMenuOpen) setMobileMenuOpen(false);
        setAuthMenuOpen(!isAuthMenuOpen);
    };

    const toggleMobileMenu = () => {
        if (isAuthMenuOpen) setAuthMenuOpen(false);
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    // Verifica se tem algum usuário logado
    const isLoggedIn = !!user;

    if(isLoading) {
        return (
            <header>
                <nav className="navbar">
                    <div className="nav-loading">Carregando...</div>
                </nav>
            </header>
        )
    }


    return (
        <header>
            <nav className="navbar">
                {/* --- GRUPO ESQUERDO: Logo e Navegação Principal --- */}
                <div className="nav-group-left">
                    <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation menu">
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
                    </button>
                    <div className="logo">
                        <Link to="/">
                            <img src={logoDesktop} alt="OtakuTrack Logo" id="logo-desktop" />
                            <img src={logoMobile} alt="OtakuTrack Logo" id="logo-mobile" />
                        </Link>
                    </div>
                    <div className={`nav-links ${isMobileMenuOpen ? "mobile-active" : ""}`}>
                        {navItems.map((item, index) => {
                            if (item.type === 'link') {
                                return <Link to={item.path} key={index} onClick={toggleMobileMenu}>{item.label}</Link>;
                            }
                            if (item.type === 'dropdown') {
                                return (
                                    // O select agora chama a função handleNavChange que funciona com o React Router
                                    <select key={index} onChange={handleNavChange} className="nav-dropdown">
                                        <option value="">{item.label}</option>
                                        {item.options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option.path}>{option.label}</option>
                                        ))}
                                    </select>
                                );
                            }
                            return null;
                        })}
                    </div>
                </div>

                {/* --- GRUPO DIREITO: Pesquisa e Autenticação --- */}
                <div className="nav-group-right">
                    <div className="search-bar">
                        <input type="text" placeholder="Pesquisar..." />
                        <button className="search-button" aria-label="Search">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>

                    {isLoggedIn && <p>{user?.name}</p>}
                
                    <div className="auth-container">
                        <button
                            onClick={toggleAuthMenu}
                            className={`auth-icon ${isAuthMenuOpen ? "active" : ""}`}
                            aria-label="Toggle user menu"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <div className={`auth-menu ${isAuthMenuOpen ? "active" : ""}`}>
                            {isLoggedIn ? (
                                <>
                                    <Link to="/edit-user" onClick={toggleAuthMenu}>Editar Perfil</Link>
                                    <Link to="/" onClick={handleLogout}>Sair</Link>
                                </>
                            ) : (
                                <>
                                    <Link to="/login" onClick={toggleAuthMenu}>Entrar</Link>
                                    <Link to="/create-account" onClick={toggleAuthMenu}>Criar Conta</Link>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}