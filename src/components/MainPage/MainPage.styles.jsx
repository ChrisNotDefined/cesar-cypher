import styled from "styled-components";

export const Background = styled.section`
  background: linear-gradient(180deg, #4b6cb7 0%, #182848 100%);
  background-attachment: fixed;
  min-height: 100vh;
`;

export const Actions = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  width: 15%;
`;

export const Transformer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 900px) {
    flex-direction: row;
    & > :not(${Actions}) {
      flex: 1;
    }
  }
`;

export const TextArea = styled.textarea`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "30vh"};
  background-color: #fffc;
  border: var(--accentColor) 4px solid;
  padding: 0.5em;
  position: relative;
  resize: none;
  border-radius: 0.5rem;
  color: initial;
  overflow-y: auto;
  outline: none;

  @media (min-width: 900px) {
    height: 80vh;
  }
`;

export const PaperText = styled.div`
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "30vh"};
  background-color: #fffc;
  padding: 0.5em;
  color: initial;
  border-radius: 0.5em;
  box-shadow: 0 5px 5px 5px #0003, inset 0 0 10px 2px #0005;
  @media (min-width: 900px) {
    height: 80vh;
  }
`;
