import React, { useState, useRef, useCallback } from "react";
import { createPortal } from "react-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";

const Alert = ({ status = "success", message, onClose, autoClose = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const alertRef = useRef(null);

  const handleClose = useCallback(() => {
    gsap.to(alertRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        setIsVisible(false);
        onClose && onClose();
      },
    });
  }, [onClose]);

  useGSAP(() => {
    if (alertRef.current && isVisible) {
      gsap.fromTo(
        alertRef.current,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        },
      );

      if (autoClose) {
        gsap.delayedCall(autoClose / 1000, handleClose);
      }
    }
  }, [isVisible, autoClose, handleClose]);

  if (!isVisible) return null;

  return createPortal(
    <div className="alert-container">
      <div ref={alertRef} className={`alert alert-${status}`}>
        <div className="alert-content">
          <span className="alert-icon">{status === "success" ? "✓" : "✕"}</span>
          <p className="alert-message">{message}</p>
        </div>
        <button
          className="alert-close"
          onClick={handleClose}
          aria-label="Close alert"
        >
          ×
        </button>
      </div>
    </div>,
    document.querySelector("body"),
  );
};

export { Alert };
