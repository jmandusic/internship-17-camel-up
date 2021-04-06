import { useCells } from "../../providers/Board/hooks";
import { BoardContainer, Cell } from "../index.styled";

const Board = () => {
  const [cells] = useCells();
  return (
    <BoardContainer>
      {cells.map((cell) => (
        <Cell key={cell.id}>{cell.id + 1}</Cell>
      ))}
    </BoardContainer>
  );
};

export default Board;
