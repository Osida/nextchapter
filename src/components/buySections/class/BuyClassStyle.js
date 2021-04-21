import styled, { keyframes } from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  min-height: 90vh;
  overflow: auto;
  margin: 2em auto;
  padding: 1em 3em 2em;
  background-color: #303030;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
`;

export const SellOrTradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-top: 30px;
  background: #44318d;
  border-radius: 12px;
  width: 90%;
`;

export const FilterBy = styled.p`
  font-size: 20px;
  color: white;
  text-align: center;
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 8px;
`;

export const SellFilter = styled.p`
  font-size: 20px;
  color: #6ff53f;
  cursor: pointer;
`;

export const TradeFilter = styled.p`
  font-size: 20px;
  color: #efad4b;
  cursor: pointer;
`;

export const BothFilter = styled.p`
  font-size: 20px;
  cursor: pointer;
  color: red;
`;

export const ClassesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ClassContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  margin-top: 30px;
  background: #44318d;
  border-radius: 12px;
  width: 90%;
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
  width: 175px;
  height: 225px;
  background-image: url(Image);
  margin-right: 15px;
  margin-bottom: 15px;
  border: 4px solid ${(props) => props.primary};

  transition: all 0.5 ease;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;

const spinSafari = keyframes`
0% { -webkit-transform: rotate(0deg); }
100% { -webkit-transform: rotate(360deg); }
`;

const spin = keyframes`
0% { transform: rotate(0deg); }
100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  margin: 90px;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #d83f87;
  width: 120px;
  height: 120px;
  -webkit-animation: ${spinSafari} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export const NoBooks = styled.h1`
  margin: 100px;
  color: #d83f87;
  font-size: 30px;
`;
