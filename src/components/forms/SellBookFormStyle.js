import styled from 'styled-components/macro';

export const Container = styled.div`
  max-width: 1100px;
  overflow: auto;
  margin: 2em auto;
  padding: 1em 1em 2em;
  background-color: #ebebeb;
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 6px;
`;

export const Header = styled.h1`
  color: #d83f87;
  font-size: 48px;
  background: none;
  margin-bottom: 15px;
`;

export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Label = styled.label`
  font-size: 20px;
  align-items: flex-end;
  margin-top: 20px;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 12px 10px;
  background: #c4c4c4;
  outline: 0;
  border: 1px solid transparent;
  font-size: 18px;
  transition: all 0.4s ease;

  &:hover,
  :focus {
    border-bottom: 1px solid #d83f87;
  }
`;

export const InputFile = styled.input`
  outline: 0;
  border: none;
  margin-top: 8px;
  font-size: 24px;

  &:hover {
    cursor: pointer;
  }
`;

export const PostButton = styled.button`
  margin-top: 15px;
  font-size: 20px;
  color: #d83f87;
  font-weight: 600;
  background: #ccc;
  border: 1px solid transparent;
  transition: all 0.6s ease;
  padding: 10px 8px;

  &:hover,
  :active,
  :focus {
    color: #d83f87;
    background: #fff;
    outline: 0;
    cursor: pointer;
  }
`;

export const WarningDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  color: black;
  background: #9c6868;
  border: 2px solid #ff0000;
  margin-bottom: 0;
  font-size: 20px;
  opacity: 1;
  transition: all 0.5s ease;
`;
