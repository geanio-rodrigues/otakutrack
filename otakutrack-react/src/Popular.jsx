import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function Popular() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.jikan.moe/v4/top/anime?limit=18")
        .then(res => res.json())
        .then(data => setAnimeList(data.data));
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Animes Populares</h2>
      <Cards animes={animeList} />
    </div>
  );
}
