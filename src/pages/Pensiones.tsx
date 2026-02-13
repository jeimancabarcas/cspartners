import React from 'react';
import { motion } from 'framer-motion';
import {
    Scale,
    PiggyBank,
    Briefcase,
    Calendar,
    ArrowUpRight,
    CheckCircle2,
    BarChart3,
    History,
    Shield,
    Users,
    ChevronRight,
    Search,
    PieChart,
    ArrowRight
} from 'lucide-react';

const Pensiones: React.FC = () => {
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
                            <span className="section-tag">Portafolio / Retiro</span>
                            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Gestión de <span className="text-gradient">Pensiones</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Maximice su beneficio pensional y construya un retiro digno. Acompañamos su historia laboral con decisiones informadas y estrategias de ahorro de largo plazo.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100 flex flex-col justify-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <h3 className="text-2xl font-bold text-primary mb-8">El Valor de la Planeación</h3>
                            <div className="space-y-6">
                                {[
                                    { t: "Claridad", d: "Entienda su sistema pensional actual.", i: <Search className="text-secondary" /> },
                                    { t: "Optimización", d: "Tome decisiones de régimen informadas.", i: <BarChart3 className="text-secondary" /> },
                                    { t: "Seguridad", d: "Evite la pérdida de semanas o capital.", i: <Shield className="text-secondary" /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="bg-blue-50 p-3 rounded-xl h-fit">{item.i}</div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.t}</h4>
                                            <p className="text-sm text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Tipos de Pensiones */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 mb-20">
                        {/* Pensiones Obligatorias */}
                        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                            <div className="flex justify-between items-start mb-8">
                                <div className="bg-blue-50 p-4 rounded-2xl text-secondary">
                                    <Scale size={32} />
                                </div>
                                <span className="bg-slate-100 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Sistema Obligatorio</span>
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Pensiones Obligatorias</h3>
                            <p className="text-slate-600 mb-8">Acompañamiento integral para maximizar su beneficio dentro del marco legal vigente (RPM / RAIS).</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Análisis de historia laboral",
                                    "Proyección pensional detallada",
                                    "Asesoría en traslados de régimen",
                                    "Estrategias de recuperación de semanas"
                                ].map((t, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-700 font-medium">
                                        <CheckCircle2 size={18} className="text-secondary" /> {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-slate-50">
                                <p className="text-xs text-slate-500 italic">Orientado a trabajadores dependientes e independientes cercanos o no a la edad de jubilación.</p>
                            </div>
                        </div>

                        {/* Pensiones Voluntarias */}
                        <div className="bg-primary text-white p-10 rounded-[32px] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <PiggyBank size={120} />
                            </div>
                            <div className="flex justify-between items-start mb-8 relative z-10">
                                <div className="bg-white/10 p-4 rounded-2xl text-cta">
                                    <ArrowUpRight size={32} />
                                </div>
                                <span className="bg-white/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">Seguro de Pensiones</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 relative z-10">Pensiones Voluntarias</h3>
                            <p className="text-slate-400 mb-8 relative z-10">Instrumentos de ahorro e inversión de largo plazo que complementan su pensión y brindan beneficios tributarios.</p>
                            <ul className="space-y-4 mb-8 relative z-10">
                                {[
                                    "Crea Retiro (Individual)",
                                    "Crea Patrimonio (Ahorro + Protección)",
                                    "Portafolios Globales Diversificados",
                                    "Eficiencia Tributaria Estratégica"
                                ].map((t, i) => (
                                    <li key={i} className="flex gap-3 items-center text-slate-200 font-medium">
                                        <div className="w-1.5 h-1.5 bg-cta rounded-full"></div> {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/5 relative z-10">
                                <p className="text-xs text-slate-400 italic">Mejore su ingreso en el retiro con flexibilidad y control total.</p>
                            </div>
                        </div>
                    </div>

                    {/* Cesantías y Empresariales */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex gap-6 items-center">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0">
                                <Briefcase size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-2">Pensiones Empresariales</h4>
                                <p className="text-sm text-slate-500">Esquemas de cofinanciación y planes de fidelización para equipos clave.</p>
                            </div>
                        </div>
                        <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100 flex gap-6 items-center">
                            <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary shrink-0">
                                <Calendar size={28} />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-2">Cesantías Estratégicas</h4>
                                <p className="text-sm text-slate-500">Gestión para desempleo, educación o vivienda más allá del uso tradicional.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="container">
                    <div className="bg-slate-100 p-12 rounded-[40px] text-center">
                        <h2 className="text-3xl font-extrabold text-primary mb-6">¿Conoce su futuro pensional?</h2>
                        <p className="text-slate-600 mb-10 max-w-xl mx-auto text-lg">
                            Realizamos un diagnóstico completo de su situación actual para que el retiro sea una meta alcanzable y no una incertidumbre.
                        </p>
                        <a href="#contacto" className="btn-cta text-lg px-12 py-4 flex items-center gap-2 mx-auto w-fit">
                            Solicitar Proyección Pensional <ArrowRight size={20} />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pensiones;
