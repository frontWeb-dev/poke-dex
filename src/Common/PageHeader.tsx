import React from 'react';
import styled from '@emotion/styled';

const PageHeader = () => {
  return (
    <Header>
      <Title>Pokémon</Title>
      <Select>
        <option value='Official'>Official</option>
        <option value='A'>A</option>
        <option value='B'>B</option>
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
