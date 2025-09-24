import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Footer() {

    return (
        <footer id="footer-container">
            <div className="footer-lists">
                <div className="footer-column">
                    <h4>Navegação</h4>
                    <ul>
                        <li><Link to="/popular">Animes Populares</Link></li>
                        <li><Link to="/new">Animes Novos</Link></li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Contate-nos</h4>
                    <ul>
                        <li>
                            <Link
                                to="https://github.com/geanio-rodrigues/otakutrack"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} /> GitHub
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:otakutrack@contato.com">
                                <FontAwesomeIcon icon={faEnvelope} /> E-mail
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-column">
                    <h4>Conta</h4>
                    <ul>
                        <li><Link to="/create-account">Cadastro</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <span className="capacita"><strong>CAPACITA BRASIL</strong></span>
                <span className="copyright"> &copy; OtakuTrack</span>
            </div>
        </footer>
    );
}

export default Footer;