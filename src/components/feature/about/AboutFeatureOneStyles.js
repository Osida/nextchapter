import styled from "styled-components/macro";

export const FeatureOne = styled.div`
  background: #44318d;
  color: white;
`;

export const Section = styled.div`
  display: flex;
  padding: 90px 120px;
`;

export const Left = styled.div`
  flex: 1.5;
  display: flex;
  /* justify-content: center; */
  /* background: lightcoral; */
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.hr`
  background: rgba(255, 255, 255, 0.5);
  width: 100%;
  margin-bottom: 25px;
`;

export const Title = styled.div`
  font-size: 25px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
`;

export const Right = styled.div`
  flex: 3;
  /* background: lightblue; */
`;

export const BigText = styled.div`
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 61px;
  margin-bottom: 30px;
`;

export const Text = styled.div`
  font-size: 21px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
`;
