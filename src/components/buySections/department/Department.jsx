import React from 'react';
import { actionTypes } from '../../../context/reducer';
import { useStateValue } from '../../../context/StateProvider';
import * as S from './DepartmentStyle';

export const Department = ({ dept, clickedDept }) => {
  const [
    { departments, onDepartmentPage, onClassesPage },
    dispatch,
  ] = useStateValue();

  const setClickedDept = () => {
    dispatch({
      type: actionTypes.SET_COURSES,
      courses: [...dept.courses],
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
