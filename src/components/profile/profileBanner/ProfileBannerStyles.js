import styled from "styled-components/macro";

export const ProfileBanner = styled.div`
  background-color: ${(props) => props.theme.purpleGem};
  color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1em 0;
`;

export const Content = styled.div`
  width: 30%;
  position: absolute;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 56px;
  line-height: 80px;
`;

export const ColorText = styled.span`
  color: ${(props) => props.theme.christmasPink}; ;
`;

export const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 48px;
  line-height: 72px;
`;

export const ImageWrap = styled.div`
  width: 70%;
  /* position: relative; */
  margin-left: 26.5em;
`;

export const Image = styled.img``;
