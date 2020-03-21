import React from 'react';
import styled from 'styled-components';
import { Country } from '../components/Country';

export function Home() {
  return (
    <Wrapper>
      <div>
        <h1>Corona Virus Statistics</h1>
      </div>
      <Country />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;
