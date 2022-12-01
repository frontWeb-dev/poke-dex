import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';
import { fetchPokemonDetail, PokeCardProps, PokemonsDetailType } from '../apis/pokemonAPI';
import { PokeImageSkeleton } from './../Common/PokeImageSkeleton';
import { useIntersectionObserver } from 'react-intersection-observer-hook';

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const [ref, { entry }] = useIntersectionObserver();
  const isVisible = entry && entry.isIntersecting;

  const [pokemon, setPokemon] = useState<PokemonsDetailType | null>(null);

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`, {
      state: pokemon,
    });
  };

  useEffect(() => {
    if (!isVisible) return;

    (async () => {
      const detail = await fetchPokemonDetail(props.name);
      setPokemon(detail);
    })();
  }, [props.name, isVisible]);

  if (!pokemon) {
    return (
      <Card color={'#fff'} ref={ref}>
        <Header>
          <PokeNameChip name='포켓몬' id={1} color={'#ffca09'} />
        </Header>
        <Body>
          <PokeImageSkeleton />
        </Body>
        <Footer>
          <PokeNameChip name='Pokémon' />
        </Footer>
      </Card>
    );
  }

  return (
    <Card onClick={handleClick} color={pokemon.color} ref={ref}>
      <Header>
        <PokeNameChip name={pokemon.koreanName} id={pokemon.id} color={pokemon.color} />
      </Header>
      <Body>
        <img src={pokemon.images.dreamWorld} alt={pokemon.koreanName} />
      </Body>
      <Footer>
        <PokeNameChip name='Pokémon' />
      </Footer>
    </Card>
  );
};

const Card = styled.li<{ color: string }>`
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
    background-color: ${(props) => props.color};
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
