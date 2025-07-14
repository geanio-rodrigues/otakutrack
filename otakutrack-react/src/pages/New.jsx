import React, { useEffect, useState } from "react";
import Cards from '../components/Cards';

export default function New() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&type=tv")
        .then(res => res.json())
        .then(data => setAnimeList(data.data));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="new">
      <h2>Novidades</h2>
      <Cards animes={animeList} />
    </section>
  );
}