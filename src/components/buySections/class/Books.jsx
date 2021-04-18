import React from 'react';
import { actionTypes } from '../../../context/reducer';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './BuyClassStyle';
import Image from './imgs/bookImg.PNG';

export const Books = ({ book }) => {
  const [{ bookDisplayed }, dispatch] = useStateValue();
  const primary = book.type === 'sell' ? '#6FF53F' : '#EFAD4B';

  const setBook = () => {
    console.log(book);
    dispatch({
      type: actionTypes.SET_SELECTED_BOOK,
      selectedBook: book,
    });

    dispatch({
      type: actionTypes.SET_ON_CLASSES_PAGE,
      onClassesPage: false,
    });
    dispatch({
      type: actionTypes.SET_ON_BOOK_PAGE,
      onBookPage: true,
    });
  };

  return (
    <S.BookImg src={Image} onClick={setBook} primary={primary}></S.BookImg>
  );
};
