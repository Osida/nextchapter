import React from 'react';
import * as S from './BuyClassStyle';
import { Class } from './Class';

export const ClassList = ({ classes, getClass }) => {
  return (
    <S.ClassesContainer>
      {classes.map((course) => (
        <Class
          key={Math.floor(Math.random() * 10000)}
          course={course}
          getClass={getClass}
        />
      ))}
    </S.ClassesContainer>
  );
};
