import React, { useState, useEffect } from 'react';
import * as S from './BuyHeadingStyle';

export const BuyHeading = ({ button, backToDept = '', backToClasses = '' }) => {
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
        <S.BackButton onClick={backToDept ? backToDept : backToClasses}>
          Back
        </S.BackButton>
      ) : (
        <S.BackButton style={{ opacity: 0, pointerEvents: 'none' }}>
          Back
        </S.BackButton>
      )}
      <S.Heading>Buy or Trade a Book</S.Heading>
    </S.HeadingContainer>
  );
};
