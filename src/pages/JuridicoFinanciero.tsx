import React from 'react';
import { motion } from 'framer-motion';
import {
    Gavel,
    Home as HomeIcon,
    Scale,
    Building2,
    CheckCircle2,
    AlertCircle,
    ArrowRight,
    Shield,
    FileText,
    GanttChartSquare,
    Calculator,
    Library
} from 'lucide-react';

const JuridicoFinanciero: React.FC = () => {
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
                            <span className="section-tag">Soluciones Jurídico-Financieras</span>
                            <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
                                Recupere <span className="text-gradient">su Tranquilidad</span>
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                Protegemos su patrimonio con soluciones legales y estratégicas. Desde insolvencia personal hasta reorganización empresarial, caminamos a su lado.
                            </p>
                        </motion.div>
                        <div className="bg-white p-10 rounded-[40px] shadow-xl border border-slate-100">
                            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                                <AlertCircle className="text-secondary" /> ¿Qué resolvemos?
                            </h3>
                            <div className="space-y-4">
                                {[
                                    "Deudas complejas de difícil manejo",
                                    "Créditos hipotecarios desfavorables",
                                    "Riesgo de pérdida de patrimonio por procesos legales",
                                    "Necesidad de reorganización empresarial"
                                ].map((t, i) => (
                                    <div key={i} className="flex gap-3 items-start p-4 rounded-2xl bg-slate-50">
                                        <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 shrink-0"></div>
                                        <span className="text-sm font-medium text-slate-700">{t}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tres Ejes Principales */}
            <section className="py-24">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Insolvencia */}
                        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-8">
                                <GanttChartSquare size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Insolvencia</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Negocie sus deudas de manera justa y recobre el control de su vida financiera bajo amparo legal.</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Consolidación en un solo pago",
                                    "Protección contra embargos",
                                    "Planes de pago sostenibles",
                                    "Cese de cobros coactivos"
                                ].map((t, i) => (
                                    <li key={i} className="flex gap-2 items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 size={16} className="text-secondary" /> {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-slate-50 text-xs text-slate-400 font-bold uppercase tracking-widest">Ley de Insolvencia</div>
                        </div>

                        {/* Reducción Hipotecaria */}
                        <div className="bg-primary text-white p-10 rounded-[32px] shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <HomeIcon size={120} />
                            </div>
                            <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center text-cta mb-8">
                                <Calculator size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Reducción de Crédito</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">Ahorre tiempo y dinero en su crédito hipotecario aprovechando los beneficios de la <strong>Ley 546 de 1999</strong>.</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Ahorro masivo en intereses",
                                    "Reducción sustancial del plazo",
                                    "Pago total de propiedad más pronto",
                                    "Asesoría experta en Ley de Vivienda"
                                ].map((t, i) => (
                                    <li key={i} className="flex gap-2 items-center text-sm font-medium text-slate-200">
                                        <div className="w-1.5 h-1.5 bg-cta rounded-full"></div> {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-white/5 text-xs text-slate-500 font-bold uppercase tracking-widest">Ley 546 de 1999</div>
                        </div>

                        {/* Reorganización Empresarial */}
                        <div className="bg-white p-10 rounded-[32px] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500">
                            <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center text-secondary mb-8">
                                <Building2 size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary mb-4">Reorganización</h3>
                            <p className="text-slate-500 mb-8 leading-relaxed">Reestructure las finanzas de su empresa y asegure su continuidad operativa bajo la <strong>Ley 1116</strong>.</p>
                            <ul className="space-y-4 mb-8">
                                {[
                                    "Reducción de pagos e intereses",
                                    "Protección legal de activos",
                                    "Suspensión de demandas",
                                    "Acuerdos sostenibles con acreedores"
                                ].map((t, i) => (
                                    <li key={i} className="flex gap-2 items-center text-sm font-medium text-slate-700">
                                        <CheckCircle2 size={16} className="text-secondary" /> {t}
                                    </li>
                                ))}
                            </ul>
                            <div className="pt-6 border-t border-slate-50 text-xs text-slate-400 font-bold uppercase tracking-widest">Ley 1116 de 2006</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios Finales */}
            <section className="bg-slate-50 py-24 mb-24 rounded-[60px] mx-4 lg:mx-12">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl font-extrabold text-primary mb-8">¿Por qué nosotros?</h2>
                            <div className="grid gap-6">
                                {[
                                    { t: "Estrategias a Medida", d: "Cada situación es única y requiere un plan legal propio.", i: <FileText /> },
                                    { t: "Acompañamiento Experto", d: "Asesoría legal y financiera de alto nivel en todo el proceso.", i: <Library /> },
                                    { t: "Protección Real", d: "Enfocados en salvaguardar su patrimonio y tranquilidad.", i: <Shield /> }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="text-secondary">{item.i}</div>
                                        <div>
                                            <h4 className="font-bold text-primary">{item.t}</h4>
                                            <p className="text-sm text-slate-500">{item.d}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-12 rounded-[40px] shadow-sm border border-slate-100 text-center">
                            <h3 className="text-2xl font-bold text-primary mb-6">¿Preparado para una solución real?</h3>
                            <p className="text-slate-600 mb-10 text-lg">Hablemos de su caso sin costo inicial para definir la mejor ruta legal y financiera.</p>
                            <a href="#contacto" className="btn-cta text-lg px-12 py-4 flex items-center gap-2 justify-center mx-auto">
                                Agendar Consulta Privada <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default JuridicoFinanciero;
