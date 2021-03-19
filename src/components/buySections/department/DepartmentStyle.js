import styled from 'styled-components/macro';

export const Container = styled.div`
  background: #44318d;
  border-radius: 36px;
  padding: 15px 25px;
  margin-top: 15px;
  border: 1px solid transparent;
  transition: all 0.5s ease;
  width: 300px;
  text-align: center;
  color: #fff;

  &:hover {
    border: 1px solid #d83f87;
    cursor: pointer;
    background: #fff;
    color: #d83f87;
  }
`;
