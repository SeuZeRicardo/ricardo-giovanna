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
          <li>Piquiras</li>
          <li>Bahrem</li>
          <li>Celsin</li>
        </ul>
      </Modal>
      <Modal
        isOpen={isSecondModalOpen}
        onClose={() => setIsSecondModalOpen(false)}
        title="Salões de Beleza"
        triggerRef={secondCardRef}
      >
        <ul>
          <li>
            <a
              href="https://example.com/salao-a"
              target="_blank"
              rel="noopener noreferrer"
            >
              Salão A
            </a>
          </li>
          <li>
            <a
              href="https://example.com/salao-b"
              target="_blank"
              rel="noopener noreferrer"
            >
              Salão B
            </a>
          </li>
          <li>
            <a
              href="https://example.com/salao-c"
              target="_blank"
              rel="noopener noreferrer"
            >
              Salão C
            </a>
          </li>
        </ul>
      </Modal>
    </div>
  );
};

export default ModalTips;
