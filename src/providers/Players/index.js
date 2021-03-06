import { createContext, useState } from "react";

import { initializePlayers } from "../../utils/defaults";

const initialState = {
  playerOne: initializePlayers()[0],
  playerTwo: initializePlayers()[1],
};

export const PlayersContext = createContext({
  state: { ...initialState },
  setState: () => {},
});

const PlayersProvider = ({ children }) => {
  const [players, setPlayers] = useState(initialState);

  const value = {
    state: { players },
    setPlayers,
  };

  return (
    <PlayersContext.Provider value={value}>{children}</PlayersContext.Provider>
  );
};

export default PlayersProvider;
