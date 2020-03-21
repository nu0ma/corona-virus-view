type CoronaDataType = {
  objectIdFieldName: string;
  uniqueIdField: UniqueIDField;
  globalIdFieldName: string;
  geometryType: string;
  spatialReference: SpatialReference;
  fields: Field[];
  features: Feature[];
};

type Feature = {
  attributes: Attributes;
};

type Attributes = {
  OBJECTID: number;
  Country_Region: string;
  Last_Update: number;
  Lat: number;
  Long_: number;
  Confirmed: number;
  Deaths: number;
  Recovered: number;
  Active: number;
};

type Field = {
  name: string;
  type: string;
  alias: string;
  sqlType: string;
  domain: null;
  defaultValue: null;
  length?: number;
};

type SpatialReference = {
  wkid: number;
  latestWkid: number;
};

type UniqueIDField = {
  name: string;
  isSystemMaintained: boolean;
};

type FilteredData = {
  name: string;
  coordinates: number[];
  confirmed: number;
  deaths: number;
  recovered: number;
};

// type TotalData = {
//   deaths: number;
//   confirmed: number;
//   recovered: number;
// };
