import { panelLayoutOptions } from "../../../utils/defaults";
import { BetDice, PanelContainer } from "../../index.styled";

const layout = panelLayoutOptions();

const LegBet = ({ option, setOption, dice }) => {
  return (
    <PanelContainer>
      {dice.map((oneDice) => (
        <BetDice
          key={oneDice.id}
          style={
            !oneDice.legBet
              ? { backgroundColor: `${oneDice.color}` }
              : { backgroundColor: `black` }
          }
          disabled={oneDice.legBet === true}
        />
      ))}
    </PanelContainer>
  );
};

export default LegBet;
