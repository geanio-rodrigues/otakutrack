import './News.css';

const NewsHighlight = () => (
  <div className="news-container">
    <div className="news-content">
      <h2>As últimas notícias sobre <span className="highlight">One Piece</span></h2>
      <p>
        O retorno do anime com a segunda parte do arco de <span className="highlightP">Egghead</span>, em abril, conquistou incríveis avaliações...
        A <span className="highlightP">Netflix</span> também está a desenvolver um novo anime baseado no trabalho de Eiichiro Oda...
      </p>
      <a href="#" className="read-more">Leia mais <i className="fas fa-arrow-right"></i></a>
    </div>
  </div>
);

export default NewsHighlight;
