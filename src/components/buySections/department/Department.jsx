import React from 'react';
import * as S from './DepartmentStyle';

export const Department = ({ depInfo, clickedDept }) => {
  return (
    <S.Container onClick={() => clickedDept(depInfo.id)}>
      <h1>{depInfo.department}</h1>
    </S.Container>
  );
};
