import LuminaTechHome from '../components/Header';
import Productos from '../components/Productos';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function ProductosScreen() {
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

