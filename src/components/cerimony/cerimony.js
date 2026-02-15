import "./style.css";

const Cerimony = () => {
  return (
    <div className="cerimony container">
      <h2>A Cerimônia</h2>
      <p>
        A cerimônia será no Dia 06 de Setembro de 2026, às 16h na Fazenda
        Primavera - RODOVIA BR 153, KM 527 ZONA RURAL, Hidrolândia - GO,
        75340-000
      </p>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1908.3565414418817!2d-49.269047461205346!3d-16.939439430129905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU2JzIyLjAiUyA0OcKwMTYnMDMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1770586774449!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowfullscreen=""
        style={{ width: "100%", border: "none" }}
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <p style={{ fontStyle: "italic" }}>
        Vamos disponibilizar transporte para os convidados, saindo a partir das
        14 horas do Hotel Flamboyant, para mais informações, a Ammanda irá
        entrar em contato com vocês. Para os convidados que preferirem ir por
        conta própria, haverá um estacionamento disponível no local (mas
        queremos que vocês bebam e se divirtam, então o transporte
        disponibilizado é a melhor opção).
      </p>
    </div>
  );
};

export { Cerimony };
