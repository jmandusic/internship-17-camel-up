import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import PlayersProvider from "./providers/Players";
import BoardProvider from "./providers/Board";
import DiceProvider from "./providers/Dice";
import CamelProvider from "./providers/Camels";

import Game from "./components/Game";
import NotFound from "./components/NotFound";
import Form from "./components/Form";

const App = () => {
  return (
    <BrowserRouter>
      <PlayersProvider>
        <Switch>
          <Route exact path="/">
            <Form />
          </Route>

          <Route exact path="/game">
            <BoardProvider>
              <CamelProvider>
                <DiceProvider>
                  <Game />
                </DiceProvider>
              </CamelProvider>
            </BoardProvider>
          </Route>

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
