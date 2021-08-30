import React, { useEffect, useRef, useState } from "react";
import { Cesar } from "../../utils/cyphers/cesar-cyfer";
import Button from "../Button";
import DangerButton from "../DangerButton";
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
  const [decryptMode, setDecryptMode] = useState(false);
  const [offset, setOffset] = useState(5);
  const [result, setResult] = useState("");
  const [forcing, setForcing] = useState(false);
  const bfInterval = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (forcing) {
      translateOffset();
      bfInterval.current = setInterval(() => {
        translateOffset();
      }, 300);
    } else {
      clearInterval(bfInterval.current);
    }
  }, [forcing]);

  useEffect(() => {
    if (forcing) {
      const decrypted = Cesar.decrypt(inputRef.current?.value, offset);
      setResult(decrypted);
    }
  }, [offset, forcing]);

  const toggleDecrypt = () => {
    setDecryptMode((val) => !val);
  };

  const translateOffset = (ammount = 1) => {
    setOffset((off) => (26 + off + ammount) % 26);
  };

  const encrypt = () => {
    const encryptedMessage = Cesar.encrypt(inputRef.current?.value, offset);
    setResult(encryptedMessage);
  };

  const decrypt = () => {
    const decrypted = Cesar.decrypt(inputRef.current?.value, offset);
    setResult(decrypted);
  };

  const applyTransform = () => {
    if (!decryptMode) {
      encrypt();
      return;
    }
    decrypt();
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
          <Button onClick={() => translateOffset()}>+</Button>
          Offset: {offset}
          <Button onClick={() => translateOffset(-1)}>-</Button>
          <Button onClick={applyTransform}>
            {decryptMode ? "Decifrar" : "Cifrar"}
          </Button>
          <SwapButton onClick={toggleDecrypt} active={decryptMode} />
          {decryptMode && (
            <DangerButton
              onMouseDown={() => setForcing(true)}
              onMouseUp={() => setForcing(false)}
            >
              Brute force
            </DangerButton>
          )}
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
