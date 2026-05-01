import React, { useRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import gsap from "gsap";
import "./style.css";
import { useGSAP } from "@gsap/react";
import { useClickOutside } from "../../hooks";

const Modal = ({ isOpen, onClose, title, children, triggerRef }) => {
  const modalRef = useRef(null);
  const overlayRef = useRef(null);
  const contentRef = useRef(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  const getElementPosition = (element) => {
    if (!element) return { x: 0, y: 0, scale: 1 };
    const rect = element.getBoundingClientRect();
    return {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2,
      scale: Math.max(rect.width, rect.height) / Math.max(400, 500),
    };
  };

  useGSAP(() => {
    if (isOpen) {
      setShouldRender(true);
      const triggerElement = triggerRef?.current;
      const triggerPos = getElementPosition(triggerElement);
      const modalContent = contentRef.current;
      const modalRect = modalContent?.getBoundingClientRect() || {};
      const centerX = modalRect.left + modalRect.width / 2;
      const centerY = modalRect.top + modalRect.height / 2;

      // Show modal
      gsap.to(overlayRef.current, {
        duration: 0.3,
        opacity: 1,
        pointerEvents: "auto",
      });

      gsap.fromTo(
        contentRef.current,
        {
          opacity: 0,
          x: triggerPos.x - (centerX || window.innerWidth / 2),
          y: triggerPos.y - (centerY || window.innerHeight / 2),
          scale: triggerPos.scale,
        },
        {
          duration: 0.5,
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          ease: "back.out",
        },
      );
    } else if (shouldRender) {
      // Hide modal
      gsap.to(overlayRef.current, {
        duration: 0.3,
        opacity: 0,
        pointerEvents: "none",
      });

      const triggerElement = triggerRef?.current;
      const triggerPos = getElementPosition(triggerElement);
      const modalContent = contentRef.current;
      const modalRect = modalContent?.getBoundingClientRect() || {};
      const centerX = modalRect.left + modalRect.width / 2;
      const centerY = modalRect.top + modalRect.height / 2;

      gsap.to(contentRef.current, {
        duration: 0.4,
        opacity: 0,
        x: triggerPos.x - (centerX || window.innerWidth / 2),
        y: triggerPos.y - (centerY || window.innerHeight / 2),
        scale: triggerPos.scale,
        ease: "back.in",
        onComplete: () => {
          setShouldRender(false);
        },
      });
    }
  }, [isOpen, triggerRef, shouldRender]);

  // Use the click outside hook to close modal when clicking outside the content
  useClickOutside(contentRef, onClose);

  if (!shouldRender) return null;

  const modalContent = (
    <div ref={modalRef} className="modal-container">
      <div ref={overlayRef} className="modal-overlay">
        <div ref={contentRef} className="modal-content">
          <div className="modal-header">
            <h2>{title}</h2>
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              ✕
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default Modal;
