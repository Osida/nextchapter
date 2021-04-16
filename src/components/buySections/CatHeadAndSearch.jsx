import React from 'react';
import * as S from './CatHeadAndSearchStyle';
import { actionTypes } from './../../context/reducer';
import { useStateValue } from './../../context/StateProvider';

export const CatHeadAndSearch = ({
  search = '',
  searchClass = '',
  classInfo,
}) => {
  const [{ department }, dispatch] = useStateValue();

  return (
    <S.Container>
      <S.Header>{`${department}`}</S.Header>
      <S.SearchLabel>Search {department}</S.SearchLabel>
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
