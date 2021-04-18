import React from 'react';
import * as S from './DepartmentListStyle';
import { Department } from './department/Department';
import { useStateValue } from '../../context/StateProvider';

export const DepartmentList = ({ depInfo, clickedDept }) => {
  const [{ departmentsDisplay }, dispatch] = useStateValue();
  const depts = departmentsDisplay;
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
