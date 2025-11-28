import { Route, Switch } from "wouter"
import { DarkModeProvider } from "./contexts/DarkModeContext";
import Home from "./screens/Home";
import ProductosScreen from "./screens/Productos";
import NosotrosScreen from "./screens/Nosotros";
import ContactoScreen from "./screens/Contacto";
import LightingSimulator from "./screens/Simulador";

export default function App() {
  return (
    <DarkModeProvider>
      <div className="bg-background">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/lux-tech" component={Home} />
          <Route path="/lux-tech/productos" component={ProductosScreen} />
          <Route path="/lux-tech/simulador" component={LightingSimulator} />
          <Route path="/lux-tech/nosotros" component={NosotrosScreen} />
          <Route path="/lux-tech/contacto" component={ContactoScreen} />
          <Route>404: No such page!</Route>
        </Switch>
      </div>
    </DarkModeProvider>
  );
}