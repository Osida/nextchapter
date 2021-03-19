import React from 'react';
import * as S from './BuyClassStyle';
import { BuyHeading } from './../BuyHeading';
import { CatHeadAndSearch } from './../CatHeadAndSearch';
import { ClassList } from './ClassList';

export const BuyClass = ({ heading, button, classInfo }) => {
  return (
    <S.Container>
      <BuyHeading button={button} />
      <CatHeadAndSearch heading={heading} department={classInfo.department} />
      <ClassList classes={classInfo.classes} />
    </S.Container>
  );
};
