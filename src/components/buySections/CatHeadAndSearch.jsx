import React, { useState, useEffect } from 'react';
import * as S from './CatHeadAndSearchStyle';
import { actionTypes } from './../../context/reducer';
import { useStateValue } from './../../context/StateProvider';

export const CatHeadAndSearch = ({
  search = '',
  searchClass = '',
  classInfo,
}) => {
  const [
    {
      departments,
      courses,
      selectDepartment,
      departmentsDisplay,
      onDepartmentPage,
      onClassesPage,
    },
    dispatch,
  ] = useStateValue();
  const [state, setState] = useState('Department');

  useEffect(() => {
    setState(() => {
      if (onDepartmentPage) {
        return 'Department';
      }
      if (onClassesPage) {
        return 'Class';
      }
    });
  }, []);

  function setSearchData(e) {
    if (onDepartmentPage) {
      const searchDept = departments.filter((dept) =>
        dept.department_name.toLowerCase().includes(e.target.value)
      );

      dispatch({
        type: actionTypes.SET_DEPARTMENTS_DISPLAYED,
        departmentsDisplay: [...searchDept],
      });
      return;
    }
    if (onClassesPage) {
      const searchCourse = courses.filter((course) =>
        course.toLowerCase().includes(e.target.value)
      );

      dispatch({
        type: actionTypes.SET_COURSESDISPLAY,
        coursesDisplay: [...searchCourse],
      });
      return;
    }
  }

  return (
    <S.Container>
      <S.Header>{selectDepartment}</S.Header>
      <S.SearchLabel>Search {state}</S.SearchLabel>
      <S.SearchBar
        type="text"
        onChange={(e) => setSearchData.call(this, e)}
      ></S.SearchBar>
    </S.Container>
  );
};
