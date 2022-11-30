import React from 'react';
import styled from '@emotion/styled';
import PokeNameChip from './../Common/PokeNameChip';

const PokeDetail = () => {
  return (
    <Container>
      <ImageContainer>
        <img src='https://cdn.newswatch.kr/news/photo/202206/59393_54177_245.jpg' alt='피카츄' />
      </ImageContainer>
      <Devider />
      <InfoContainer>
        <SubTitle>기본 정보</SubTitle>
        <Table>
          <tbody>
            <tr>
              <th>번호</th>
              <td>1</td>
            </tr>
            <tr>
              <th>이름</th>
              <td>이상해씨</td>
            </tr>
          </tbody>
        </Table>
        <SubTitle>능력치</SubTitle>
        <Table>
          <tbody>
            <tr>
              <th>번호</th>
              <td>1</td>
            </tr>
            <tr>
              <th>이름</th>
              <td>이상해씨</td>
            </tr>
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
