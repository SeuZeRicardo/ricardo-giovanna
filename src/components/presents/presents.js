import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Title } from "../title";

import "./style.css";

gsap.registerPlugin(useGSAP);

const Presents = () => {
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    window.open("https://noivos.casar.com/ricardo-e-giovanna", "_blank");
    return;
  };

  return (
    <div className="presents container">
      <Title
        text={"Lista de Presentes"}
        leftDrawId="bird-left"
        rightDrawId="bird-right"
      />
      <p>
        A gente sempre sonhou em conhecer o Japão juntos, desde que nos
        conhecemos, e por isso escolhemos esse destino pra nossa lua de mel.
        Vamos ficar super felizes e gratos se vocês quiserem e puderem ajudar a
        gente a fazer essa viagem
        <br />
        Vocês podem contribuir com qualquer valor via PIX ou acessando a
        plataforma casar
      </p>

      <div className="gift-list">
        <p>NUMERO DO PIX: XXXXXXXXXXXXX</p>
        <button ref={buttonRef} onClick={handleButtonClick}>
          Casar.com
        </button>
      </div>
    </div>
  );
};

export { Presents };
