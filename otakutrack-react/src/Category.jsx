import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Cards.css';

const genreIds = {
  action: 1,
  adventure: 2,
  drama: 8,
};

const categoryNames = {
  new: 'Novidades',
  popular: 'Populares',
  action: 'Ação',
  adventure: 'Aventura',
  drama: 'Drama',
};

export default function Category() {
  const { category } = useParams();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAnimes() {
      setLoading(true);

      let url = '';

      if (category === 'new') {
        url = `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=18`;
      } else if (category === 'popular') {
        url = `https://api.jikan.moe/v4/top/anime?limit=18`;
      } else {
        const genreId = genreIds[category.toLowerCase()] || 0;
        url = genreId
          ? `https://api.jikan.moe/v4/anime?genres=${genreId}&order_by=score&sort=desc&limit=18`
          : `https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=18`;
      }

      try {
        const res = await fetch(url);
        const data = await res.json();
        setAnimes(data.data || []);
      } catch (err) {
        console.error('Erro ao buscar animes por categoria:', err);
        setAnimes([]);
      } finally {
        setLoading(false);
      }
    }
    fetchAnimes();
  }, [category]);

  return (
    <div>
      <h2 style={{ textAlign: 'center', padding: '30px 0' }}>
        Categoria: {categoryNames[category.toLowerCase()] || category}
      </h2>
      {loading ? (
        <p style={{ textAlign: 'center' }}>Carregando...</p>
      ) : (
        <div className="cards-container">
          {animes.map((anime, index) => (
            <div className="anime-card" key={`${anime.mal_id}-${index}`}>
              <img src={anime.images.jpg.image_url} alt={anime.title} />
              <div className="card-content">
                <h3>{anime.title}</h3>
                <p>{anime.type} • {anime.episodes || '?'} eps</p>
                <a
                  href={anime.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-button"
                >
                  Ver mais
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
