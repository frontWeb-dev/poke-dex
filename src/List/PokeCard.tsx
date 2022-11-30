import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';
import { useNavigate } from 'react-router-dom';
import { fetchPokemonDetail, PokeCardProps, PokemonsDetailType } from '../apis/pokemonAPI';

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonsDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`);
  };

  useEffect(() => {
    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })();
  });

  return (
    <>
      {!pokemon ? (
        <div>Loding...</div>
      ) : (
        <Card onClick={handleClick}>
          <Header>
            <PokeNameChip name={props.name} id={pokemon.id} />
          </Header>
          <Body>
            <img src={pokemon.images.dreamWorld} alt={pokemon.name} />
          </Body>
          <Footer>
            <PokeNameChip name='Pokémon' />
          </Footer>
        </Card>
      )}
    </>
  );
};

const Card = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 300px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    background-color: yellow;
    opacity: 0.8;
  }
`;

const Header = styled.section`
  display: flex;
  // margin: 8px 0;
`;

const Body = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 180px;
    height: 180px;
  }
`;

const Footer = styled.section`
  display: flex;
  margin-left: auto;
`;

export default PokeCard;
