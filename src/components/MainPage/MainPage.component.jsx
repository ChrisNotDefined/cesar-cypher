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
    const force = () => {
      setOffset((off) => (off + 1) % 26);
    };

    if (forcing) {
      force();
      bfInterval.current = setInterval(() => {
        force();
      }, 250);
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
          Offset: {offset}
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
