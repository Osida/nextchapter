import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './BuyClassStyle';
import { Class } from './Class';
import { db } from './../../../database/firebaseConfig';
import { actionTypes } from '../../../context/reducer';
import { Books } from './Books';

export const ClassList = ({ classes, getClass }) => {
  const [{ books, courses, coursesDisplay }, dispatch] = useStateValue();
  const [filterType, setFilterType] = useState('both');
  const [data, setData] = useState(books);

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
      {coursesDisplay.map((course) =>
        data.filter((book) => book.courseUsedIn === course).length !== 0 ? (
          <Class
            key={Math.floor(Math.random() * 10000)}
            filter={filterType}
            course={course}
            getClass={getClass}
          />
        ) : (
          ''
        )
      )}
    </S.ClassesContainer>
  );
};
