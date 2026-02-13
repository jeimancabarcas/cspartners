import React from 'react';
import { motion } from 'framer-motion';
import {
    TrendingUp,
    Globe2,
    ShieldCheck,
    BarChart4,
    ArrowUpRight,
    CheckCircle2,
    Lock,
    Wallet,
    Gem,
    Zap,
    PieChart,
    Bitcoin,
    LineChart,
    Coins
} from 'lucide-react';

const Inversiones: React.FC = () => {
    return (
        <div className="pt-24">
            {/* Hero Section */}
            <section className="bg-slate-50 py-24">
                <div className="container">
                    <div className="max-w-3xl">
                        <span className="section-tag">Portafolio / Global</span>
                        <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                            Invierta en su Futuro, <span className="text-gradient">con Confianza</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            Acceda a estrategias de inversión globales, diversificadas y profesionalmente gestionadas. Tecnología internacional combinada con asesoría financiera independiente.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                                <ShieldCheck size={18} className="text-secondary" />
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">Custodia Institucional</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                                <Globe2 size={18} className="text-secondary" />
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">Acceso Global</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Filosofía y Estructura */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 mb-24">
                        <div className="bg-white p-12 rounded-[40px] border border-slate-100 shadow-sm">
                            <h2 className="text-3xl font-bold text-primary mb-8">Nuestra Filosofía</h2>
                            <p className="text-slate-600 mb-10 text-lg">Invertir debe ser simple, transparente, accesible y acompañado. Rompemos las barreras de la banca privada tradicional.</p>
                            <div className="grid grid-cols-2 gap-8">
                                {[
                                    { t: "Simple", i: <Zap /> },
                                    { t: "Transparente", i: <Lock /> },
                                    { t: "Accesible", i: <Wallet /> },
                                    { t: "Acompañado", i: <Zap /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex flex-col gap-3">
                                        <div className="text-secondary">{item.i}</div>
                                        <span className="font-bold text-primary">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-8 rounded-[32px] border border-slate-100">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white p-3 rounded-xl shadow-sm text-secondary">
                                        <Coins size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-secondary bg-blue-50 px-3 py-1 rounded-full uppercase">Acumulación</span>
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">Comience Pequeño (USD 250)</h3>
                                <p className="text-slate-500 text-sm">Construya capital paso a paso con aportes mensuales y carteras gestionadas profesionalmente.</p>
                            </div>
                            <div className="bg-primary text-white p-8 rounded-[32px] shadow-xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-6 opacity-10">
                                    <Gem size={80} />
                                </div>
                                <div className="flex justify-between items-start mb-6">
                                    <div className="bg-white/10 p-3 rounded-xl shadow-sm text-cta">
                                        <TrendingUp size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-cta bg-white/10 px-3 py-1 rounded-full uppercase">Patrimonial</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3">Ponga su Capital a Trabajar (USD 10k+)</h3>
                                <p className="text-slate-400 text-sm">Estrategias globales de alto nivel con gestión activa y liquidez permanente.</p>
                            </div>
                        </div>
                    </div>

                    {/* Portafolios y Fondos */}
                    <div className="section-header text-center mb-16">
                        <h2 className="text-4xl font-extrabold text-primary">Plataforma Global de Fondos</h2>
                        <p className="text-slate-500 mt-4">Más de 350 fondos de los mejores gestores del mundo.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { t: "Multiactivo", i: <PieChart />, c: "Balanced, Aggressive, Sustainable" },
                            { t: "Renta Variable", i: <LineChart />, c: "MSCI All World, Global Growth, US Opps" },
                            { t: "Temáticos", i: <Gem />, c: "New Tech, Luxury, Ecommerce" },
                            { t: "Indexados", i: <BarChart4 />, c: "S&P 500, Nasdaq, Gold" },
                            { t: "Criptoactivos", i: <Bitcoin />, c: "Bitcoin Tracker Fund" },
                            { t: "Defensivos", i: <Lock />, c: "Global Bonds, Cash Fund" }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-[24px] border border-slate-100 hover:border-secondary transition-all shadow-sm">
                                <div className="text-secondary mb-4">{item.i}</div>
                                <h4 className="font-bold text-primary mb-2">{item.t}</h4>
                                <p className="text-xs text-slate-500 font-medium tracking-wide">{item.c}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Seguridad y Custodia */}
            <section className="bg-slate-900 text-white py-24 rounded-[60px] mx-4 lg:mx-12 mb-24 overflow-hidden relative">
                <div className="container text-center max-w-4xl mx-auto">
                    <span className="text-cta font-bold uppercase tracking-widest text-xs mb-8 block">Seguridad y Respaldo</span>
                    <h2 className="text-4xl font-extrabold mb-12">Su capital, protegido por estándares mundiales</h2>
                    <div className="grid md:grid-cols-3 gap-12 text-left">
                        <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cta rounded-full"></div> Custodia
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Custodia global con <strong>Bank of New York Mellon</strong>. Activos segregados del patrimonio de la plataforma.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cta rounded-full"></div> Auditoría
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Control estricto y auditoría permanente por parte de <strong>PwC</strong>, garantizando transparencia total.</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-cta rounded-full"></div> Protección (PIP)
                            </h4>
                            <p className="text-slate-400 text-sm leading-relaxed">Cartera Protegida opcional que resguarda hasta el <strong>80% del valor más alto</strong> alcanzado.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="container">
                    <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 text-center">
                        <h2 className="text-3xl font-extrabold text-primary mb-6">¿Listo para diversificar internacionalmente?</h2>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg text-white">Construya su portafolio global con el acompañamiento de expertos independientes.</p>
                        <a href="#contacto" className="btn-cta text-lg px-12 py-4">Agendar Consultoría de Inversión</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Inversiones;
