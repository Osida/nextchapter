import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from '@material-ui/icons/Lock';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

export const ProfileForm = styled.form`
  max-width: 1100px;
  /* height: 1152px; */
  height: auto;
  background: #ffffff;
  /* background: gray; */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  margin: 36px auto;
  padding: 63px 61px;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div``;

export const RowLeft = styled.div`
  /* background: lightblue; */
  flex: 2.5;
  padding: 0 0.5em;
`;

export const RowRight = styled.div`
  flex: 2.5;
  flex-basis: 50%;
  display: flex;
  flex-flow: row wrap;
  /* background: lightpink; */
  margin: 0 auto;
  padding: 0 1.5em;
  justify-content: space-between;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row wrap;
`;

export const InputWrap = styled.div`
  max-width: 358px;
  max-height: 50px;
`;

export const ContentWrap = styled.div`
  flex-basis: 45%;

  &:nth-child(1) {
    margin-bottom: 41px;
  }
`;

export const Header = styled.h3`
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
`;

export const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
`;

export const InputLabel = styled.h4`
  font-size: 18px;
  /* font-style: normal; */
  font-weight: 400;
  line-height: 30px;
  margin-left: 0.5em;
  margin-bottom: 0.3em;
`;

export const Divider = styled.hr`
  background: linear-gradient(0deg, #303030, #303030);
  opacity: 0.2;
  width: 100%;
  /* margin: 3em auto 3em auto; */
  margin: 4em auto;
`;

export const BtnRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BtnDivider = styled.span`
  margin: 0 15px;
  background-color: transparent;
`;

export const Span = styled.span`
  /* font-size: small; */
  display: flex;
`;

export const IconUser = styled(AccountCircleIcon)`
  /* font-size: small; */
  color: #6d6d6d;
  margin-left: 0.3em;
`;

export const IconLock = styled(LockIcon)`
  /* font-size: small; */
  color: #6d6d6d;
  margin-left: 0.3em;
`;

export const IconKey = styled(VpnKeyIcon)`
  /* font-size: small; */
  color: #6d6d6d;
  margin-left: 0.3em;
`;
