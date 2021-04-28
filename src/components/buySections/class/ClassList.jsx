import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './BuyClassStyle';
import { Class } from './Class';
import { db } from './../../../database';
import { actionTypes } from '../../../context/reducer';
import { Books } from './Books';

export const ClassList = () => {
  const [{ books, courses, coursesDisplay }, dispatch] = useStateValue();
  const [filterType, setFilterType] = useState('both');
  const [data, setData] = useState(books);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    displayLoader();
  }, []);

  const setBooks = (books) => {
    setData(books);
  };

  const getFilter = (e) => {
    if (e.target.dataset.filterType === 'both') {
      setBooks(books);
      dispatch({
        type: actionTypes.SET_BOOKS_DISPLAYED,
        bookDisplayed: books,
      });
    }
    if (e.target.dataset.filterType === 'sell') {
      const b = books.filter((book) => book.type === 'sell');
      setBooks(b);
      console.log(b);

      dispatch({
        type: actionTypes.SET_BOOKS_DISPLAYED,
        bookDisplayed: [...b],
      });
    }

    if (e.target.dataset.filterType === 'trade') {
      const b = books.filter((book) => book.type === 'trade');
      setBooks(b);
      console.log(b);

      dispatch({
        type: actionTypes.SET_BOOKS_DISPLAYED,
        bookDisplayed: [...b],
      });
    }
    setFilterType(e.target.dataset.filterType);
  };

  const displayLoader = () => {
    setTimeout(() => {
      setShow(!show);
    }, 2000);
  };

  return (
    <S.ClassesContainer>
      <S.SellOrTradeContainer>
        <S.FilterBy>Filter By</S.FilterBy>
        <S.FilterButtons>
          <S.SellFilter data-filter-type="sell" onClick={getFilter}>
            Books for Sale
          </S.SellFilter>
          <S.BothFilter data-filter-type="both" onClick={getFilter}>
            Books for Sale & Trade
          </S.BothFilter>
          <S.TradeFilter data-filter-type="trade" onClick={getFilter}>
            Book for Trade
          </S.TradeFilter>
        </S.FilterButtons>
      </S.SellOrTradeContainer>
      {show &&
        coursesDisplay.map((course) =>
          data.filter((book) => book.courseUsedIn === course).length !== 0 ? (
            <Class key={Math.floor(Math.random() * 10000)} course={course} />
          ) : (
            ''
          )
        )}
      {show && coursesDisplay.length === 0 && (
        <S.NoBooks>No Classes with Books Were Found</S.NoBooks>
      )}

      {show && data.length === 0 && (
        <S.NoBooks>No Classes with Books Were Found</S.NoBooks>
      )}
      {!show && <S.Loader />}
    </S.ClassesContainer>
  );
};
