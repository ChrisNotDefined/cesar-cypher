import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  background-color: var(--accentColor);
  border: none;
  border-radius: 0.2em;
  padding: 0.5em 1em;
  font-weight: bold;
  font-size: 1.125rem;
  transition: all 100ms;
  cursor: pointer;

  :hover {
    background-color: var(--accentDarker);
  }

  :active {
    background-color: var(--accentLighter);
  }
`;

export default function Button({ children, onClick }) {
  return <Btn onClick={onClick}>{children}</Btn>;
}
