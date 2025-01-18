import React from 'react';

const Header = ({ onLogout }) => (
  <header style={{
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
  }}>
    <h1 style={{ margin: 0, fontSize: "1.8rem", fontFamily: "Georgia, serif" }}>
      Recetas Mágicas
    </h1>
    <button
      onClick={onLogout}
      style={{
        backgroundColor: "#f44336",
        color: "white",
        border: "none",
        borderRadius: "5px",
        padding: "10px 15px",
        cursor: "pointer",
        fontSize: "1rem"
      }}
    >
      Cerrar sesión
    </button>
  </header>
);

export default Header;
