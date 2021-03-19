import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  overflow: auto;
  margin: 2em auto;
  padding: 1em 3em 2em;
  background-color: #303030;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
`;

export const ClassesContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
  background: #44318d;
  border-radius: 12px;
`;

export const ClassTitle = styled.div`
  padding: 10px 20px;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
  background: #303030;
  width: 150px;
  text-align: center;
`;

export const BooksContainer = styled.div`
  padding: 15px;
`;

export const BookImg = styled.img`
  width: 200px;
  height: 250px;
  background-image: url(Image);
  margin-right: 30px;
  border: 3px solid transparent;
  transition: all 0.5 ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    border: 3px solid #d83f87;
    cursor: pointer;
  }
`;
