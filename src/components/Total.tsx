import React, { FC, useMemo, useState } from 'react';
import { getGlobalData } from '../utils/corona';
import styled from 'styled-components';

export const Total: FC = () => {
  const [total, setTotal] = useState<TotalData>();

  useMemo(async () => {
    const globalData: TotalData = await getGlobalData();
    setTotal(globalData);
    console.log(globalData);
  }, []);

  return (
    <TotalWrapper>
      <div>
        Confirmed<p>{total?.confirmed}</p>
      </div>
      <div>
        Deaths
        <p>{total?.deaths}</p>
      </div>
      <div>
        Recovered<p>{total?.recovered}</p>
      </div>
    </TotalWrapper>
  );
};

const TotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
`;
