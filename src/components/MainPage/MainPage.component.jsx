import React, { useRef, useState } from "react";
import { Cesar } from "../../utils/cyphers/cesar-cyfer";
import Button from "../Button";
import SwapButton from "../SwapButton/SwapButton.component";
import TextWriter from "../TextWriter";

import {
  Actions,
  Background,
  Transformer,
  TextArea,
  PaperText,
} from "./MainPage.styles";

export default function MainPage() {
  const [decrypt, setDecrypt] = useState(false);
  const [result, setResult] = useState("");
  const inputRef = useRef(null);

  const toggleDecrypt = () => {
    setDecrypt((val) => !val);
  };

  const applyTransform = () => {
    if (!decrypt) {
      const encryptedMessage = Cesar.encrypt(inputRef.current?.value);
      setResult(encryptedMessage);
      return;
    }

    const decrypted = Cesar.decrypt(inputRef.current?.value);
    setResult(decrypted);
  };

  return (
    <Background>
      <Transformer>
        <TextWriter
          width="100%"
          title="Entrada"
          ref={inputRef}
          TextComponent={TextArea}
        />
        <Actions>
          <Button onClick={applyTransform}>
            {decrypt ? "Decifrar" : "Cifrar"}
          </Button>
          <SwapButton onClick={toggleDecrypt} active={decrypt} />
        </Actions>
        <TextWriter
          width="100%"
          title="Salida"
          TextComponent={() => <PaperText>{result}</PaperText>}
        />
      </Transformer>
    </Background>
  );
}
