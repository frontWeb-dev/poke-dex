import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';
import { useLocation, useParams } from 'react-router-dom';
import { PokeImageSkeleton } from '../Common/PokeImageSkeleton';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const PokeDetail = () => {
  const { state } = useLocation();
  const type = useSelector((state: RootState) => state.imageType.type);
  if (state.length === 0) {
    return (
      <Container>
        <ImageContainer>
          <PokeImageSkeleton />
        </ImageContainer>
        <Devider />
        <Footer>
          <PokeNameChip name='Pokémon' />
        </Footer>
      </Container>
    );
  }
  return (
    <Container>
      <ImageContainer>
        <img src={state.images[type]} alt={state.koreanName} />
      </ImageContainer>
      <Devider />
      <InfoContainer>
        <SubTitle>기본 정보</SubTitle>
        <Table>
          <tbody>
            <tr>
              <th>번호</th>
              <td>{state.id}</td>
            </tr>
            <tr>
              <th>이름</th>
              <td>{`${state.koreanName} (${state.name})`}</td>
            </tr>
            <tr>
              <th>타입</th>
              <td>{state.types.toString()}</td>
            </tr>
            <tr>
              <th>키</th>
              <td>{state.height} m</td>
            </tr>
            <tr>
              <th>몸무게</th>
              <td>{state.weight} kg</td>
            </tr>
          </tbody>
        </Table>
        <SubTitle>능력치</SubTitle>
        <Table>
          <tbody>
            {state.baseStat.map((stat: { name: string; value: string }) => (
              <tr key={state.name}>
                <th>{stat.name}</th>
                <td>{stat.value}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </InfoContainer>
      <Footer>
        <PokeNameChip name='Pokémon' />
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  margin: 16px 32px;
  padding: 16px 32px;
  border: 1px solid #c0c0c0;
  border-radius: 16px;
  box-shadow: 1px 1px 3px 1px #c0c0c0;
`;

const ImageContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 8px 0;
  min-height: 300px;

  img {
    width: 300px;
    height: 300px;
  }
`;

const Devider = styled.hr`
  margin: 32px 0;
  border-style: none;
  border-top: 1px dotted #d3d3d3;
`;

const InfoContainer = styled.section``;

const SubTitle = styled.h2`
  font-size: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  margin: 0 auto 16px;

  tr {
    line-height: 2rem;
    border-width: 1px 0;
    border-style: solid;
    border-color: #f0f0f0;
  }

  th {
    width: 1px;
    padding-right: 16px;
    white-space: nowrap;
    text-align: left;
    font-weight: normal;
    font-size: 14px;
    color: #a0a0a0;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 32px 0 16px 0;
`;
export default PokeDetail;
