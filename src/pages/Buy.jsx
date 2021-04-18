import React, { useState, useEffect } from 'react';
import { Navbar, Footer, signedIn } from '../components';
import { BuyDepartment } from '../components/buySections/BuyDepartment';
import { BuyClass } from '../components/buySections/class/BuyClass';
import { Book } from '../components/buySections/book/Book';
import { useStateValue } from '../context/StateProvider';
import { db } from '../database/firebaseConfig';
import { actionTypes } from '../context/reducer';

export default function Buy() {
  console.log('you made it to the buy page');
  const [
    { departments, onDepartmentPage, onClassesPage, onBookPage },
    dispatch,
  ] = useStateValue();

  const [depStatus, setDepStatus] = useState(true);
  const [classStatus, setClassStatus] = useState(false);
  const [bookStatus, setBookStatus] = useState(false);
  const [department, setDept] = useState({
    id: 1,
    department: 'Math',
    classes: [],
  });

  const [book, setBook] = useState({});
  const [clss, setClss] = useState('');

  const [searchData, setData] = useState(departments);
  const [searchCourse, setCourse] = useState(department);

  useEffect(() => {
    console.log('useEffect ran');
    getDepartments();
  }, []);

  async function getDepartments() {
    const response = db.collection('University');
    const data = await response.get();
    const depts = [];
    data.docs.forEach((dept) => {
      depts.push(dept.data());
    });
    console.log('just fetched data from FireBase');
    setData(depts);
    addDepartmentsToDataLayer(depts);
  }

  function addDepartmentsToDataLayer(depts) {
    dispatch({
      type: actionTypes.SET_DEPARTMENTS,
      departments: [...depts],
    });
    dispatch({
      type: actionTypes.SET_ON_DEPT_PAGE,
      onDepartmentPage: true,
    });
    dispatch({
      type: actionTypes.SET_DEPARTMENTS_DISPLAYED,
      departmentsDisplay: [...depts],
    });

    dispatch({
      type: actionTypes.SET_DEPARTMENT,
      department: 'Department',
    });
  }

  const clickedDept = (id) => {
    
  };

  const fromDeptToClasses = () => {
    setDepStatus((prev) => (prev = !depStatus));
    setClassStatus((prev) => (prev = !classStatus));
  };

  const fromClassesToDept = () => {
    console.log('back');
    setDepStatus((prev) => (prev = !depStatus));
    setClassStatus((prev) => (prev = !classStatus));
  };

  const clickedBook = (id) => {
    setBook(() => {
      const b = searchData.filter((bk) => bk);
    });
  };

  const fromBookToClasses = () => {
    console.log('back to classes');
    setClassStatus((prev) => (prev = !classStatus));
    setBookStatus((prev) => (prev = !bookStatus));
  };

  const getClass = (e, course, bk) => {
    
  };

  const searchDept = (e) => {
    
  };

  const searchClass = (e, course) => {
    const cl = department.classes.filter((cl) =>
      cl.course.toLowerCase().includes(e.target.value)
    );
    setCourse((prevState) => {
      return { ...prevState, classes: cl };
    });
  };

  return (
    <div className="buy" style={{ background: '#44318D' }}>
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      {onDepartmentPage ? <BuyDepartment button={false} /> : ''}
      {onClassesPage ? (
        <BuyClass
          button={true}
          classInfo={searchCourse}
          backToDept={fromClassesToDept}
          getClass={getClass}
        />
      ) : (
        ''
      )}
      {onBookPage ? (
        <Book
          button={true}
          clas={clss}
          book={book}
          backToClasses={fromBookToClasses}
        />
      ) : (
        ''
      )}
      <Footer linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
    </div>
  );
}
