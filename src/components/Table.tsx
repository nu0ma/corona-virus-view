import React, { FC } from 'react';
import { Table } from 'antd';

type CountryTableProps = {
  dataSource:
    | {
        name: string;
        coordinates: any[];
        confirmed: any;
        deaths: any;
        recovered: any;
      }[]
    | undefined;
};

const columns = [
  { title: 'Country', dataIndex: 'name', key: 'name' },
  {
    title: 'Confirmed',
    dataIndex: 'confirmed',
    key: 'confirmed',
    sorter: (a: any, b: any) => a.confirmed - b.confirmed
  },
  {
    title: 'Deaths',
    dataIndex: 'deaths',
    key: 'deaths',
    sorter: (a: any, b: any) => a.deaths - b.deaths
  },
  {
    title: 'Recovered',
    dataIndex: 'recovered',
    key: 'recoverd',
    sorter: (a: any, b: any) => a.recovered - b.recovered
  }
];

export const CountryTable: FC<CountryTableProps> = ({ dataSource }) => {
  return <Table dataSource={dataSource} columns={columns} pagination={false} />;
};
