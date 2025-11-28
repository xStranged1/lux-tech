import LuminaTechHome from '../components/Header';
import Nosotros from '../components/Nosotros';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function NosotrosScreen() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="grow">
                <Nosotros darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </>
    );
}

