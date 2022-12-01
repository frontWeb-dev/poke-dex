import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';
import { PokeCardProps } from '../apis/pokemonAPI';
import { PokeImageSkeleton } from './../Common/PokeImageSkeleton';
import { useIntersectionObserver } from 'react-intersection-observer-hook';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { fetchPokemonDetail } from './../store/pokemonDetallSlice';

const PokeCard = (props: PokeCardProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [ref, { entry }] = useIntersectionObserver();
  const imageType = useSelector((state: RootState) => state.imageType.type);
  const { pokemonDetails } = useSelector((state: RootState) => state.pokemonDetail);
  const pokemon = pokemonDetails[props.name];
  const isVisible = entry && entry.isIntersecting;

  const handleClick = () => {
    navigate(`/pokemon/${props.name}`, {
      state: pokemon,
    });
  };

  useEffect(() => {
    if (!isVisible) return;
    dispatch(fetchPokemonDetail(props.name));
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
        <img src={pokemon.images[imageType]} alt={pokemon.koreanName} />
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

  @media (max-width: 760px) {
    width: 170px;
    height: 230px;
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

    @media (max-width: 760px) {
      width: 140px;
      height: 140px;
    }
  }
`;

const Footer = styled.section`
  display: flex;
  margin-left: auto;
`;

export default PokeCard;
