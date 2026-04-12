import { Title } from "../title";
import "./style.css";

const Tips = () => {
  const handleButtonClick = (href) => {
    window.open(href, "_blank");
    return;
  };

  return (
    <div className="tips container">
      <Title
        text={"Dicas e Informações"}
        leftDrawId="kitchen-left"
        rightDrawId="kitchen-right"
      />
      <h3>Traje</h3>
      <p>
        Sugerimos <b>traje esporte fino</b>. O evento será em área gramada,
        então recomendamos o uso de sapatos baixos ou saltos mais largos, para
        maior conforto ao longo da cerimônia e da festa.
      </p>
      <h3>Hospedagem</h3>
      <p>
        Aos nossos amigos e familiares que virão de outras cidades e estados,
        recomendamos a hospedagem em um dos hotéis abaixo, onde conseguimos
        negociar um desconto na estadia.
        <br />
        Para quem preferir outras opções, sugerimos buscar hospedagem na região
        dos bairros <b>Jardim Goiás</b> e <b>Alto da Glória</b>, pela
        proximidade com o ponto de encontro do transfer de ida e volta para a
        cerimônia.
      </p>
      <p>
        <i>
          Não recomendamos hospedagem em Hidrolândia, já que o acesso ao evento
          será mais fácil a partir de Goiânia.
        </i>
      </p>
      <div className="tips-wrapper">
        <div className="tips-card">
          <h3>K Hotel</h3>
          <p>
            Av. Dep. Jamel Cecílio, 2550 - Jardim Goiás, Goiânia - GO, 74810-100
          </p>
          <p>
            use o codigo abaixo para ter um desconto
            <br /> <b>GIOVANNAERICARDO</b>
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
            use o codigo abaixo para ter um desconto
            <br />
            <b>GIOVANNAERICARDO</b>
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
                  "https://atlantica.letsbook.com.br/reserva/busca?=1&promocode=GIOVANNAERICARDO",
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
