import React, { useState, useEffect } from 'react';
import * as S from './BuyClassStyle';
import { Books } from './Books';
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/reducer';

export const Class = ({ filter, course, getClass }) => {
  const [{ bookDisplayed }, dispatch] = useStateValue();
  const books = bookDisplayed.filter((book) => book.courseUsedIn === course);
  return (
    <S.ClassContainer>
      <S.ClassTitle>{course}</S.ClassTitle>
      <S.BooksContainer>
        {books.map((book) => (
          <Books key={Math.floor(Math.random() * 10000)} book={book} />
        ))}
      </S.BooksContainer>
    </S.ClassContainer>
  );
};
