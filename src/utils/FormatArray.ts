const { flag } = require('country-emoji');

export const setCountryEmoji = (countryName: string) =>
  flag(countryName) ? `${flag(countryName)} ${countryName}` : countryName;

// arg:data.features
export const FormatArray = (arr: any[]) => {
  if (arr !== undefined) {
    const formattedArray = arr
      .map((f: any) => f.attributes)
      .map((f: any) => ({
        name: setCountryEmoji(f.Country_Region), //　Add Country Emoji
        coordinates: [f.Lat, f.Long_],
        confirmed: f.Confirmed,
        deaths: f.Deaths,
        recovered: f.Recovered
      }));

    return formattedArray;
  }
};
