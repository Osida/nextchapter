import React, { useState } from 'react';
import * as S from './BuyClassStyle';
import { Books } from './Books';

export const Class = ({ filter, course, getClass }) => {
  const books =
    filter === 'both'
      ? course.books
      : course.books.filter((book) => book.type === filter);

  return (
    <S.ClassContainer>
      <S.ClassTitle>{course.course}</S.ClassTitle>
      <S.BooksContainer>
        {books.map((book) => (
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
