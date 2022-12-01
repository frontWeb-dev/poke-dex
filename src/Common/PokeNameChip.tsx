import React from 'react';
import styled from '@emotion/styled';
import { PokeCardProps } from '../apis/pokemonAPI';

const PokeNameChip = ({ name, color, id = undefined }: PokeCardProps) => {
  const renderNumber = (id: number) => {
    const digits = 3;
    const numberString = id.toString();
    if (numberString.length >= digits) {
      return numberString;
    }
    let result = '';

    for (let i = 0; i < digits - numberString.length; i++) {
      result += '0';
    }

    return `${result}${numberString}`;
  };

  return (
    <Chip>
      {id ? <Number color={color || 'white'}>{renderNumber(id)}</Number> : null}
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

const Number = styled.div<{ color: string }>`
  padding: 2px 8px;
  background-color: ${(props) => props.color};
  border-radius: 16px;
`;

const Name = styled.label`
  padding: 0 8px;
`;

export default PokeNameChip;
