import React, { useState } from "react";
import "./Navbar.css";
import logoDesktop from "./assets/logo/logo.png";
import logoMobile from "./assets/logo/logo_ico.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";


// Estrutura de dados para os links
const navItems = [
    {
        type: 'link',
        label: 'Novidades',
        path: '/new'
    },
    {
        type: 'link',
        label: 'Populares',
        path: '/popular'
    },
    {
        type: 'dropdown',
        label: 'Categorias',
        options: [
            { label: 'Todos', path: '/alphabetical' },
            { label: 'Ação', path: '/action' },
            { label: 'Aventura', path: '/adventure' },
            { label: 'Comédia', path: '/comedy' },
            { label: 'Drama', path: '/drama' },
        ]
    }
];


export default function Navbar() {
    const [isAuthMenuOpen, setAuthMenuOpen] = useState(false);
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navigate = useNavigate();
    const handleNavChange = (event) => {
    const path = event.target.value;
        if (path) {
            navigate(path);
            setMobileMenuOpen(false)
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
                                return <Link to={item.path} key={index}>{item.label}</Link>;
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
                    <div className="auth-container">
                        <button
                            onClick={toggleAuthMenu}
                            className={`auth-icon ${isAuthMenuOpen ? "active" : ""}`}
                            aria-label="Toggle user menu"
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </button>
                        <div className={`auth-menu ${isAuthMenuOpen ? "active" : ""}`}>
                            <Link to="/login">Entrar</Link>
                            <Link to="/create-account">Criar Conta</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}