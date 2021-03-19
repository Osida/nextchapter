import React, { useState, useEffect } from 'react';
import * as S from './BuyHeadingStyle';

export const BuyHeading = ({ button }) => {
  const [buttonStatus, setButtonStatus] = useState(false);
  useEffect(() => {
    changeButton();
  }, []);

  const changeButton = () => {
    setButtonStatus((prevState) => (prevState = button));
  };

  return (
    <S.HeadingContainer>
      {buttonStatus ? (
        <S.BackButton>Back</S.BackButton>
      ) : (
        <S.BackButton style={{ opacity: 0, pointerEvents: 'none' }}>
          Back
        </S.BackButton>
      )}
      <S.Heading>Buy Books</S.Heading>
    </S.HeadingContainer>
  );
};
