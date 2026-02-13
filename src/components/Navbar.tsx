import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="logo-section" style={{ textDecoration: 'none' }}>
                    <Logo />
                </Link>
                <div className="nav-links">
                    <Link to="/#quienes-somos" className="nav-link">Nosotros</Link>

                    <div
                        className="relative group h-full flex items-center"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                        <button className="nav-link flex items-center gap-1">
                            Soluciones <ChevronDown size={14} />
                        </button>

                        <div className={`absolute top-full left-0 w-64 bg-white shadow-xl rounded-2xl border border-slate-100 p-2 transition-all duration-200 ${isDropdownOpen ? 'opacity-100 visible translate-y-2' : 'opacity-0 invisible translate-y-0'}`}>
                            <Link to="/banca-y-financiacion" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Banca y Financiación</Link>
                            <Link to="/seguros-personas" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Seguros para Personas</Link>
                            <Link to="/seguros-empresas" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Seguros para Empresas</Link>
                            <Link to="/pensiones" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Gestión de Pensiones</Link>
                            <Link to="/inversiones" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Inversiones Globales</Link>
                            <Link to="/juridico-financiero" className="dropdown-item" onClick={() => setIsDropdownOpen(false)}>Jurídico-Financiero</Link>
                        </div>
                    </div>

                    <Link to="/#metodologia" className="nav-link">Cómo Trabajamos</Link>

                    <a href="#contacto" className="btn-primary">
                        Agenda una sesión
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
