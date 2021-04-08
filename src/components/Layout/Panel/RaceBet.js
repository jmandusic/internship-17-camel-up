import { panelLayoutOptions } from "../../../utils/defaults";
import { BetDice, PanelContainer } from "../../index.styled";

const layout = panelLayoutOptions();

const RaceBet = ({ option, setOption, dice }) => {
  return (
    <PanelContainer>
      {dice.map((oneDice) => (
        <BetDice
          key={oneDice.id}
          style={
            !oneDice.raceBet
              ? { backgroundColor: `${oneDice.color}` }
              : { backgroundColor: `black` }
          }
          disabled={oneDice.raceBet === true}
        />
      ))}
    </PanelContainer>
  );
};

export default RaceBet;
