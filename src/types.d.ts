// type Data = {
//   OBJECTID: number;
//   Country_Region: string;
//   Last_Update: number;
//   Lat: number;
//   Long_: number;
//   Confirmed: number;
//   Deaths: number;
//   Recovered: number;
//   Active: number;
// };

// type Feature = {
//   attributes: Data;
// };

// type Features = Feature[];

type Data = {
  name: string;
  coordinates: number[];
  confirmed: number;
  deaths: number;
  recovered: number;
};

type TotalData = {
  deaths: number;
  confirmed: number;
  recovered: number;
};
