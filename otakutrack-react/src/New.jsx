import React, { useEffect, useState } from "react";
import Cards from "./Cards";

export default function New() {
  const [animeList, setAnimeList] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch("https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&limit=18")
        .then(res => res.json())
        .then(data => setAnimeList(data.data));
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Novidades</h2>
      <Cards animes={animeList} />
    </div>
  );
}