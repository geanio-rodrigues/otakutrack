import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import './News.css';
import { useRef, useState } from 'react';

const newsData = [
  {
    title: "'O Pecado de Takopi' é o anime mais pesado da temporada",
    text: 'Anime traz alerta de conteúdo relacionado a suicídio e bullying escolar.',
  },
  {
    title: "Mangá de Vinland Saga está próximo do fim",
    text: 'Após quase 20 anos de publicação, Vinland Saga, a aclamada obra de Makoto Yukimura, parece estar chegando ao seu desfecho no dia 19 de julho.',
  },
  {
    title: "Nem Naruto, nem Dragon Ball: Um dos animes mais aclamados dos últimos anos ganhará live-action pela Netflix",
    text: 'Uma produção sul-coreana será adaptada pela gigante do streaming',
  },
  {
    title: "Morre Anísio Mello Júnior, cantor das aberturas dos animes 'Dragon Ball' e 'Dragon Ball Z'",
    text: 'O artista também atuava como baixista, produtor musical, compositor e escritor. A causa da morte não foi divulgada.',
  },
  {
    title: 'Chainsaw Man pode ganhar spin-off ainda em 2025',
    text: 'Rumores apontam novo mangá do universo de Chainsaw Man.',
  },
  {
    title: "Adaptação de 'Captain Tsubasa' será exibida no Brasil pela TV Cultura",
    text: "Título é um dos mangás mais vendidos da história e influenciou a carreira de diversos jogadores de futebol ao redor do mundo.",
  },
  {
    title: "Polemica! Crunchyroll é flagrada usando ChatGPT para traduzir animes",
    text: "Prompt escapou nas legendas do anime Necronomico and the Cosmic Horror Show. Plataforma não comentou o caso, mas já admitiu no passado testar IA nas traduções.",
  },
];

const NewsList = () => {
  const sliderRef = useRef(null);
  const [sliderInstanceRef, setSliderInstanceRef] = useState(null);

  const [slider] = useKeenSlider({
    loop: true,
    mode: 'free-snap',
   
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 25 },
      },
    },
    created: (instance) => setSliderInstanceRef(instance),
  });

  const handlePrev = () => sliderInstanceRef?.prev();
  const handleNext = () => sliderInstanceRef?.next();

  return (
    <div className="secondary-news">
      <h3 className="secondary-news-title">Outras Notícias</h3>

      <div className="carousel-container">
        <button className="arrow left" onClick={handlePrev}>&#8592;</button>

        <div ref={slider} className="news-carousel keen-slider">
          {newsData.map((news, idx) => (
            <article className="news-item keen-slider__slide" key={idx}>
              <h4>{news.title}</h4>
              <p>{news.text}</p>
            </article>
          ))}
        </div>

        <button className="arrow right" onClick={handleNext}>&#8594;</button>
      </div>

      <p className="drag-hint">Arraste para o lado ou use as setas ← →</p>
    </div>
  );
};

export default NewsList;
