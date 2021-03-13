import styled, { ThemeProvider } from "styled-components/macro";

export const styleTheme = {
  gunpowderGray: "#303030",
  purpleGem: "#44318D",
  christmasPink: "#D83F87",
  btn_fontSize: "14px",
};

export const Container = styled.div`
  max-width: 1100px;
  overflow: auto;
  margin: 0 auto;
  padding: 0 1em;
`;

export { ThemeProvider };
