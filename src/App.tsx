import { Route, Switch } from "wouter"
import { ThemeProvider } from "@/components/theme-provider"
import { Footer } from "./components/Footer";
import LightingSimulator from "./screens";
export default function App() {

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div className="bg-background">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
          <Switch>
            <Route path="/runge-kutta" component={LightingSimulator} />
            <Route>404: No such page!</Route>
          </Switch>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
}