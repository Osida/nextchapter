import styled from 'styled-components/macro';

export const HeadingContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  border-bottom: 4px solid #464646;
  padding: 1em 0 2em;
`;

export const Heading = styled.div`
  font-size: 48px;
  color: #d83f87;
  white-space: nowrap;
`;

export const BackButton = styled.button`
  padding: 8px 15px;
  background: #44318d;
  color: #fff;
  font-size: 22px;
  border-radius: 36px;
  outline: 0;
  border: none;
  width: 100px;
  justify-self: start;

  &:hover {
    color: #d83f87;
    background: #000000;
    cursor: pointer;
  }
`;
