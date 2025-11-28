import LuminaTechHome from '../components/Header';
import Hero from '../components/Hero';
import Caracteristicas from '../components/Caracteristicas';
import Productos from '../components/Productos';
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Home() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="grow">
                <Hero darkMode={darkMode} />
                <Caracteristicas darkMode={darkMode} />
                <Productos darkMode={darkMode} />
                <Nosotros darkMode={darkMode} />
                <Contacto darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </>
    );
}

