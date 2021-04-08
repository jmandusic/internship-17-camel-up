import { useCells } from "../../../providers/Board/hooks";
import { useCamels } from "../../../providers/Camels/hooks";
import { BoardContainer, Camel, Cell, CellNumber } from "../../index.styled";

const Board = () => {
  const [cells] = useCells();
  const [camels] = useCamels();

  return (
    <BoardContainer>
      {cells.map((cell) => (
        <Cell key={cell.id}>
          {camels.map((camel) => (
            <div key={camel.id}>
              {cell.id === 0 ? (
                <CellNumber>START</CellNumber>
              ) : (
                <CellNumber>{cell.id}</CellNumber>
              )}

              {camel.position === cell.id && (
                <Camel
                  style={{ backgroundColor: `${camel.color}` }}
                />
              )}
            </div>
          ))}
        </Cell>
      ))}
    </BoardContainer>
  );
};

export default Board;
