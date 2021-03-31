import styled from "styled-components/macro";

export const Slogan = styled.div`
  background-color: white;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 90vh;
  padding: 3em 0;
`;

export const Title = styled.h1`
  font-size: 70px;
  font-weight: 700;
  line-height: 80px;
  background: radial-gradient(
    60% 392.24% at 14% 10.68%,
    #8265a7 0%,
    rgba(68, 49, 141, 0.9) 44.61%,
    rgba(216, 63, 135, 0.8) 89.82%
  );
  background-size: contain;
  margin: auto;
  /* width: 75vw; */
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
