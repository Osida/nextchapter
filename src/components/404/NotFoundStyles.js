import styled from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const NotFoundContainer = styled.div`
    color: #d9dbe1;
    background-color: ${(props) => props.theme.gunpowderGray};
    margin: 0 auto;
`;
export const NotFound = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
`;