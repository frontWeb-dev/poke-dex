import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { POKEMON_IMAGE_TYPE } from './../constant/index';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store';
import { changeImageType, PokemonImageKeyType } from '../store/imageTypeSlice';

const PageHeader = () => {
  const type = useSelector((state: RootState) => state.imageType.type);
  const dispatch = useAppDispatch();
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(
      changeImageType({
        type: e.target.value as PokemonImageKeyType,
      })
    );
  };

  return (
    <Header>
      <Title>
        <Link to='/'>Pokémon</Link>
      </Title>
      <Select value={type} onChange={handleChange}>
        <option value={POKEMON_IMAGE_TYPE.OFFCIAL_ARTWORK}>Official</option>
        <option value={POKEMON_IMAGE_TYPE.DREAM_WORLD}>DreamWorld</option>
        <option value={POKEMON_IMAGE_TYPE.FRONT_DEFAULT}>FrontDefault</option>
      </Select>
    </Header>
  );
};

const Header = styled.nav`
  display: flex;
  padding: 16px 32px;
  margin-bottom: 16px;
  border: 1px solid #c0c0c0;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  color: #ffca09;
  text-shadow: -1px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
`;

const Select = styled.select`
  display: flex;
  margin-left: auto;
  padding: 0px 12px;
  border-radius: 8px;
`;
export default PageHeader;
