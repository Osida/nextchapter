import React, { useState, useEffect } from 'react';
import { Navbar, Footer, signedIn } from '../components';
import { BuyDepartment } from '../components/buySections/BuyDepartment';
import { BuyClass } from '../components/buySections/class/BuyClass';
import { Book } from '../components/buySections/book/Book';
import { useStateValue } from '../context/StateProvider';
import { collections, db } from '../database';
import { actionTypes } from '../context/reducer';

export default function Buy() {
  console.log('you made it to the buy page');
  const [
    { departments, onDepartmentPage, onClassesPage, onBookPage },
    dispatch,
  ] = useStateValue();

  const [searchData, setData] = useState(departments);

  useEffect(() => {
    getDepartments();
  }, []);

  async function getDepartments() {
    const response = db.collection(collections.university);
    const data = await response.get();
    const depts = [];
    data.docs.forEach((dept) => {
      depts.push(dept.data());
    });
    setData(depts);
    addDepartmentsToDataLayer(depts);
  }

  function addDepartmentsToDataLayer(depts) {
    if (onClassesPage) {
      dispatch({
        type: actionTypes.SET_ON_CLASSES_PAGE,
        onClassesPage: false,
      });
    }
    if (onBookPage) {
      dispatch({
        type: actionTypes.SET_ON_BOOK_PAGE,
        onBookPage: false,
      });
    }
    dispatch({
      type: actionTypes.SET_DEPARTMENTS,
      departments: [...depts],
    });

    dispatch({
      type: actionTypes.SET_ON_DEPT_PAGE,
      onDepartmentPage: true,
    });
    dispatch({
      type: actionTypes.SET_DEPARTMENT,
      department: 'Department',
    });
  }

  return (
    <div className="buy" style={{ background: '#44318D' }}>
      <Navbar linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
      {onDepartmentPage ? <BuyDepartment button={false} /> : ''}
      {onClassesPage ? <BuyClass button={true} /> : ''}
      {onBookPage ? <Book button={true} /> : ''}
      <Footer linkR={{ ...signedIn.linkR }} linkS={{ ...signedIn.linkS }} />
    </div>
  );
}
