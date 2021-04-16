import React from 'react';
import * as S from './DepartmentListStyle';
import { Department } from './department/Department';
import { useStateValue } from '../../context/StateProvider';

export const DepartmentList = ({ depInfo, clickedDept }) => {
  const [{ departments }, dispatch] = useStateValue();
  const depts = departments;
  console.log(depts);
  return (
    <S.Container>
      {depts.map((dept) => (
        <Department
          key={dept.departmet_ID}
          dept={dept}
          clickedDept={clickedDept}
        />
      ))}
    </S.Container>
  );
};
