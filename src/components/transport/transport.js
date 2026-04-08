import { Title } from "../title";
import "./style.css";

const Transport = () => {
  const handleButtonClick = () => {
    window.open("https://noivos.casar.com/ricardo-e-giovanna", "_blank");
    return;
  };

  return (
    <div className="transport container">
      <Title
        text={"Transporte"}
        leftDrawId="flower-left"
        rightDrawId="flower-right"
      />
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
        <button onClick={handleButtonClick}>Casar.com</button>
      </div>
    </div>
  );
};

export { Transport };
