import { useState } from "react";

import { panelLayoutOptions } from "../../utils/defaults";
import { PanelContainer } from "../index.styled";

const layout = panelLayoutOptions();

const Panel = () => {
  const [option, setOption] = useState(layout.DEFAULT);

  const legBetHandler = () => {
    setOption(layout.LEG_BET);
  };

  const rollHandler = () => {};

  const raceBetHandler = () => {
    setOption(layout.RACE_BET);
  };

  // if (option === layout.LEG_BET) {
  //   return;
  // }

  // if (option === layout.RACE_BET) {
  //   return;
  // }

  return (
    <PanelContainer>
      <button onClick={legBetHandler}>Leg bet</button>
      <button onClick={rollHandler}>Roll</button>
      <button onClick={raceBetHandler}>Race bet</button>
    </PanelContainer>
  );
};

export default Panel;
