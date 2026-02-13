import React from 'react';
import { motion } from 'framer-motion';
import {
    Building,
    Home as HomeIcon,
    Car,
    Wallet,
    CreditCard,
    ExternalLink,
    LineChart,
    Shield,
    CheckCircle2,
    ArrowRight,
    Users,
    Zap,
    Scale
} from 'lucide-react';

const BancaFinanciacion: React.FC = () => {
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
                            <span className="section-tag">Línea de Soluciones</span>
                            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Banca y <span className="text-gradient">Financiación</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Soluciones bancarias estructuradas dentro de una estrategia financiera integral. No gestionamos productos aislados, construimos planes de liquidez responsables.
                            </p>
                            <div className="flex gap-4">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                                    <div className="font-bold text-secondary text-2xl mb-1">+10</div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">Aliados Bancarios</p>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex-1">
                                    <div className="font-bold text-secondary text-2xl mb-1">100%</div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider">Independencia</p>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            className="bg-white p-12 rounded-[40px] shadow-xl border border-slate-100 relative overflow-hidden"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-5">
                                <Building size={200} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-6">¿Qué necesidad atendemos?</h3>
                            <p className="text-slate-600 mb-6">
                                Acompañamos a personas y empresas que requieren financiamiento responsable, evitando:
                            </p>
                            <div className="space-y-4">
                                {[
                                    { t: 'Sobreendeudamiento', c: 'text-red-500' },
                                    { t: 'Créditos mal estructurados', c: 'text-orange-500' },
                                    { t: 'Compromisos que afectan la liquidez futura', c: 'text-blue-500' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className={`w-2 h-2 rounded-full ${item.c.replace('text-', 'bg-')}`}></div>
                                        <span className="font-medium text-slate-700">{item.t}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Solutions Grid */}
            <section className="py-24">
                <div className="container">
                    <div className="section-header text-center mb-20">
                        <h2 className="section-title">Soluciones Bancarias que Estructuramos</h2>
                        <div className="gradient-line mx-auto mt-4"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Crédito Hipotecario y Vivienda",
                                icon: <HomeIcon />,
                                items: ["Compra vivienda nueva/usada", "Leasing habitacional", "Traslado de crédito"],
                                benefit: "Acceso a alternativas comparadas con acompañamiento experto."
                            },
                            {
                                title: "Colombianos Exterior (COLEX)",
                                icon: <ExternalLink />,
                                items: ["Inversión en vivienda", "Proyectos inmobiliarios", "Gestión a distancia"],
                                benefit: "Inversión segura en Colombia con respaldo bancario integral."
                            },
                            {
                                title: "Crédito de Vehículo",
                                icon: <Car />,
                                items: ["Nuevos o usados", "Uso personal o productivo", "Sostenibilidad del compromiso"],
                                benefit: "Financiación responsable adaptada al flujo de ingresos."
                            },
                            {
                                title: "Consumo y Libre Inversión",
                                icon: <Wallet />,
                                items: ["Educación y proyectos", "Consolidación de deudas", "Capital de trabajo"],
                                benefit: "Acceso a liquidez sin comprometer la estabilidad futura."
                            },
                            {
                                title: "Créditos por Libranza",
                                icon: <Scale />,
                                items: ["Optimizar tasas actuales", "Mejorar condiciones", "Control de endeudamiento"],
                                benefit: "Condiciones preferenciales con control financiero riguroso."
                            },
                            {
                                title: "Tarjetas de Crédito",
                                icon: <CreditCard />,
                                items: ["Selección estratégica", "Cupos adecuados", "Uso inteligente del cupo"],
                                benefit: "Maximizar beneficios y evitar sobrecostos innecesarios."
                            }
                        ].map((solution, i) => (
                            <motion.div
                                key={i}
                                className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="bg-slate-50 w-14 h-14 flex items-center justify-center rounded-2xl mb-6 group-hover:bg-secondary group-hover:text-white transition-colors">
                                    {solution.icon}
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">{solution.title}</h3>
                                <ul className="space-y-2 mb-6">
                                    {solution.items.map((item, idx) => (
                                        <li key={idx} className="text-sm text-slate-500 flex gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-slate-200 mt-1.5 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-6 border-t border-slate-50">
                                    <p className="text-xs font-bold text-secondary uppercase tracking-wider mb-2">Beneficio clave</p>
                                    <p className="text-sm text-slate-600 italic leading-relaxed">
                                        {solution.benefit}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Cómo lo hacemos */}
            <section className="bg-primary text-white py-24 rounded-[60px] mx-4 lg:mx-12 mb-24 overflow-hidden relative">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
                </div>
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-cta font-bold uppercase tracking-widest text-sm mb-4 block">Metodología</span>
                            <h2 className="text-4xl font-extrabold mb-8">¿Cómo lo hacemos?</h2>
                            <div className="space-y-6">
                                {[
                                    "Análisis de la necesidad financiera real",
                                    "Evaluación de capacidad de pago",
                                    "Comparación entre entidades bancarias",
                                    "Acompañamiento durante todo el proceso",
                                    "Integración del crédito al plan financiero general"
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-4 items-center">
                                        <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center font-bold text-secondary border border-white/20">
                                            {i + 1}
                                        </div>
                                        <span className="text-lg text-slate-200">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10">
                            <Users size={48} className="text-cta mb-6" />
                            <h3 className="text-2xl font-bold mb-4 text-white">Aliados e Independencia</h3>
                            <p className="text-slate-300 leading-relaxed mb-8">
                                Trabajamos con diversas entidades bancarias y brokers especializados. Esto nos permite comparar alternativas y orientar al cliente hacia la opción que mejor se adapta a su perfil, manteniendo siempre nuestra independencia y criterio profesional.
                            </p>
                            <div className="bg-white/10 p-6 rounded-2xl flex items-center gap-4">
                                <Shield className="text-secondary" />
                                <span className="font-medium">Tu bienestar financiero es nuestra única prioridad.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="pb-24">
                <div className="container">
                    <div className="bg-slate-50 p-12 rounded-[40px] text-center border border-slate-100">
                        <h2 className="text-3xl font-extrabold text-primary mb-6">¿Busca una financiación inteligente?</h2>
                        <p className="text-slate-600 mb-8 max-w-xl mx-auto text-lg">
                            Estructuramos su crédito de forma que aporte a su crecimiento, no que comprometa su tranquilidad.
                        </p>
                        <a href="#contacto" className="btn-cta text-lg px-12 py-4">Solicitar Análisis de Crédito</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BancaFinanciacion;
