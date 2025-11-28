import LuminaTechHome from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';
import LightingSimulator from '@/components/Calculator';

export default function LightingSimulatorScreen() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="grow">
                <LightingSimulator darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </>
    );
}

