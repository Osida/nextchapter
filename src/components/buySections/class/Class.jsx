import React from 'react';
import * as S from './BuyClassStyle';
import { Books } from './Books';

export const Class = ({ course, getClass }) => {
  return (
    <S.ClassContainer>
      <S.ClassTitle>{course.course}</S.ClassTitle>
      <S.BooksContainer>
        {course.books.map((book) => (
          <Books
            key={Math.floor(Math.random() * 10000)}
            book={book}
            course={course}
            getClass={getClass}
          />
        ))}
      </S.BooksContainer>
    </S.ClassContainer>
  );
};
