import React from 'react';
import * as S from './BuyClassStyle';
import { BuyHeading } from './../BuyHeading';
import { CatHeadAndSearch } from './../CatHeadAndSearch';
import { ClassList } from './ClassList';

export const BuyClass = ({ button, classInfo, getClass, searchClass }) => {
  return (
    <S.Container>
      <BuyHeading button={button} />
      <CatHeadAndSearch
        department={classInfo.department}
        searchClass={searchClass}
        classInfo={classInfo}
      />

      <ClassList classes={classInfo.classes} getClass={getClass} />
    </S.Container>
  );
};
