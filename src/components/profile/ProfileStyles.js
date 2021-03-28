import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const Profile = styled.div`
  /* background-color: ${(props) => props.theme.purpleGem}; */
`;

export const ProfileForm = styled.div`
  background-color: lightblue;
  margin: 63px 0;
  box-shadow: 0px 4px 10px 0px #000000 16%;
  border-radius: 4px;
  padding: 2em 1.5em;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const ProfileLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  /* border: 2px solid lightgreen; */
  margin-right: 1em;
`;

export const TextWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.6em;
`;

export const Divider = styled.hr`
  background: linear-gradient(0deg, #303030, #303030);
  opacity: 0.2;
  width: 95%;
  margin: 3em auto 3em auto;
`;

export const Header = styled.div`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-right: 0.5em;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const ProfileRight = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 3;
  /* margin-left: 5em; */
  /* margin-right: 0; */
  /* border: 2px solid lightcoral; */
`;

export const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 0.8em;
`;

export const InputLabel = styled.div`
  font-size: 18px;
  font-weight: 400;
  line-height: 30px;
  margin-bottom: 0.5em;
  margin-left: 0.9em;
`;

export const BtnWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
`;
