import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Explore o Universo Otaku</h1>
        <p className="hero-subtitle">Descubra os melhores animes, novidades e as últimas notícias do mundo otaku</p>
        <div className="hero-buttons">
          <button
            className="hero-btn novidades-btn"
            onClick={() => scrollToSection('new')}
          >
            Novidades
          </button>
          <button
            className="hero-btn popular-btn"
            onClick={() => scrollToSection('popular')}
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

