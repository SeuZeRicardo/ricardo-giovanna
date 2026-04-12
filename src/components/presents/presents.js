import React, { useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Title } from "../title";
import { Alert } from "../alert";

import "./style.css";

gsap.registerPlugin(useGSAP);

const Presents = () => {
  const pixKey = "0a49dae0-e4c6-4c3c-915e-aafcd4708962";
  const [alertData, setAlertData] = useState(null);

  const handleButtonClick = () => {
    window.open("https://noivos.casar.com/ricardo-e-giovanna", "_blank");
    return;
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(pixKey).then(
      () => {
        setAlertData({
          status: "success",
          message: "Chave Pix copiada com sucesso!",
        });
      },
      (err) => {
        setAlertData({
          status: "error",
          message: "Falha ao copiar a chave Pix",
        });
      },
    );
  };

  return (
    <div className="presents container">
      {alertData && (
        <Alert
          status={alertData.status}
          message={alertData.message}
          onClose={() => setAlertData(null)}
        />
      )}
      <Title
        text={"Lista de Presentes"}
        leftDrawId="bird-left"
        rightDrawId="bird-right"
      />
      <p>
        Desde que nos conhecemos, sempre sonhamos em conhecer o Japão juntos.
        Por isso, escolhemos esse destino para a nossa lua de mel. Se você
        quiser nos presentear, ficaremos muito felizes e gratos com uma
        contribuição para essa viagem.
      </p>
      <p>
        Deixamos aqui nosso Pix e também um link para uma plataforma de
        presentes de casamento.
        <br />
        Obrigado por fazer parte desse momento com a gente.
      </p>

      <div className="presents-wrapper">
        <div className="tips-card">
          <h3>Pix</h3>
          <p>{pixKey}</p>
          <div className="tips-action">
            <button onClick={handleCopyToClipboard}>Copiar Chave Pix</button>
          </div>
        </div>
        <div className="tips-card">
          <h3>Casar.com</h3>
          <p>Plataforma de presentes de casamento</p>
          <div className="tips-action">
            <button onClick={handleButtonClick}>Casar.com</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Presents };
