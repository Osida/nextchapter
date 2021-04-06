import styled from "styled-components/macro";

export const FeatureOne = styled.div`
  background: rgba(48, 48, 48, 0.94);
  color: white;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 90px 120px;
`;

export const Left = styled.div`
  flex: 2;
  flex-basis: 25%;
  display: flex;
  justify-content: flex-end;
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
  flex-basis: 75%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
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

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 40%;
  height: auto;
  /* background: lightsalmon; */
  text-align: center;

  &:nth-child(1),
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    /* margin-bottom: 50px; */
    margin-bottom: 60px;
  }
`;

export const Header = styled.div`
  font-size: 23px;
  font-style: normal;
  font-weight: 800;
  line-height: 30px;
  text-transform: uppercase;
`;
