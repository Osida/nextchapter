import React, { useState, useEffect } from 'react';
import * as S from './BuyClassStyle';
import { Books } from './Books';

export const Class = ({ filter, course, getClass }) => {
  const books =
    filter === 'both'
      ? course.books
      : course.books.filter((book) => book.type === filter);

  return (
    <S.ClassContainer>
      <S.ClassTitle>{course}</S.ClassTitle>
      <S.BooksContainer></S.BooksContainer>
    </S.ClassContainer>
  );
};

// {books.map((book) => (
//   <Books
//     key={Math.floor(Math.random() * 10000)}
//     book={book}
//     course={course}
//     getClass={getClass}
//   />
// ))}
