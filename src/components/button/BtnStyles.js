import styled from "styled-components/macro";
// import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Button = styled(LinkR)((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textDecoration: "none",
  borderRadius: "8px",
  border: "0",
  outline: "0",
  fontSize: props.font_size ? props.font_size : "14px",
  fontWeight: props.font_weight ? props.font_weight : "600",
  // lineHeight: "20px",
  fontStyle: "normal",
  maxWidth: props.max_height ? props.max_width : "98px",
  maxHeight: props.max_height ? props.max_height : "40px",
  padding: props.padding ? props.padding : "10px 18px",
  color: props.color ? props.color : "white",
  background: props.bg ? props.bg : "#d83f87",

  WebkitTransform: "perspective(1px) translateZ(0)",
  transform: "perspective(1px) translateZ(0)",
  boxShadow: "0 0 1px rgba(0, 0, 0, 0)",
  overflow: "hidden",
  WebkitTransition: "color, background-color 0.3s ease-in-out",
  transition:
    "color, background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms ease-in-out",

  "&:hover, &:focus, &:active": {
    background: "#fff",
    // color: "#303030",
    color: "#D83F87",
    WebkitTransition: "color, background-color 0.3s ease-in-out",
    transition: "color, background-color 0.3s ease-in-out",
  },
}));
