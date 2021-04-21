import React, { useEffect } from 'react';
import * as S from './BuyClassStyle';
import { BuyHeading } from './../BuyHeading';
import { CatHeadAndSearch } from './../CatHeadAndSearch';
import { ClassList } from './ClassList';
import { useStateValue } from '../../../context/StateProvider';
import { actionTypes } from '../../../context/reducer';

export const BuyClass = ({ button }) => {
  const [{ bookDisplayed, courses }, dispatch] = useStateValue();

  const getCourses = () => {
    console.log(courses);
    dispatch({
      type: actionTypes.SET_COURSESDISPLAY,
      coursesDisplay: [...courses],
    });
  };

  useEffect(() => {
    getCourses();
  }, []);
  return (
    <S.Container>
      <BuyHeading button={button} />
      <CatHeadAndSearch />

      <ClassList />
    </S.Container>
  );
};
