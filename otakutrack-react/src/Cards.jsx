import React from "react";
import "./Cards.css";

export default function Cards({ animes, prefix = "" }) {
  return (
    <div className="cards-container">
      {animes.map((anime, index) => (
        <div className="anime-card" key={`${prefix}-${anime.mal_id}-${index}`}>
          <img src={anime.images.jpg.image_url} alt={anime.title} />
          <div className="card-content">
            <h3>{anime.title}</h3>
            <p><strong>Tipo:</strong> {anime.type}</p>
            <p><strong>Ano:</strong> {anime.year || "Desconhecido"}</p>
            <a href={anime.url} target="_blank" rel="noreferrer" className="view-button">
              Ver mais
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}