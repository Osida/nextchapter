import styled, { css } from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";

export const ButtonLink = styled(LinkR)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.theme.christmasPink};
  font-size: ${(props) => props.theme.btn_fontSize}px;
  font-weight: 700;
  border-radius: 0.5em;
  line-height: 20px;
  border: none;
  outline: none;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: ${(props) => props.padding};

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
