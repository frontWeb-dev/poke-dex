import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { fetchPokemons, PokemonListType } from '../apis/pokemonAPI';
import useInfiniteScroll from 'react-infinite-scroll-hook';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListType>({
    count: 0,
    next: '',
    results: [],
  });

  const [infiniteRef] = useInfiniteScroll({
    loading: false,
    hasNextPage: pokemons.next !== '',
    onLoadMore: async () => {
      const morePokemons = await fetchPokemons(pokemons.next);
      setPokemons({
        ...morePokemons,
        results: [...pokemons.results, ...morePokemons.results],
      });
    },
    disabled: false,
    rootMargin: '0px 0px 400px 0px',
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemons();
      setPokemons(result);
    })();
  }, []);

  return (
    <>
      <List>
        {pokemons.results.map((pokemon, index) => (
          <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
        ))}
      </List>
      <Loading ref={infiniteRef}>Loading</Loading>
    </>
  );
};

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 0 0 32px 0;
  padding: 0;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default PokeCardList;
