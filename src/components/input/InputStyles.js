import styled from "styled-components/macro";

export const Input = styled.input`
  border-radius: 100px;
  border: 1px solid rgba(225, 225, 225, 0.3);
  outline: none;
  color: #99a3ba;
  background: linear-gradient(0deg, #f0f0f0, #f0f0f0);
  display: flex;
  align-items: center;
  transition: all 0.2s ease;
  margin: 0;

  &:focus {
    border-color: ${(props) => props.theme.christmasPink};
  }
`;
