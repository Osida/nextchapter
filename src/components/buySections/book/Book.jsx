import React from 'react';
import * as S from './BookStyle';
import { BuyHeading } from './../BuyHeading';
import Image from './../class/imgs/bookImg.PNG';

export const Book = ({ button, clas, book, backToClasses }) => {
  return (
    <S.Container>
      <BuyHeading button={button} backToClasses={backToClasses} />
      <S.Class>{clas}</S.Class>
      <S.BookInfoContainer>
        <S.BookImage src={Image}></S.BookImage>
        <S.BookP>Book Details</S.BookP>
        <S.BookLabel>Title</S.BookLabel>
        <S.BookDetail>{book.title}</S.BookDetail>
        <S.BookLabel>Author</S.BookLabel>
        <S.BookDetail>{book.author}</S.BookDetail>
        <S.BookLabel>Edition</S.BookLabel>
        <S.BookDetail>{book.edition}</S.BookDetail>
        <S.BookLabel>ISPN</S.BookLabel>
        <S.BookDetail>{book.ispn}</S.BookDetail>
        <S.BookLabel>Publisher</S.BookLabel>
        <S.ContactButton>Contact Seller</S.ContactButton>
        <S.BookDetail>{book.publisher}</S.BookDetail>
      </S.BookInfoContainer>
    </S.Container>
  );
};
