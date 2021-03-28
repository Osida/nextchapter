import React, { useState } from 'react';
import * as S from './BuyClassStyle';
import { Class } from './Class';

export const ClassList = ({ classes, getClass }) => {
  const [filterType, setFilterType] = useState('both');

  const getFilter = (e) => {
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
      {classes.map((course) => (
        <Class
          key={Math.floor(Math.random() * 10000)}
          filter={filterType}
          course={course}
          getClass={getClass}
        />
      ))}
    </S.ClassesContainer>
  );
};
