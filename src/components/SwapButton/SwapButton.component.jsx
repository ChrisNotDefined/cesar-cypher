import React from "react";
import swapIcon from "../../assets/swap.svg";
import { RoundContainer } from "./SwapButton.styles";

export default function SwapButton({ active, onClick }) {
  return (
    <RoundContainer {...{ onClick, active }}>
      <img
        style={{ userSelect: "none" }}
        src={swapIcon}
        alt="invert conversion"
      />
    </RoundContainer>
  );
}
