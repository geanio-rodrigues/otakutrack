import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from '../components/Cards';
import { navItems } from '../components/navItems';

// Função para buscar os gêneros
async function findAllGenres() {
  const url = 'https://api.jikan.moe/v4/genres/anime?filter=genres';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch(error) {
    console.error("Falha ao buscar gêneros:", error);
    return [];
  }
}


export default function Category() {
  const { category } = useParams();
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para o nome da categora
  function getCategoryName() {

    const dropdown = navItems
      .find(item=> item.type === 'dropdown')
      ?.options.find(option => option.path === `/${category}`);
    if(dropdown) {
      return dropdown.label;
    } else {
      const item = navItems
        .find(item => item.path === `/${category}`);
      return item.label;
    }
  }

  useEffect(() => {

    // Função para montar mais de uma página (cada página contém 25 animes);
    async function fetchPaginetedData(baseUrl, totalPages = 3) {
      let allItems = [];

      for(let page = 1; page <= totalPages; page++){
        const pageUrl = `${baseUrl}&page=${page}`;
        try {
          const response = await fetch(pageUrl);

          if(response.status === 429) {
            await new Promise(resolve => setTimeout(resolve, 2000)); // Esperar 2 segundos em caso de erro por muitas requisições
            page--; // Tentar a mesma página novamente
            continue;
          }
          
          const pageData = await response.json();
          if(pageData.data){
            allItems.push(...pageData.data);
          }

          await new Promise(resolve => setTimeout(resolve, 500)) // Pausa entre as requisições

        } catch (error) {
          console.error(`Falha ao buscar a página ${page}:`, error);
          break; // Interromper o loop em caso de erro
        }
      }

      return allItems;
    }

    async function fetchAnimes() {
      setLoading(true);
      setAnimes([]); // Limpa a lista anterior ao buscar uma nova categoria

      let url = '';

      // Casos especiais, novidades e populares
      if (category === 'new') {
        url = `https://api.jikan.moe/v4/anime?order_by=start_date&sort=desc&type=tv`;
      } else if (category === 'popular') {
        url = `https://api.jikan.moe/v4/anime?order_by=members&sort=desc`;
      } else {
        // Se não for caso especial é um gênero, primeiro buscar na lista de gêneros.
        const genre = await findAllGenres();
        const findedGenre = genre.find(
          (g) => g.name.toLowerCase() === category.toLowerCase()
        );

        if(findedGenre) {
          // Se o gênero for encontrado usar seu ID para montar a URL
          url = `https://api.jikan.moe/v4/anime?genres=${findedGenre.mal_id}&order_by=score&sort=desc`
        } else {
          // Caso o gênero da URL não exista na API
          console.error(`Gênero '${category}' não encontrado`);
          return;
        }
      }

      try {
        const allAnimes = await fetchPaginetedData(url);
        setAnimes(allAnimes);
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
      <h2 className='text-center p-3'>
        Categoria: {getCategoryName()}
      </h2>
      {loading ? (
        <p className='text-center'>Carregando...</p>
      ) : (
        <Cards animes={animes} prefix={category} />
      )}
    </div>
  );
}