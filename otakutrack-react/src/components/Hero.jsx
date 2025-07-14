import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore o Universo Otaku</h1>
        <p className="hero-subtitle">Descubra os melhores animes, novidades e as últimas notícias do mundo otaku</p>
        <div className="hero-buttons">
          <button
            className="hero-btn novidades-btn"
            onClick={() => navigate('/new')}
          >
            Novidades
          </button>
          <button
            className="hero-btn popular-btn"
            onClick={() => navigate('/popular')}
          >
            Populares
          </button>
        </div>
      </div>
      <div className="hero-overlay"></div>
    </section>
  );
};

export default Hero;

