import React, { useState, useEffect } from 'react';
import * as S from './BuyHeadingStyle';
import { actionTypes } from './../../context/reducer';
import { useStateValue } from './../../context/StateProvider';

export const BuyHeading = ({ button, backToDept = '', backToClasses = '' }) => {
  const [buttonStatus, setButtonStatus] = useState(false);
  const [
    { onDepartmentPage, onClassesPage, onBookPage },
    dispatch,
  ] = useStateValue();

  const goToPreviousPage = () => {
    if (onClassesPage) {
      goToDepartmentsPage();
    }

    if (onBookPage) {
      goToClassesPage();
    }
  };

  useEffect(() => {
    changeButton();
  }, []);

  const changeButton = () => {
    setButtonStatus((prevState) => (prevState = button));
  };

  function goToDepartmentsPage() {
    // dispatch({
    //   type: actionTypes.SET_DEPARTMENT,
    //   department: 'Department',
    // });
    dispatch({
      type: actionTypes.SET_ON_DEPT_PAGE,
      onDepartmentPage: true,
    });
    dispatch({
      type: actionTypes.SET_ON_CLASSES_PAGE,
      onClassesPage: false,
    });
  }

  const goToClassesPage = () => {
    dispatch({
      type: actionTypes.SET_ON_CLASSES_PAGE,
      onClassesPage: true,
    });
    dispatch({
      type: actionTypes.SET_ON_BOOK_PAGE,
      onBookPage: false,
    });
  };

  return (
    <S.HeadingContainer>
      {buttonStatus ? (
        <S.BackButton onClick={goToPreviousPage}>Back</S.BackButton>
      ) : (
        <S.BackButton style={{ opacity: 0, pointerEvents: 'none' }}>
          Back
        </S.BackButton>
      )}
      <S.Heading>Buy or Trade a Book</S.Heading>
    </S.HeadingContainer>
  );
};
