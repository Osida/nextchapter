import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";

export const SignUpContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const SignUpForm = styled.div`
  max-width: 1000px;
  height: auto;
  background: #ffffff;
  box-shadow: 30px 30px 60px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  display: flex;
  padding: 2em;
  margin-top: 0.8em;
`;

export const Form = styled.form``;

export const SignUpLeft = styled.div`
  /* background-color: lightblue; */
  width: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 2em;
`;

export const LinkWrap = styled(LinkR)`
  /* border: 2px solid red; */
  margin-bottom: 10em;
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.purpleGem};
  /* margin-left: 50px; */
`;

export const SignUpImage = styled.img`
  /* border: 2px solid blue; */
`;

export const SignUpRight = styled.div`
  /* background-color: lightgreen; */
  width: 55%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
`;

export const Header = styled.div`
  /* border: 2px solid yellow; */
  font-size: 36px;
  font-weight: 400;
  margin-bottom: 43px;
`;

export const Row1 = styled.div`
  /* border: 2px solid black; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HalfInput = styled.div`
  width: 37%;
  /* background-color: red; */
  display: flex;

  &:nth-child(1) {
    margin-bottom: 2em;
    margin-right: 1.3em;
  }
  &:nth-child(2) {
    margin-bottom: 2em;
  }
  &:nth-child(3) {
    margin-right: 1.3em;
  }
`;

export const Span = styled.span`
  margin-left: 10px;
`;

export const Icon = styled(PersonIcon)`
  color: #6d6d6d;
  font-size: 1.2rem !important;
`;

export const FullInput = styled.div`
  width: 77%;
  /* background-color: blue; */

  &:nth-child(1) {
    margin: 2em;
  }
`;

export const Row2 = styled.div`
  width: 100%;
  /* border: 2px solid purple; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Divider = styled.div`
  margin-right: 1em;
  margin-left: 1em;
`;

export const Text = styled.div`
  font-size: 18px;
  font-weight: 400;
`;

export const TextLink = styled(LinkR)`
  font-size: 18px;
  font-weight: 500;
  color: ${(props) => props.theme.purpleGem};

  transition: all 10s ease-in-out;

  &:hover,
  &:focus,
  &:active {
    position: relative;
    top: -5px;
    border-bottom: 3px solid transparent;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 45px;
  margin-bottom: 45px;
`;
