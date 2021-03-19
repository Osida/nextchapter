import React from 'react';
import * as S from './CatHeadAndSearchStyle';

export const CatHeadAndSearch = ({ heading, department = '' }) => {
  return (
    <S.Container>
      <S.Header>{`${department ? department : heading}`}</S.Header>
      <S.SearchLabel>Search {heading}</S.SearchLabel>
      <S.SearchBar type="text"></S.SearchBar>
    </S.Container>
  );
};
