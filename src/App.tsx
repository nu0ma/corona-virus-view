import React from 'react';
import { Country } from './components/Country';
import styled from 'styled-components';

function App() {
  return (
    <Wrapper>
      <div>
        <h1>Corona Virus Statistics</h1>
      </div>
      <Country />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 4%;
`;
