import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";
import CloseIcon from "@material-ui/icons/Close";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 100vw;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: o;
  left: o;
  transition: 0.3s ease-in-out;
  opacity: ${(props) => (props.isOpen ? "100%" : "0")};
  top: ${(props) => (props.isOpen ? "0" : "-100%")};
`;

export const ClosedIcon = styled(CloseIcon)`
  color: white;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  outline: none;
  cursor: pointer;
`;

export const Wrapper = styled.div`
  color: white;
`;

export const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;

export const LinkScroll = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Route = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
