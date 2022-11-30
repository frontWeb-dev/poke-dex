import React from 'react';
import styled from '@emotion/styled';

const PokeNameChip = ({ name, number = null }: any) => {
  return (
    <Chip>
      {number && <Number>{number}</Number>}
      <Name>{name}</Name>
    </Chip>
  );
};

const Chip = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  box-shadow: 0.5px 0.5px 0 0 #c0c0c0;
  background-color: #fff;
`;

const Number = styled.div`
  padding: 2px 8px;
  background-color: red;
  border-radius: 16px;
`;

const Name = styled.label`
  padding: 0 8px;
`;

export default PokeNameChip;
