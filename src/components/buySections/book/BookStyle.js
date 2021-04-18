import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  overflow: auto;
  margin: 2em auto;
  padding: 1em 3em 4em;
  background-color: #303030;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 6px;
`;

export const Class = styled.h2`
  font-size: 20px;
  color: #fff;
  margin: 15px;
`;

export const BookInfoContainer = styled.div`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
  justify-items: center;
  align-items: center;
`;

export const BookImage = styled.img`
  grid-row: 1 / span 14;
  width: 200px;
  height: 330px;
`;

export const BookP = styled.p`
  font-size: 20px;
  margin: 15px 0;
  text-align: center;
  width: 100%;
  color: #b6b6b6;
`;

export const BookLabel = styled.p`
  font-size: 18px;
  margin: 5px 0;
  text-align: left;
  width: 100%;
  color: #b6b6b6;
`;

export const BookDetail = styled.p`
  font-size: 18px;
  margin: 5px 0;
  text-align: center;
  padding: 5px;
  width: 100%;
  background: #44318d;
  color: #fff;
`;

export const ContactButton = styled.button`
  width: 200px;
  padding: 8px;
  border-radius: 23px;
  color: black;
  background: #fff;
  outline: 0;
  border: none;
  font-size: 18px;
  transition: all 0.4s ease;

  &:hover {
    color: #d83f87;
    background: #000;
    cursor: pointer;
  }
`;
