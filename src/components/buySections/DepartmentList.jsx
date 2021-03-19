import React from 'react';
import * as S from './DepartmentListStyle';
import { Department } from './department/Department';

export const DepartmentList = ({ depInfo, clickedDept }) => {
  return (
    <S.Container>
      {depInfo.map((dep) => (
        <Department key={dep.id} depInfo={dep} clickedDept={clickedDept} />
      ))}
    </S.Container>
  );
};
