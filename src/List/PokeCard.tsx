import React from 'react';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';
import { useNavigate } from 'react-router-dom';

const PokeCard = () => {
  const navigate = useNavigate();

  const handleClick = (e: any) => {
    navigate(`/pokemon/${e.target.id}`);
  };

  return (
    <Card onClick={handleClick}>
      <Header>
        <PokeNameChip name='이상해씨' number='001' />
      </Header>
      <Body>
        <img src='https://cdn.newswatch.kr/news/photo/202206/59393_54177_245.jpg' alt='피카츄' />
      </Body>
      <Footer>
        <PokeNameChip name='Pokémon' />
      </Footer>
    </Card>
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
`;

const Footer = styled.section`
  display: flex;
  margin-left: auto;
`;

export default PokeCard;
