import { Title } from "../title";
import "./style.css";

const Tips = () => {
  const handleButtonClick = (href) => {
    window.open(href, "_blank");
    return;
  };

  return (
    <div className="tips container">
      <Title text={"Dicas de Hoteis"} />
      <p>
        Como teremos o transporte para a cerimonia, sugerimos que os convidados
        reservem os hoteis mais próximo do local do local da Van, para facilitar
        o deslocamento. E caso não queiram reservar o quarto com o desconto,
        sugerimos que busquem outras opções de estadia nos bairros{" "}
        <b>Jardim Goiás</b> e <b>Alto da Glória</b>.
      </p>
      <div className="tips-wrapper">
        <div className="tips-card">
          <h3>K Hotel</h3>
          <p>
            Av. Dep. Jamel Cecílio, 2550 - Jardim Goiás, Goiânia - GO, 74810-100
          </p>
          <p>
            Temos uma oferta especial para os nossos convidados, com o cupom de
            desconto que conseguimos, vocês podem reservar o quarto com um preço
            especial nas diárias dos dias 04/09 a 07/09, com café da manhã
            incluso e outras mordomias.
          </p>
          <p>
            Código de reserva: <b>GIOVANNAERICARDO</b>
          </p>
          <div className="tips-action">
            <button
              onClick={() =>
                handleButtonClick("https://maps.app.goo.gl/WxYjCME3RdGCtN8F9")
              }
            >
              Mapa
            </button>
            <button onClick={() => handleButtonClick("https://khotel.com.br/")}>
              Site para reserva
            </button>
          </div>
        </div>

        <div className="tips-card">
          <h3>Confort Hotel Flamboyant</h3>
          <p>
            Av. Dep. Jamel Cecílio, 3549 - Jardim Goiás, Goiânia - GO, 74810-100
          </p>
          <p>
            Temos uma oferta especial para os nossos convidados, com o cupom de
            desconto que conseguimos, vocês podem reservar o quarto com 20% de
            desconto nas diárias dos dias 04/09 a 07/09, com café da manhã
            incluso e outras mordomias.
          </p>
          <p>
            Código de reserva: <b>XXXXXXXXXXXXXXXX</b>
          </p>

          <div className="tips-action">
            <button
              onClick={() =>
                handleButtonClick("https://maps.app.goo.gl/kJRF8G3B2BKxfsRA7")
              }
            >
              Mapa
            </button>

            <button
              onClick={() =>
                handleButtonClick(
                  "https://www.letsatlantica.com.br/hotel/comfort-suites-flamboyant",
                )
              }
            >
              Site para reserva
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tips };
