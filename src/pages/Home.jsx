import Hero from '../components/Hero';
import NewsHighlight from '../components/NewsHighlight';
import NewsList from '../components/NewsList';

const Home = () => {
  return (
    <main className="main-content">
      <Hero />
      <section className="news-section" id="news">
        <NewsHighlight />
        <NewsList />
      </section>
    </main>
  );
};

export default Home;
