import { Route, Switch } from "wouter"
import LightingSimulator from "./screens";
export default function App() {

  return (
    <>
        <div className="bg-background">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
          <Switch>
            <Route path="/lux-tech" component={LightingSimulator} />
            <Route>404: No such page!</Route>
          </Switch>
        </div>

    </>
  );
}