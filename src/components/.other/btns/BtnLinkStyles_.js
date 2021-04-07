import styled from "styled-components/macro";
// import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ButtonLink = styled(LinkR)((props) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: props.color ? props.color : "white",
  background: !props.bg ? props.bg : "transparent",
  fontSize: "20px",
  fontWeight: "700",
}));

export const BtnLinkSpan = styled.span``;
