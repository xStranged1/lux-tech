import LuminaTechHome from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';
import CasosExito from '@/components/Recomendaciones';

export default function RecomendacionesScreen() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="grow">
                <CasosExito darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </>
    );
}

