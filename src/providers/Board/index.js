import { createContext, useState } from "react";

import { initializeBoard } from "../../utils/defaults";

const initialState = {
  cells: initializeBoard(),
};

export const BoardContext = createContext({
  state: { ...initialState },
  setState: () => {},
});

const BoardProvider = ({ children }) => {
  const [cells, setCells] = useState(initialState);

  const value = {
    state: cells,
    setCells,
  };

  return (
    <BoardContext.Provider value={value}>{children}</BoardContext.Provider>
  );
};

export default BoardProvider;
