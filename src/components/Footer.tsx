import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
    return (
        <footer id="contacto" className="footer">
            <div className="container">
                <div className="grid lg:grid-cols-2 gap-16 py-12">
                    {/* Left Side: Contact Info */}
                    <div>
                        <Logo variant="light" className="mb-6 h-12" />
                        <h2 className="text-3xl font-extrabold mb-4 text-white">Contacte con nosotros</h2>
                        <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                            Estamos listos para ayudarle a estructurar su futuro financiero. Agenda una sesión diagnóstica sin costo hoy mismo.
                        </p>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cta">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Teléfono</p>
                                    <p className="text-slate-200">+57 (1) 000 0000</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cta">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Email</p>
                                    <p className="text-slate-200">contacto@cspartners.com</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center">
                                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-cta">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Ubicación</p>
                                    <p className="text-slate-200">Bogotá, Colombia</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="bg-white/5 p-8 rounded-[32px] border border-white/10">
                        <form className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="form-group">
                                    <label className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-input" placeholder="Ej: Juan Pérez" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label">Email Corporativo</label>
                                    <input type="email" className="form-input" placeholder="juan@empresa.com" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Interés Principal</label>
                                <select className="form-select">
                                    <option>Banca y Financiación</option>
                                    <option>Seguros Personas / Empresas</option>
                                    <option>Gestión de Pensiones</option>
                                    <option>Inversiones Globales</option>
                                    <option>Soluciones Jurídico-Financieras</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label className="form-label">Mensaje</label>
                                <textarea className="form-textarea" placeholder="Cuéntenos brevemente su necesidad..."></textarea>
                            </div>
                            <button type="submit" className="btn-cta w-full py-4 flex items-center justify-center gap-2">
                                Enviar Solicitud <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="flex justify-between items-center text-xs text-slate-500 border-t border-white/5 pt-12 pb-12">
                    <p>© 2026 Casas Strategic Partners S.A.S. Todos los derechos reservados.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-white transition-colors">Tratamiento de Datos</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
