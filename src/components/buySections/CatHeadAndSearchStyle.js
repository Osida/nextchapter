import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h2`
  padding: 1em;
  font-size: 24px;
  color: #fff;
`;

export const SearchLabel = styled.label`
  font-size: 20px;
  color: #b6b6b6;
  margin-top: 15px;
`;

export const SearchBar = styled.input`
  padding: 12px 20px;
  background: #fff;
  width: 400px;
  border-radius: 24px;
  border: 1px solid transparent;
  outline: 0;
  font-size: 18px;
  margin-top: 5px;

  &:focus {
    border: 1px solid #d83f87;
  }
`;
