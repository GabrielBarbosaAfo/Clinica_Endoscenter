import React from "react";
import { FaWhatsapp, FaEnvelope, FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            {/* Barra superior fixa */}
            <nav className="py-2 bg-light border-bottom fixed-top">
                <div className="container d-flex flex-wrap">
                    <ul className="nav me-auto">
                        <li className="ms-3 text-muted d-flex align-items-center">
                            <FaWhatsapp className="me-2" /> {/* Ícone do WhatsApp */}
                            <span className="text-footer">(31) 1234-5678</span>
                        </li>
                        <li className="ms-3 text-muted d-flex align-items-center">
                            <FaEnvelope className="me-2" /> {/* Ícone de Email */}
                            <span className="text-footer">contato@endoscenter.com.br</span>
                        </li>
                    </ul>
                    <ul className="nav">
                        <li className="me-3">
                            <a className="text-muted" href="#">
                                <FaTwitter size={24} />
                            </a>
                        </li>
                        <li className="me-3">
                            <a className="text-muted" href="#">
                                <FaInstagram size={24} />
                            </a>
                        </li>
                        <li className="me-5">
                            <a className="text-muted" href="#">
                                <FaFacebookF size={24} />
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Conteúdo abaixo do cabeçalho */}
            <div className="container" style={{ marginTop: "60px" }}> {/* Ajusta o espaçamento */}
                <div className="d-flex flex-wrap align-items-center justify-content-between">
                    {/* Logo alinhada à esquerda */}
                    <Link to="/" className="nav-link px-5 link-dark">
                        <img src="/images/endoscenter_Logo.jpg" alt="Logo" width="100px" />
                    </Link>

                    {/* Links centralizados horizontalmente */}
                    <ul className="nav col-12 col-lg-auto mb-2 justify-content-center mb-md-0">
                        <li>
                            <Link to="/sobre" className="nav-link px-5 link-dark">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/especialidades" className="nav-link px-5 link-dark">Especialidades</Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link px-5 link-dark">Novidades</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}

export default Header;
