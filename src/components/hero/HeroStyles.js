import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Hero = styled.div`
  background-color: ${(props) => props.theme.purpleGem};
  color: white;
  /* min-height: 90vh; */
  padding: 6em 0;
`;

export const HeroWrapper = styled.div`
  /* border: 3px solid red; */
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 70vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 50%;
  height: auto;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeroTitle = styled.div`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
  margin-bottom: 16px;
`;

export const HeroSubTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 50px;
`;

export const ImageWrap = styled.div`
  max-width: 50%;
  height: auto;
`;

export const HeroImage = styled.img``;
