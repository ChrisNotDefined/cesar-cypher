import React from "react";
import styled from "styled-components";

const Limiter = styled.div`
  margin: 1rem;
`;

const Heading = styled.p`
  font-size: 1.25rem;
  margin: 0;
  margin-bottom: 1rem;
`;

const TextWriter = React.forwardRef(
  ({ width, height, title, TextComponent }, ref) => {
    return (
      <Limiter>
        {title && <Heading>{title}</Heading>}
        {TextComponent && <TextComponent ref={ref} {...{ width, height }} />}
      </Limiter>
    );
  }
);

export default TextWriter;
