import { useContext } from "react";
import { BoardContext } from ".";

const useBoardContext = () => {
  return useContext(BoardContext);
};

export const useCells = () => {
  const {
    state: { cells },
    setCells,
  } = useBoardContext();

  return [cells, setCells];
};
