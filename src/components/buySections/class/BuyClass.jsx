import React from 'react';
import * as S from './BuyClassStyle';
import { BuyHeading } from './../BuyHeading';
import { CatHeadAndSearch } from './../CatHeadAndSearch';
import { ClassList } from './ClassList';

export const BuyClass = ({
  heading,
  button,
  classInfo,
  backToDept,
  getClass,
  searchClass,
}) => {
  return (
    <S.Container>
      <BuyHeading button={button} backToDept={backToDept} />
      <CatHeadAndSearch
        heading={heading}
        department={classInfo.department}
        searchClass={searchClass}
        classInfo={classInfo}
      />
      <ClassList classes={classInfo.classes} getClass={getClass} />
    </S.Container>
  );
};
