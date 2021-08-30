import styled from "styled-components";

export const RoundContainer = styled.div`
  --size: 4em;
  width: var(--size);
  height: var(--size);
  margin: 0;
  background-color: ${({ active }) =>
    active ? "var(--accentColor)" : "var(--primaryColor)"};
  padding: 1em;
  border-radius: 99em;
  transition: all 200ms;
  cursor: pointer;

  :hover {
    filter: brightness(0.8);
  }
`;
