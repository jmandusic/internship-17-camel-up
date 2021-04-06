import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/NotFound";
import PlayerForm from "./components/PlayerForm";
import PlayersProvider from "./providers/Players";

const App = () => {
  return (
    <BrowserRouter>
      <PlayersProvider>
        <Switch>
          <Route exact path="/">
            <PlayerForm />
          </Route>

          <Route exact path="/game"></Route>

          <Route exact path="/404">
            <NotFound />
          </Route>

          <Redirect to="/404" />
        </Switch>
      </PlayersProvider>
    </BrowserRouter>
  );
};

export default App;
