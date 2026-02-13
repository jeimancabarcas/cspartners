import React from 'react';
import {
    ShieldCheck,
    TrendingUp,
    Briefcase,
    Target,
    AlertCircle,
    PiggyBank,
    HeartHandshake,
    ArrowRight,
    Shield,
    PieChart,
    Building,
    CheckCircle2,
    Scale,
    Search,
    Settings,
    Layout,
    RefreshCw,
    Gem,
    Gavel,
    Check,
    Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="hero">
                <div className="container hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="hero-badge">
                            <Shield size={16} />
                            Casas Strategic Partners S.A.S.
                        </div>
                        <h1 className="hero-title">
                            Estrategias Financieras <br />
                            <span className="text-gradient">Para Proteger su Futuro</span>
                        </h1>
                        <p className="hero-description">
                            Soluciones estratégicas para proteger, hacer crecer y planear el futuro financiero de personas y empresas con criterio e independencia.
                        </p>
                        <div className="hero-actions">
                            <a href="#contacto" className="btn-cta">
                                Comenzar ahora <ArrowRight size={18} />
                            </a>
                            <a href="#quienes-somos" className="btn-outline">
                                Saber más
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="hero-image-container"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="hero-card">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="bg-blue-50 p-3 rounded-lg">
                                    <PieChart className="text-secondary" size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold">Estrategia 360°</h4>
                                    <p className="text-sm text-gray-500">Planeación Integral</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span>Protección Patrimonial</span>
                                    <span>95%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-secondary"
                                        initial={{ width: 0 }}
                                        animate={{ width: "95%" }}
                                        transition={{ duration: 1.5, delay: 0.5 }}
                                    />
                                </div>
                                <div className="flex justify-between text-xs font-bold mb-1">
                                    <span>Crecimiento de Capital</span>
                                    <span>80%</span>
                                </div>
                                <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-cta"
                                        initial={{ width: 0 }}
                                        animate={{ width: "80%" }}
                                        transition={{ duration: 1.5, delay: 0.7 }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="hero-stat">
                            <div className="text-2xl font-bold text-primary">C&S</div>
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Partners S.A.S.</div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Network */}
            <div className="partners">
                <div className="container">
                    <p className="partners-title">Acceso a los Mejores Aliados del Mercado</p>
                    <div className="partners-flex">
                        <div className="partner-logo"><Building size={20} /> <span>Entidades Bancarias</span></div>
                        <div className="partner-logo"><ShieldCheck size={20} /> <span>Aseguradoras</span></div>
                        <div className="partner-logo"><PiggyBank size={20} /> <span>Fondos Pensión</span></div>
                        <div className="partner-logo"><TrendingUp size={20} /> <span>Inversión Nacional e Int.</span></div>
                    </div>
                </div>
            </div>

            {/* QUIÉNES SOMOS */}
            <section id="quienes-somos" className="identity-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">01 / Quiénes Somos</span>
                        <h2 className="section-title">Nuestra Identidad y Propósito</h2>
                        <div className="gradient-line mx-auto mt-4"></div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-16 mt-20">
                        <motion.div
                            className="lg:col-span-2 bg-white p-12 rounded-[32px] border border-slate-100 shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-3xl font-light text-primary leading-tight mb-8" style={{ fontFamily: 'var(--font-accent)' }}>
                                Estructuramos el futuro con <span className="text-secondary font-semibold italic">independencia total</span>.
                            </h3>
                            <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                                <p>
                                    <strong>Casas Strategic Partners S.A.S.</strong> es una firma independiente dedicada a la consultoría y planeación financiera integral.
                                </p>
                                <p>
                                    Nuestra labor es <strong>ordenar, proteger y proyectar</strong> las finanzas, integrando en una sola estrategia ingresos, ahorro, inversión, crédito, seguros y pensión.
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="bg-primary text-white p-12 rounded-[32px] flex flex-col justify-center shadow-xl relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <Shield size={120} />
                            </div>
                            <p className="text-xl font-medium italic relative z-10 leading-relaxed">
                                "Nuestro valor no está en vender productos, sino en diseñar estrategias coherentes y sostenibles."
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 mt-12">
                        {[
                            {
                                icon: <Target className="text-secondary" />,
                                title: "Visión Objetiva",
                                desc: "Sin conflictos de interés, orientando hacia lo que realmente ajusta a sus objetivos y perfil de riesgo."
                            },
                            {
                                icon: <HeartHandshake className="text-secondary" />,
                                title: "Acompañamiento",
                                desc: "Especializados en personas, familias y empresas con una visión responsable de largo plazo."
                            },
                            {
                                icon: <ShieldCheck className="text-secondary" />,
                                title: "Respaldo Integral",
                                desc: "Acceso a la oferta multi-plataforma más sólida del mercado asegurador y bancario nacional e internacional."
                            }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-md hover:shadow-xl transition-all duration-500 group"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.15 }}
                            >
                                <div className="bg-slate-50 w-16 h-16 flex items-center justify-center rounded-2xl mb-8 group-hover:bg-secondary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                    <div className="scale-125">
                                        {item.icon}
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold text-primary mb-4">{item.title}</h4>
                                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* EL PROBLEMA */}
            <section className="comparison-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">02 / El Contexto</span>
                        <h2 className="section-title">Decisiones Fragmentadas vs. Planeación</h2>
                    </div>

                    <div className="comparison-grid gap-16">
                        <div className="card-white">
                            <h3 className="feature-title" style={{ color: '#f43f5e' }}>La Fragmentación</h3>
                            <p className="feature-text mb-8">Decidir sobre créditos, seguros e inversiones de forma aislada genera:</p>
                            <div className="space-y-4">
                                {['Sobreendeudamiento', 'Pérdida de ahorro', 'Riesgos mal cubiertos', 'Desorden patrimonial'].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <AlertCircle className="text-red-400" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="card-white" style={{ borderColor: 'var(--color-secondary)', borderWidth: '2px' }}>
                            <h3 className="feature-title" style={{ color: 'var(--color-secondary)' }}>Nuestra Transformación</h3>
                            <p className="feature-text mb-8">Un proceso estructurado donde cada decisión tiene un propósito:</p>
                            <div className="space-y-4">
                                {['Propósito claro', 'Impacto medido', 'Coherencia general', 'Control y Sostenibilidad'].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <CheckCircle2 className="text-secondary" size={20} />
                                        <span className="font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLANEACIÓN FINANCIERA INTEGRAL */}
            <section id="planeacion">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">03 / El Eje Central</span>
                        <h2 className="section-title">Planeación Financiera Integral</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            No se trata solo de ahorrar o invertir, sino de convertir su realidad completa en una hoja de ruta clara.
                        </p>
                    </div>

                    <div className="planning-info-grid">
                        <motion.div
                            className="info-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h4 className="flex items-center gap-2 text-primary">
                                <Search size={20} className="text-secondary" /> ¿Qué incluye?
                            </h4>
                            <ul className="info-list">
                                {[
                                    "Análisis de ingresos y egresos",
                                    "Revisión de obligaciones financieras",
                                    "Evaluación de riesgos personales",
                                    "Definición de objetivos financieros",
                                    "Capacidad real de ahorro e inversión",
                                    "Planeación pensional y de retiro"
                                ].map((item, i) => (
                                    <li key={i}><Check size={16} className="text-secondary mt-1 shrink-0" /> {item}</li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="info-box"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <h4 className="flex items-center gap-2 text-primary">
                                <Zap size={20} className="text-cta" /> ¿Para qué sirve?
                            </h4>
                            <ul className="info-list">
                                {[
                                    "Evitar decisiones impulsivas",
                                    "Priorizar objetivos financieros",
                                    "Proteger el patrimonio",
                                    "Usar el crédito de forma estratégica",
                                    "Construir estabilidad financiera futura"
                                ].map((item, i) => (
                                    <li key={i}><Zap size={16} className="text-cta mt-1 shrink-0" /> {item}</li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                    <div className="text-center mt-12">
                        <p className="text-slate-500 font-medium">👉 Toda solución que estructuramos parte de este análisis.</p>
                    </div>
                </div>
            </section>

            {/* CÓMO TRABAJAMOS */}
            <section id="metodologia" className="bg-slate-50">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">04 / Metodología</span>
                        <h2 className="section-title">Cómo Trabajamos</h2>
                        <p className="text-slate-600 mt-4">Enfoque claro y estructurado para garantizar resultados.</p>
                    </div>

                    <div className="methodology-grid gap-12">
                        {[
                            { t: "Diagnóstico integral", d: "Analizamos ingresos, gastos, deudas y patrimonio.", icon: <Search size={20} /> },
                            { t: "Análisis estratégico", d: "Evaluamos necesidades reales y horizonte de tiempo.", icon: <Layout size={20} /> },
                            { t: "Diseño personalizado", d: "Integramos ahorro, inversión, crédito y protección.", icon: <Settings size={20} /> },
                            { t: "Implementación", d: "Seleccionamos productos y aliados alineados.", icon: <Zap size={20} /> },
                            { t: "Seguimiento", d: "El plan evoluciona con su vida financiera.", icon: <RefreshCw size={20} /> }
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                className="step-card"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="step-number">{i + 1}</div>
                                <div className="text-secondary mb-3 flex justify-center">{step.icon}</div>
                                <h3 className="step-title">{step.t}</h3>
                                <p className="step-desc">{step.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PORTAFOLIO DE SOLUCIONES */}
            <section id="portafolio">
                <div className="container">
                    <div className="section-header">
                        <span className="section-tag">05 / Portafolio</span>
                        <h2 className="section-title">Portafolio Integral de Soluciones</h2>
                        <p className="text-slate-600 mt-4">Decision estratégica en una sola visión completa.</p>
                    </div>

                    <div className="portfolio-grid gap-10 mt-12">
                        {[
                            { t: "Planeación Integral", d: "Hoja de ruta que alinea ingresos y obligaciones.", icon: <Layout /> },
                            { t: "Ahorro Programado", d: "Estrategias de ahorro disciplinado y medible.", icon: <PiggyBank /> },
                            { t: "Inversión", d: "Ajustadas al perfil de riesgo y crecimiento patrimonial.", icon: <TrendingUp /> },
                            { t: "Protección y Seguros", d: "Esquemas que mitigan riesgos ante imprevistos.", icon: <ShieldCheck /> },
                            { t: "Pensiones", d: "Acompañamiento en decisiones de retiro obligatorio y voluntario.", icon: <Scale /> },
                            { t: "Plan para Retiro", d: "Construimos planes realistas y sostenibles.", icon: <Gem /> },
                            { t: "Soluciones Empresariales", d: "Estructuración pensional y aseguradora para empresas.", icon: <Building /> },
                            { t: "Jurídico-financieras", d: "Asesoría especializada con respaldo técnico.", icon: <Gavel /> }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                className="portfolio-card"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <div className="text-secondary mb-4">{item.icon}</div>
                                <h3 className="portfolio-title">{item.t}</h3>
                                <p className="portfolio-text">{item.d}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA final */}
            <section style={{ padding: '0 0 var(--section-padding) 0' }}>
                <div className="container">
                    <div className="bg-primary text-white p-16 rounded-[40px] text-center shadow-xl">
                        <h2 className="text-4xl font-extrabold mb-6">¿Listo para una estrategia real?</h2>
                        <p className="text-slate-400 mb-10 text-xl">Ordene, Proteja y Proyecte su futuro financiero hoy mismo.</p>
                        <a href="#contacto" className="btn-cta text-lg px-12 py-4">Agendar Consultoría Gratuita</a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
