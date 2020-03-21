import React, { useMemo, useState } from 'react';
import { getData } from '../utils/corona';
import styled from 'styled-components';
// import { Total } from './Total';
import { Form, Input } from 'semantic-ui-react';
import { CountryTable } from './Table';

export function Country() {
  const [countries, setCountries] = useState<Data[]>();
  const [country, setCountry] = useState<string>('');

  useMemo(async () => {
    const res = await getData('');
    setCountries(res);
    console.log(res);
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const filteredData = countries?.filter(({ name }) =>
    country ? name.toLowerCase().indexOf(country.toLowerCase()) >= 0 : true
  ) as Data[];

  return (
    <>
      {/* <Total /> */}
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          value={country}
          type="text"
          onChange={handleChange}
          placeholder="Country Name"
          icon="search"
        />
      </StyledForm>
      <CountryTable dataSource={filteredData} />
    </>
  );
}

const StyledInput = styled(Input)`
  width: 500px;
  margin: 30px auto;
`;
const StyledForm = styled(Form)`
  width: 500px;
  margin: 30px auto;
`;
