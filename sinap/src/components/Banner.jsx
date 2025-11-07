import React from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Home.css";
import logoBanner from "../assets/logo-banner.png";

function Banner() {
  const navigate = useNavigate();

  const handleLearnClick = () => {
    navigate("/conceitos");
  };

  return (
    <section className="banner">
      <div className="banner-content">
        <img src={logoBanner} alt="Logo Banner SINAP" className="banner-logo" />
        <div className="banner-text">
          <span className="badge">🎓 Educação Digital Inclusiva</span>
          <h2>
            Aprenda <span className="highlight">Informática</span> em{" "}
            <span className="highlight underline">Libras</span>
          </h2>
          <p>
            Plataforma educacional 100% acessível com vídeos em Língua Brasileira
            de Sinais, criada por estudantes para promover a{" "}
            <strong>inclusão digital</strong>.
          </p>
          <div className="banner-icons">
            <div>💯 100% Gratuito</div>
            <div>♿ Acessível</div>
            <div>🤟 Em Libras</div>
          </div>
          <button className="cta-button" onClick={handleLearnClick}>
            🌟 Começar a Aprender
          </button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
