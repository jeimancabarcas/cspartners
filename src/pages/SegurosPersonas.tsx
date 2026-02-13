import React from 'react';
import { motion } from 'framer-motion';
import {
    Shield,
    Heart,
    Plane,
    GraduationCap,
    Home as HomeIcon,
    Car,
    Dog,
    Gem,
    CheckCircle2,
    ShieldCheck,
    Zap,
    Users,
    Stethoscope,
    PiggyBank,
    ArrowRight,
    LifeBuoy
} from 'lucide-react';

const SegurosPersonas: React.FC = () => {
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
                            <span className="section-tag">Portafolio / Personas</span>
                            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Seguros para <span className="text-gradient">Personas</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Protegemos su patrimonio, su estabilidad financiera y su proyecto de vida. Estructuramos soluciones integrales alineadas con su realidad y objetivos.
                            </p>
                        </motion.div>
                        <motion.div
                            className="bg-primary text-white p-10 rounded-[40px] shadow-xl relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck size={180} />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Enfoque CSP</h3>
                            <p className="text-slate-300 mb-6 leading-relaxed">
                                Cada seguro se integra dentro de un esquema de planeación financiera, evitando:
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    "Sobreaseguramiento",
                                    "Vacíos de cobertura",
                                    "Gastos innecesarios",
                                    "Desprotección del ingreso"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-2 items-center">
                                        <CheckCircle2 size={16} className="text-cta" />
                                        <span className="text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Categorías de Seguros */}
            <section className="py-24">
                <div className="container">
                    {/* Vida y Ahorro */}
                    <div className="mb-20">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-secondary">
                                <Heart size={28} />
                            </div>
                            <h2 className="text-3xl font-bold text-primary">Seguros de Vida y Ahorro</h2>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    t: "Vida y Protección Integral",
                                    d: "Garantiza respaldo económico ante fallecimiento, incapacidad o enfermedades graves.",
                                    icon: <LifeBuoy />,
                                    tags: ["Protección en Vida", "Respaldo Familiar"]
                                },
                                {
                                    t: "Vida con Ahorro Patrimonial",
                                    d: "Coordina protección con acumulación de capital para objetivos de largo plazo.",
                                    icon: <PiggyBank />,
                                    tags: ["Estrategia 4x1", "Crea Patrimonio"]
                                },
                                {
                                    t: "Protección Universal Flex",
                                    d: "Seguro flexible con opción de inversión en mercados globales (USD disponible).",
                                    icon: <Zap />,
                                    tags: ["Dólares", "Flexibilidad Total"]
                                }
                            ].map((item, i) => (
                                <CardItem key={i} {...item} />
                            ))}
                        </div>
                    </div>

                    {/* Salud y Educación */}
                    <div className="mb-20">
                        <div className="grid lg:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500">
                                        <Stethoscope size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Salud Premium</h3>
                                </div>
                                <p className="text-slate-600 mb-8">Acceso oportuno a servicios médicos de alta calidad nacional e internacional.</p>
                                <ul className="space-y-4 mb-8">
                                    {["Planes Globales e Internacionales", "Medicina Prepagada", "Enfermedades de Alto Costo"].map((t, i) => (
                                        <li key={i} className="flex gap-2 items-center text-slate-700 font-medium">
                                            <CheckCircle2 size={18} className="text-secondary" /> {t}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Ej: Póliza Global, MedicAll Gold, Pan American</p>
                            </div>

                            <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center text-orange-500">
                                        <GraduationCap size={24} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary">Seguros Educativos</h3>
                                </div>
                                <p className="text-slate-600 mb-8">Garantiza la continuidad educativa de sus hijos ante cualquier imprevisto.</p>
                                <ul className="space-y-4 mb-8">
                                    {["Protección Proyecto Educativo", "Componente de Ahorro", "Respaldo Asegurador"].map((t, i) => (
                                        <li key={i} className="flex gap-2 items-center text-slate-700 font-medium">
                                            <CheckCircle2 size={18} className="text-secondary" /> {t}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs font-bold text-secondary uppercase tracking-widest">Asegure el futuro de su familia hoy.</p>
                            </div>
                        </div>
                    </div>

                    {/* Otros Seguros */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Hogar", i: <HomeIcon />, d: "Protección integral para vivienda y contenido." },
                            { t: "Vehículos", i: <Car />, d: "Todo riesgo, SOAT y asistencias viales." },
                            { t: "Viajes", i: <Plane />, d: "Asistencia médica internacional 24/7." },
                            { t: "Mascotas", i: <Dog />, d: "Cuidado veterinario para su familia." },
                            { t: "Bienes Especiales", i: <Gem />, d: "Obras de arte, joyas y tecnología." }
                        ].map((item, i) => (
                            <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
                                <div className="text-secondary mb-4">{item.i}</div>
                                <h4 className="font-bold text-primary mb-2">{item.t}</h4>
                                <p className="text-sm text-slate-500">{item.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-primary text-white py-24 rounded-[60px] mx-4 lg:mx-12 mb-24 text-center">
                <div className="container">
                    <h2 className="text-4xl font-extrabold mb-6">Personalice su Protección</h2>
                    <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg text-white">
                        No compre seguros al azar. Estructure un portafolio que realmente respalde su realidad financiera y proyecto de vida.
                    </p>
                    <a href="#contacto" className="btn-cta text-lg px-12 py-4">Agenda un Diagnóstico de Seguros</a>
                </div>
            </section>
        </div>
    );
};

const CardItem = ({ t, d, icon, tags }: any) => (
    <motion.div
        className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
        whileHover={{ y: -5 }}
    >
        <div className="bg-slate-50 w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-primary mb-4">{t}</h3>
        <p className="text-slate-500 leading-relaxed text-sm mb-6">{d}</p>
        <div className="flex flex-wrap gap-2">
            {tags.map((tag: string, i: number) => (
                <span key={i} className="text-[10px] uppercase font-bold tracking-widest bg-blue-50 text-secondary px-3 py-1 rounded-full">
                    {tag}
                </span>
            ))}
        </div>
    </motion.div>
);

export default SegurosPersonas;
