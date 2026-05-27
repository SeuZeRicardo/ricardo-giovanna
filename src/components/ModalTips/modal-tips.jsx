import React, { useState, useRef } from "react";
import Modal from "../modal";
import "./style.css";

const ModalTips = () => {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);

  return (
    <div className="modal-example-container">
      <div className="tips-card modal-trigger-card" ref={firstCardRef}>
        <h3>Bares e Restaurantes</h3>
        <p>Vamos casar na Igreja, mas uma cerveja goiana é sempre bem vinda!</p>
        <div className="tips-action">
          <button onClick={() => setIsFirstModalOpen(true)}>Bora beber</button>
        </div>
      </div>

      <div className="tips-card modal-trigger-card" ref={secondCardRef}>
        <h3>Salões de Beleza</h3>
        <p>
          Não vai ser apenas o noivo e a noiva que vão estar lindos, mas também
          os convidados!
        </p>
        <div className="tips-action">
          <button onClick={() => setIsSecondModalOpen(true)}>Veja mais</button>
        </div>
      </div>

      <Modal
        isOpen={isFirstModalOpen}
        onClose={() => setIsFirstModalOpen(false)}
        title="Bares e Restaurantes"
        triggerRef={firstCardRef}
      >
        <ul>
          <li>Empório Piquiras - Flamboyant</li>
          <li>Celsin Bar e Restaurante</li>
          <li>Carne de Sol 1008</li>
          <li>Bar Viracopos</li>
          <li>Shiva Alt Bar</li>
          <li>Fubanga Bar</li>
          <li>Restaurante Popular</li>
          <li>Sanduicheria Smiley</li>
          <li>Pimentinhas Sanduicheria</li>
          <li>Pamonha 85</li>
          <li>Subverso Coffee</li>
          <li>Café S/A</li>
        </ul>
      </Modal>
      <Modal
        isOpen={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
        title="Salões de Beleza"
        triggerRef={secondCardRef}
      >
        <ul>
          <li>Lillê Beauty & Hair SPA Studio</li>
          <li>Alpha Hair Alphaville</li>
          <li>e.ttros</li>
          <li>@marcelaelois</li>
          <li>@camilaraujomakeup</li>
          <li>@azulservulo [Apenas cortes de cabelo]</li>
        </ul>
      </Modal>
    </div>
  );
};

export default ModalTips;
