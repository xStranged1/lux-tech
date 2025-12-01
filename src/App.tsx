import { Route, Switch } from "wouter"
import { DarkModeProvider, useDarkMode } from "./contexts/DarkModeContext";
import Home from "./screens/Home";
import ProductosScreen from "./screens/Productos";
import NosotrosScreen from "./screens/Nosotros";
import ContactoScreen from "./screens/Contacto";
import LightingSimulator from "./screens/Simulador";
import RecomendacionesScreen from "./screens/Recomendaciones";
import IluminacionComercial from "./components/IluminacionComercial";
import IluminacionIndustrial from "./components/IluminacionIndustrial";
import IluminacionExterior from "./components/IluminacionExterior";

function ProductoComercialWrapper() {
  const { darkMode } = useDarkMode();
  return <IluminacionComercial darkMode={darkMode} />;
}
function ProductoIndustrialWrapper() {
  const { darkMode } = useDarkMode();
  return <IluminacionIndustrial darkMode={darkMode} />;
}
function ProductoExteriorWrapper() {
  const { darkMode } = useDarkMode();
  return <IluminacionExterior darkMode={darkMode} />;
}

export default function App() {
  return (
    <DarkModeProvider>
      <div className="bg-background">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/lux-tech" component={Home} />
          <Route path="/lux-tech/productos" component={ProductosScreen} />

          {/* Productos individuales como screens aparte (tabs de arriba) */}
          <Route path="/lux-tech/productos/comercial" component={ProductoComercialWrapper} />
          <Route path="/lux-tech/productos/industrial" component={ProductoIndustrialWrapper} />
          <Route path="/lux-tech/productos/exterior" component={ProductoExteriorWrapper} />

          <Route path="/lux-tech/casos-exito" component={RecomendacionesScreen} />
          <Route path="/lux-tech/simulador" component={LightingSimulator} />
          <Route path="/lux-tech/nosotros" component={NosotrosScreen} />
          <Route path="/lux-tech/contacto" component={ContactoScreen} />
          <Route path="/lux-tech/cotizar" component={ContactoScreen} />
          <Route>404: No such page!</Route>
        </Switch>
      </div>
    </DarkModeProvider>
  );
}