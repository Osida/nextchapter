import React from 'react';
import * as S from './BookStyle';
import { BuyHeading } from './../BuyHeading';
import { useStateValue } from '../../../context/StateProvider';

export const Book = ({ button }) => {
  const [{ selectedBook }, dispatch] = useStateValue();
  console.log(selectedBook);
  return (
    <S.Container>
      <BuyHeading button={button} />

      <S.BookInfoContainer>
        <S.BookImage src={selectedBook.bookImg}></S.BookImage>
        <S.BookP>Book Details</S.BookP>
        <S.BookLabel>Type</S.BookLabel>
        <S.BookDetail>
          {selectedBook.type === 'trade' ? 'Trade' : 'Sell'}
        </S.BookDetail>
        <S.BookLabel>Title</S.BookLabel>
        <S.BookDetail>{selectedBook.title}</S.BookDetail>
        <S.BookLabel>Author</S.BookLabel>
        <S.BookDetail>{selectedBook.author}</S.BookDetail>
        <S.BookLabel>Edition</S.BookLabel>
        <S.BookDetail>{selectedBook.edition}</S.BookDetail>
        <S.BookLabel>Price</S.BookLabel>
        <S.BookDetail>
          {selectedBook.type === 'trade' ? 'Trade' : `$${selectedBook.price}`}
        </S.BookDetail>
        <S.BookLabel>ISBN</S.BookLabel>
        <S.BookDetail>{selectedBook.isbn}</S.BookDetail>
        <S.BookLabel>Publisher</S.BookLabel>
        <S.ContactButton>Contact Seller</S.ContactButton>
        <S.BookDetail>{selectedBook.publisher}</S.BookDetail>
      </S.BookInfoContainer>
    </S.Container>
  );
};
