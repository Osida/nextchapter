import React, { useState, useEffect } from 'react';
import * as S from './CatHeadAndSearchStyle';
import { actionTypes } from './../../context/reducer';
import { useStateValue } from './../../context/StateProvider';

export const CatHeadAndSearch = () => {
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
  const [dept, setDept] = useState([...departments]);
  const [course, setCourse] = useState([...courses]);

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

  useEffect(() => {
    setDisplayDepts();
  }, [dept.length]);

  useEffect(() => {
    setDisplayCourses();
  }, [course.length]);

  function setSearchData(e) {
    if (onDepartmentPage) {
      const searchDept = departments.filter((dept) =>
        dept.department_name.toLowerCase().includes(e.target.value)
      );
      setDept(searchDept);
      return;
    }
    if (onClassesPage) {
      const searchCourse = courses.filter((course) =>
        course.toLowerCase().includes(e.target.value)
      );
      setCourse(searchCourse);
      return;
    }
  }

  const setDisplayDepts = () => {
    dispatch({
      type: actionTypes.SET_DEPARTMENTS_DISPLAYED,
      departmentsDisplay: [...dept],
    });
  };

  const setDisplayCourses = () => {
    dispatch({
      type: actionTypes.SET_COURSESDISPLAY,
      coursesDisplay: [...course],
    });
  };

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
