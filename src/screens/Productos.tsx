import LuminaTechHome from '../components/Header';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';
import Productos from '@/components/Productos';

export default function NosotrosScreen() {
    const { darkMode, setDarkMode } = useDarkMode();

    return (
        <>
            <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
            <main className="grow">
                <Productos darkMode={darkMode} />
                <Footer darkMode={darkMode} />
            </main>
        </>
    );
}

