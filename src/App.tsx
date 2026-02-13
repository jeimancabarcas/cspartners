import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BancaFinanciacion from './pages/BancaFinanciacion';
import SegurosPersonas from './pages/SegurosPersonas';
import SegurosEmpresas from './pages/SegurosEmpresas';
import Pensiones from './pages/Pensiones';
import Inversiones from './pages/Inversiones';
import JuridicoFinanciero from './pages/JuridicoFinanciero';

// ScrollToTop component to handle anchor links and route changes
const ScrollManager = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
        } else {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [pathname, hash]);

    return null;
};

const App: React.FC = () => {
    return (
        <div className="layout">
            <ScrollManager />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/banca-y-financiacion" element={<BancaFinanciacion />} />
                    <Route path="/seguros-personas" element={<SegurosPersonas />} />
                    <Route path="/seguros-empresas" element={<SegurosEmpresas />} />
                    <Route path="/pensiones" element={<Pensiones />} />
                    <Route path="/inversiones" element={<Inversiones />} />
                    <Route path="/juridico-financiero" element={<JuridicoFinanciero />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
