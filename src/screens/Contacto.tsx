import LuminaTechHome from '../components/Header';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import { useDarkMode } from '../contexts/DarkModeContext';

export default function Home() {
    const { darkMode, setDarkMode } = useDarkMode();

  return (
    <>
      <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="grow">
        <Contacto darkMode={darkMode} />
        <Footer darkMode={darkMode} />
      </main>
    </>
  );
}
