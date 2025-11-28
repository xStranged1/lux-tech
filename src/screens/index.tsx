import React, { useState } from 'react';
import LuminaTechHome from '../components/Header';
import Hero from '../components/Hero';
import Caracteristicas from '../components/Caracteristicas';
import Productos from '../components/Productos';
import Simulador from '../components/Simulador';
import Nosotros from '../components/Nosotros';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <LuminaTechHome darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Hero darkMode={darkMode} />
        <Caracteristicas darkMode={darkMode} />
        <Productos darkMode={darkMode} />
        <Simulador darkMode={darkMode} />
        <Nosotros darkMode={darkMode} />
        <Contacto darkMode={darkMode} />
        <Footer darkMode={darkMode}/>
      </main>
    </>
  );
}
