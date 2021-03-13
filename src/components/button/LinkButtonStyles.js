import styled, { css } from "styled-components/macro";
import { Link as LinkR } from "react-router-dom";

export const LinkBtnWrap = styled.span`
  display: flex;
  align-items: center;
  color: ${(props) => (props.textColor ? props.textColor : "#44318D")};
`;

export const LinkButton = styled(LinkR)`
  color: ${(props) => (props.textColor ? props.textColor : "#44318D")};
  font-size: ${(props) => (props.textSize ? props.textSize : "15px")};
  font-weight: ${(props) => (props.textWeight ? props.textWeight : "700")};
  padding-right: 0.5em;
  text-decoration: none;
`;
