import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';
import { fetchPokemons, PokemonListType } from '../apis/pokemonAPI';

const PokeCardList = () => {
  const [pokemons, setPokemons] = useState<PokemonListType>({
    count: 0,
    next: '',
    results: [],
  });

  useEffect(() => {
    (async () => {
      const result = await fetchPokemons();
      setPokemons(result);
    })();
  }, []);

  return (
    <List>
      {pokemons.results.map((pokemon, index) => (
        <PokeCard key={`${pokemon.name}_${index}`} name={pokemon.name} />
      ))}
    </List>
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

export default PokeCardList;
