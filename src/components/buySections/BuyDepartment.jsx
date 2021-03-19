import React from 'react';
import * as S from './BuyDepartmentStyle';
import { BuyHeading } from './BuyHeading';
import { CatHeadAndSearch } from './CatHeadAndSearch';
import { DepartmentList } from './DepartmentList';

export const BuyDepartment = ({ heading, button, depInfo, clickedDept }) => {
  return (
    <S.Container>
      <BuyHeading button={button} />
      <CatHeadAndSearch heading={heading} />
      <DepartmentList depInfo={depInfo} clickedDept={clickedDept} />
    </S.Container>
  );
};
