import React from 'react';
import styled from 'styled-components';
import { Country } from '../components/Country';

export function Home() {
  return (
    <Wrapper>
      <div>
        <StyledTitle>Corona Virus Statistics</StyledTitle>
      </div>
      <Country />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
  @media (max-width: 600px) {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 2%;
  }
`;

const StyledTitle = styled.h1`
  @media (max-width: 600px) {
    font-weight: 10;
    padding-top: 10px;
    text-align: center;
  }
`;
