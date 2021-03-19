import React from 'react';
import * as S from './BuyClassStyle';
import { Books } from './Books';

export const Class = ({ course }) => {
  console.log(course, Image);
  return (
    <S.ClassContainer>
      <S.ClassTitle>{course.course}</S.ClassTitle>
      <S.BooksContainer>
        {course.books.map((book) => (
          <Books book={book} />
        ))}
      </S.BooksContainer>
    </S.ClassContainer>
  );
};
