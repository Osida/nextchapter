import React from 'react';
import * as S from './CatHeadAndSearchStyle';

export const CatHeadAndSearch = ({
  heading,
  department = '',
  search = '',
  searchClass = '',
  classInfo,
}) => {
  return (
    <S.Container>
      <S.Header>{`${department ? department : heading}`}</S.Header>
      <S.SearchLabel>Search {heading}</S.SearchLabel>
      <S.SearchBar
        type="text"
        onChange={(e) =>
          search
            ? search.call(this, e)
            : searchClass.call(this, e, classInfo.classes)
        }
      ></S.SearchBar>
    </S.Container>
  );
};
