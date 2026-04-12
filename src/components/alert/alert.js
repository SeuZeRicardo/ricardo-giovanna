import React, { useState, useEffect } from "react";
import "./style.css";

const Alert = ({ status = "success", message, onClose, autoClose = 5000 }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose && onClose();
      }, autoClose);
      return () => clearTimeout(timer);
    }
  }, [autoClose, onClose]);

  const handleClose = () => {
    setIsVisible(false);
    onClose && onClose();
  };

  if (!isVisible) return null;

  return (
    <div className={`alert alert-${status}`}>
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
  );
};

export { Alert };
