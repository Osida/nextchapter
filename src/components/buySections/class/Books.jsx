import React from 'react';
import * as S from './BuyClassStyle';
import Image from './imgs/bookImg.PNG';

export const Books = ({ book }) => {
  return <S.BookImg src={Image}></S.BookImg>;
};
