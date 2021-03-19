import React from 'react';
import * as S from './BuyClassStyle';
import Image from './imgs/bookImg.PNG';

export const Books = ({ book, course, getClass }) => {
  return (
    <S.BookImg
      src={Image}
      onClick={(e) => getClass.call(this, e, course, book)}
    ></S.BookImg>
  );
};
