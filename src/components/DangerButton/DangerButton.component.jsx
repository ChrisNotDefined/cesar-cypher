import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: var(--dangerColor);
  border: none;
  border-radius: 0.2em;
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: 1.125rem;
  transition: all 100ms;
  cursor: pointer;

  :hover {
    background-color: var(--dangerDarker);
  }

  :active {
    background-color: var(--dangerLighter);
  }
`;

export default function DangerButton({
  onClick,
  children,
  onMouseDown,
  onMouseUp,
}) {
  return (
    <Btn {...{ onClick, onMouseDown, onMouseLeave: onMouseUp, onMouseUp }}>
      {children}
    </Btn>
  );
}
