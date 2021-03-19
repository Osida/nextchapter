import React from 'react';
import * as S from './BuyClassStyle';
import { Class } from './Class';

export const ClassList = ({ classes }) => {
  console.log(classes);
  return (
    <S.ClassesContainer>
      {classes.map((course) => (
        <Class key={course.id} course={course} />
      ))}
    </S.ClassesContainer>
  );
};
