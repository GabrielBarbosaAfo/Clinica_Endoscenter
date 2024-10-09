import React from "react";
import { FaWhatsapp, FaEnvelope,  FaTwitter, FaInstagram, FaFacebookF } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer mt-5 py-3 bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-5 d-flex align-items-center">
                        {/* Logo da clínica */}
                        <div className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                            <img src="/images/endoscenter_Logo.jpg" alt="Logo" width="50px" />
                        </div>
                        {/* Endereço da clínica */}
                        <span className="ms-4 mb-3 mb-md-0 text-muted container text-footer">
                            R. Gen. Antônio Carlos de Andrada Serpa, 20 2º andar - Ibiapaba, Barbacena
                        </span>
                        
                        {/* Linha vertical */}
                        <div className="border-start ms-6 ps-6">
                            {/* Contatos da clínica (você pode substituir com as informações de contato reais) */}
                            <ul className="list-unstyled">
                                <li className="ms-3 text-muted d-flex align-items-center">
                                    <FaWhatsapp className="me-2" /> {/* Ícone do WhatsApp */}
                                    <span className="text-footer">(31) 1234-5678</span>
                                </li>
                                <li className="ms-3 text-muted d-flex align-items-center">
                                    <FaEnvelope className="me-2" /> {/* Ícone de Email */}
                                    <span className="text-footer">contato@endoscenter.com.br</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-7">
                        <ul className="nav justify-content-end list-unstyled d-flex flex-column align-items-end">
                            <li className="text-muted">
                                SIGA-NOS NAS REDES SOCIAIS
                            </li>
                            <div className="d-flex mt-1">
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
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
