import React, { useState } from 'react';
import styled from 'styled-components';
// import { Total } from './Total';
import { Form, Input } from 'semantic-ui-react';
import { CountryTable } from './Table';
import useSWR from 'swr';
import { FormatArray } from '../utils/FormatArray';
import Spinner from './Spinner';

const fetcher = (url: string) => fetch(url).then(r => r.json());

export function Country() {
  const [country, setCountry] = useState<string>('');

  const url =
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true';

  const { data, error } = useSWR<any>(url, fetcher);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const filteredData = FormatArray(data?.features)?.filter(({ name }) =>
    country ? name.toLowerCase().indexOf(country.toLowerCase()) >= 0 : true
  ) as Data[];

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;
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
