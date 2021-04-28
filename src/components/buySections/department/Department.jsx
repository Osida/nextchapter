import React from 'react';
import { actionTypes } from '../../../context/reducer';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './DepartmentStyle';
import { db } from '../../../database';

export const Department = ({ dept, clickedDept }) => {
  const [
    { departments, onDepartmentPage, onClassesPage },
    dispatch,
  ] = useStateValue();


  const setClickedDept = async () => {
    const response = db
      .collection('Books')
      .where('department', '==', dept.department_name);
    const data = await response.get();
    const books = [];
    data.docs.forEach((book) => {
      books.push(book.data());
    });

    dispatch({
      type: actionTypes.SET_COURSES,
      courses: [...dept.courses],
    });
    dispatch({
      type: actionTypes.SET_BOOKS,
      books: [...books],
    });
    dispatch({
      type: actionTypes.SET_BOOKS_DISPLAYED,
      bookDisplayed: [...books],
    });
    dispatch({
      type: actionTypes.SET_DEPARTMENT,
      department: dept.department_name,
    });
    dispatch({
      type: actionTypes.SET_ON_DEPT_PAGE,
      onDepartmentPage: false,
    });
    dispatch({
      type: actionTypes.SET_ON_CLASSES_PAGE,
      onClassesPage: true,
    });
  };

  return (
    <S.Container onClick={() => setClickedDept()}>
      <h1>{dept.department_name}</h1>
    </S.Container>
  );
};
