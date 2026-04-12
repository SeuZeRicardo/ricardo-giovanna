import { Title } from "../title";

const Transport = () => {
  return (
    <div className="transport container">
      <Title
        text={"Transporte"}
        leftDrawId="flower-left"
        rightDrawId="flower-right"
      />
      <p>
        A Fazenda Primavera fica a aproximadamente 30 minutos de carro de
        Hidrolândia.
      </p>

      <p>
        Vamos disponibilizar transfers de ida e volta para nossos convidados, a
        partir de um ponto de encontro. Os detalhes, como horários e endereço,
        serão informados pela nossa cerimonial em uma data mais próxima da
        cerimônia.
      </p>
      <p>
        Para quem preferir ir por conta própria, haverá estacionamento no local.
        Para os convidados que pretendem consumir bebida alcoólica, recomendamos
        o uso do transporte disponibilizado ou que se organizem com um motorista
        da rodada.
      </p>
    </div>
  );
};

export { Transport };
