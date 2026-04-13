import { Title } from "../title";

import "./style.css";

const Cerimony = () => {
  return (
    <div className="cerimony container">
      <Title text={"A Cerimônia"} leftDrawId="sp-flag" rightDrawId="pequi" />
      <p>
        Estamos muito felizes em ter você com a gente nesse dia.
        <br />
        Pra nós, esse momento marca a união das nossas famílias e o começo da
        nossa, e ter nossos amigos e pessoas amadas ao nosso lado, celebrando
        esse rito de passagem com a gente, é uma alegria enorme.
      </p>
      <p>
        A cerimônia acontece no dia 06 de setembro de 2026, às 16h, na Fazenda
        Primavera e a festa será no mesmo local, logo após a cerimônia.
      </p>

      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1908.3565414418817!2d-49.269047461205346!3d-16.939439430129905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTbCsDU2JzIyLjAiUyA0OcKwMTYnMDMuOSJX!5e0!3m2!1spt-BR!2sbr!4v1770586774449!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowFullScreen=""
        style={{ width: "100%", border: "none" }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <p>
        Endereço:{" "}
        <b>Rodovia BR 153, KM 527, Zona Rural, Hidrolândia - GO, 75340-000.</b>
      </p>
    </div>
  );
};

export { Cerimony };
