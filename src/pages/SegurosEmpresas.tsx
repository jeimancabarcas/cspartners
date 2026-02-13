import React from 'react';
import { motion } from 'framer-motion';
import {
    Building2,
    ShieldAlert,
    Users2,
    Truck,
    HardHat,
    Sprout,
    Gavel,
    Network,
    CheckCircle2,
    Briefcase,
    Globe,
    Lock,
    Scale
} from 'lucide-react';

const SegurosEmpresas: React.FC = () => {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-slate-50 py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="section-tag">Portafolio / Empresas</span>
                            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Seguros <span className="text-secondary italic">Empresariales</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Garantizamos la continuidad operativa y el respaldo financiero que su negocio necesita. Blindamos su patrimonio empresarial y protegemos a su talento humano.
                            </p>
                        </motion.div>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { t: "Pymes", i: <Building2 className="text-secondary" /> },
                                { t: "Industria", i: <HardHat className="text-secondary" /> },
                                { t: "Logística", i: <Truck className="text-secondary" /> },
                                { t: "Agrícola", i: <Sprout className="text-secondary" /> }
                            ].map((item, i) => (
                                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center">
                                    <div className="mb-3">{item.i}</div>
                                    <span className="font-bold text-primary">{item.t}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Categorías Principales */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-12 gap-12">
                        {/* Sidebar Navigation (Visual) */}
                        <div className="lg:col-span-4 space-y-4">
                            <h2 className="text-3xl font-extrabold text-primary mb-8">Soluciones Líderes</h2>
                            {[
                                "Patrimoniales",
                                "Responsabilidad Civil",
                                "Talento Humano",
                                "Cumplimiento y Garantías",
                                "Transporte y Logística",
                                "Riesgos Especiales"
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-white flex justify-between items-center group cursor-pointer hover:border-secondary transition-all">
                                    <span className="font-semibold text-slate-700 group-hover:text-secondary uppercase text-xs tracking-widest">{item}</span>
                                    <div className="w-2 h-2 rounded-full bg-slate-200 group-hover:bg-secondary"></div>
                                </div>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Patrimoniales */}
                            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <ShieldAlert className="text-secondary" /> Patrimoniales Empresariales
                                </h3>
                                <p className="text-slate-600 mb-8">Protección de activos físicos y financieros frente a eventos que afecten la estabilidad económica.</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "Todo Riesgo Daños Materiales",
                                        "Lucro Cesante (Continuidad)",
                                        "Incendio y Terremoto",
                                        "Equipos y Maquinaria"
                                    ].map((t, i) => (
                                        <div key={i} className="flex gap-2 items-center text-sm font-medium text-slate-700">
                                            <CheckCircle2 size={16} className="text-secondary" /> {t}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Talento Humano */}
                            <div className="bg-primary text-white p-10 rounded-[32px] shadow-xl">
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                                    <Users2 className="text-cta" /> Seguros para el Talento Humano
                                </h3>
                                <p className="text-slate-400 mb-8">Bienestar y retención del talento mediante beneficios diferenciadores.</p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h4 className="text-cta font-bold text-xs uppercase tracking-widest mb-4">Protección Colectiva</h4>
                                        <ul className="space-y-3">
                                            {["Vida Grupo", "Salud Colectiva", "Exequias", "ARL Integral"].map((t, i) => (
                                                <li key={i} className="text-sm flex gap-2 items-center text-slate-200">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cta"></div> {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div>
                                        <h4 className="text-cta font-bold text-xs uppercase tracking-widest mb-4">Seguros de Ley</h4>
                                        <ul className="space-y-3">
                                            {["ARL - Coberturas Médicas", "Pensiones Grupo", "SOAT Flota"].map((t, i) => (
                                                <li key={i} className="text-sm flex gap-2 items-center text-slate-200">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-cta"></div> {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Responsabilidad Civil */}
                            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                                    <Scale className="text-secondary" /> Responsabilidad Civil (RCE)
                                </h3>
                                <p className="text-slate-600 mb-8">Blindaje jurídico y financiero ante reclamaciones de terceros derivadas de la operación.</p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {[
                                        "RCE Extracontractual",
                                        "RCE Patronal (Empleados)",
                                        "D&O (Directivos)",
                                        "RCE Profesional / Médica"
                                    ].map((t, i) => (
                                        <div key={i} className="p-4 rounded-xl bg-slate-50 font-bold text-xs text-primary uppercase">
                                            {t}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Convenios y Massives */}
            <section className="bg-slate-50 py-24">
                <div className="container">
                    <div className="section-header text-center mb-16">
                        <span className="section-tag">Fidelización</span>
                        <h2 className="text-4xl font-extrabold text-primary">Convenios Masivos y Corporativos</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                t: "Aliados Estratégicos",
                                d: "Acuerdos para ofrecer beneficios a clientes y aliados externos.",
                                icon: <Network />
                            },
                            {
                                t: "Fidelización de Talento",
                                d: "Programas de educación financiera y seguros individuales con tasa preferencial.",
                                icon: <Briefcase />
                            },
                            {
                                t: "Riesgos Especiales",
                                d: "Cumplimiento, Ciberriesgos y Transporte Internacional.",
                                icon: <Globe />
                            }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm text-center">
                                <div className="text-secondary mb-6 flex justify-center">{item.icon}</div>
                                <h4 className="text-xl font-bold text-primary mb-4">{item.t}</h4>
                                <p className="text-slate-500 text-sm leading-relaxed">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container">
                    <div className="bg-secondary p-16 rounded-[40px] text-center text-white shadow-xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-20 rotate-12">
                            <Lock size={120} />
                        </div>
                        <h2 className="text-4xl font-extrabold mb-6">¿Su empresa está blindada?</h2>
                        <p className="mb-10 text-xl font-light text-blue-100">
                            No permita que un imprevisto detenga su operación. Diseñamos esquemas de protección corporativa a la medida.
                        </p>
                        <a href="#contacto" className="btn-cta bg-white text-secondary hover:bg-slate-100 text-lg px-12 py-4">Solicitar Auditoría de Riesgos</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SegurosEmpresas;
