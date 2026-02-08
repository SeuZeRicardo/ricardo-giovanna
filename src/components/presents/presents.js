import { useRef, useState, useEffect } from "react";
import "./style.css";

const Presents = () => {
  const container = useRef(null);

  const [clickCount, setClickCount] = useState(0);
  const [pos, setPos] = useState({ left: "50%", top: "75%" });

  useEffect(() => {
    // initial position near bottom center
    const initLeft = Math.floor(window.innerWidth / 2 - 60) + "px";
    const initTop = Math.floor(window.innerHeight * 0.75) + "px";
    setPos({ left: initLeft, top: initTop });
  }, []);

  const handleButtonClick = () => {
    if (clickCount >= 3) {
      window.open("https://noivos.casar.com/ricardo-e-giovanna", "_blank");
      return;
    }

    setClickCount((c) => c + 1);

    const padding = 20;
    const btnWidth = 120;
    const btnHeight = 40;
    const maxLeft = Math.max(0, window.innerWidth - btnWidth - padding);
    const maxTop = Math.max(0, window.innerHeight - btnHeight - padding);
    const left = Math.floor(Math.random() * maxLeft) + padding;
    const top = Math.floor(Math.random() * maxTop) + padding;

    setPos({ left: `${left}px`, top: `${top}px` });
  };

  return (
    <div className="presents container" ref={container}>
      <h2>Lista de Presentes</h2>
      <p>
        A gente sempre sonhou em conhecer o Japão juntos, desde que nos
        conhecemos, e por isso escolhemos esse destino pra nossa lua de mel.
        Vamos ficar super felizes e gratos se vocês quiserem e puderem ajudar a
        gente a fazer essa viagem
      </p>

      <p>
        Vocês podem contribuir com qualquer valor via PIX ou acessando a
        plataforma casar
      </p>

      <div className="gift-list">
        <p>NUMERO DO PIX: XXXXXXXXXXXXX</p>
        <button
          style={
            clickCount >= 1
              ? {
                  position: "fixed",
                  left: pos.left,
                  top: pos.top,
                  zIndex: 9999,
                }
              : {}
          }
          onClick={handleButtonClick}
        >
          Casar.com
        </button>
      </div>
    </div>
  );
};

export { Presents };
