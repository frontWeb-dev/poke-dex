import React from 'react';
import styled from '@emotion/styled';
import PokeCard from './PokeCard';

const PokeCardList = () => {
  return (
    <List>
      {Array.from({ length: 10 }).map((_, index) => (
        <PokeCard key={index} />
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
  list-style: none;
`;

export default PokeCardList;
