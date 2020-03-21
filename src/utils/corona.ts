const { flag } = require('country-emoji');

const getTotal = (data: Data[], prop: string) => {
  return data.reduce(function(accumulator: number, currentValue: any) {
    return accumulator + currentValue[prop];
  }, 0);
};

const setCountryEmoji = (countryName: string) =>
  flag(countryName) ? `${flag(countryName)} ${countryName}` : countryName;

export const getData = async (search: string) => {
  // resource https://github.com/mathdroid/covid-19-api
  const res = await fetch(
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true'
  );
  const data = await res.json();
  const countries: Data[] = data.features
    .map((f: any) => f.attributes)
    .filter((country: any) =>
      search.length
        ? country.Country_Region.toLowerCase() === search.toLowerCase()
        : true
    )
    .map((f: any) => ({
      name: setCountryEmoji(f.Country_Region), //　Add Country Emoji
      coordinates: [f.Lat, f.Long_],
      confirmed: f.Confirmed,
      deaths: f.Deaths,
      recovered: f.Recovered
    }));

  return countries;
};

export const getGlobalData = async () => {
  const res = await fetch(
    'https://services1.arcgis.com/0MSEUqKaxRlEPj5g/arcgis/rest/services/ncov_cases/FeatureServer/2/query?f=json&where=Confirmed%20%3E%200&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=Confirmed%20desc&resultOffset=0&resultRecordCount=200&cacheHint=true'
  );
  const data = await res.json();
  const countries: Data[] = data.features
    .map((f: any) => f.attributes)
    .map((f: any) => ({
      name: f.Country_Region,
      coordinates: [f.Lat, f.Long_],
      confirmed: f.Confirmed,
      deaths: f.Deaths,
      recovered: f.Recovered
    }));

  const deaths = getTotal(countries, 'deaths');
  const recovered = getTotal(countries, 'recovered');
  const confirmed = getTotal(countries, 'confirmed');

  const totalData: TotalData = {
    deaths: deaths,
    confirmed: confirmed,
    recovered: recovered
  };

  return totalData;
};
