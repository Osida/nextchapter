import React, { useState, useEffect } from 'react';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './BuyClassStyle';
import { Class } from './Class';
import { db } from './../../../database/firebaseConfig';

export const ClassList = ({ classes, getClass }) => {
  const [{ courses }, dispatch] = useStateValue();
  console.log(courses);
  const [filterType, setFilterType] = useState('both');

  const getFilter = (e) => {
    setFilterType(e.target.dataset.filterType);
  };

  useEffect(() => {
    console.log('get books use effect just ran');
    getBooks();
  }, []);

  async function getBooks() {
    const response = db.collection('Books');
    const data = await response.get();
    const depts = [];
    data.docs.forEach((dept) => {
      depts.push(dept.data());
    });
    console.log('just fetched data from FireBase');
    console.log(depts);
    // setData(depts);
    // addDepartmentsToDataLayer(depts);
  }

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
      {courses.map((course) => (
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
