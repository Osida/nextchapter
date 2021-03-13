import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

// style object
export const Feature = styled.div((props) => ({
  background: props.bgColor,
  padding: "80px 0",
}));

export const Wrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? props.row : "row-reverse")};
  align-items: center;
  min-height: 50vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0px 48px;

  width: ${(props) => (props.contentWidth ? props.contentWidth : "auto")};
`;

export const TopLine = styled.h4((props) => ({
  color: props.topLineColor,
  fontWeight: "700",
  fontSize: "21px",
  lineHeight: "36px",
  marginBottom: "10px",
}));

export const HeadLine = styled.div((props) => ({
  color: props.headLineColor,
  fontWeight: "700",
  fontSize: "24px",
  lineHeight: "36px",
  marginBottom: "30px",
}));

export const Description = styled.p((props) => ({
  color: props.textColor,
  fontWeight: "400",
  fontSize: "18px",
  lineHeight: "36px",
  marginBottom: "30px",
}));

export const ImageWrap = styled.div`
  width: ${(props) => (props.imageWrapSize ? props.imageWrapSize : "50%")};
`;

export const Image = styled.img``;
