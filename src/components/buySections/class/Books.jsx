import React from 'react';
import * as S from './BuyClassStyle';
import Image from './imgs/bookImg.PNG';

export const Books = ({ book, course, getClass }) => {
  const primary = book.type === 'sell' ? '#6FF53F' : '#EFAD4B';
  return (
    <S.BookImg
      src={Image}
      onClick={(e) => getClass.call(this, e, course, book)}
      primary={primary}
    ></S.BookImg>
  );
};
