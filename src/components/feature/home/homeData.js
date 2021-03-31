// import {btnLinkColor as blc} from "../../index"

const blc = {
  primary: {
    color: "#D83F87",
    bg: "white",
  },
  secondary: {
    color: "#44318D",
    bg: "white",
  },
  tertiary: {
    color: "#303030",
    bg: "white",
  },
  white: {
    color: "#fff",
    bg: "white",
  },
};

const colors = {
  white: "white",
  black: "black",
  gunpowderGray: "#303030",
  purpleGem: "#44318D",
  christmasPink: "#D83F87",
};

export const featureOne = {
  id: "access",
  row: true,
  bgColor: colors.white,
  topLineColor: colors.christmasPink,
  headLineColor: colors.black,
  textColor: colors.black,
  btnLinkColor: { ...blc?.primary },
  contentWidth: "50%",
  topLineText: "Anytime, Anywhere Access",
  headLineText: "Access the extensive nextchapter book network from any device",
  description:
    "Sign up today to gain access to a network of hundreds of textbooks from your University.",
  btnLinkText: "Get Started",
  imageWrapWidth: "50%",
  image: "/images/undraw_Devices.svg",
  alt: "Multiple Devices",
};

export const featureTwo = {
  id: "messaging",
  row: false,
  bgColor: colors.purpleGem,
  topLineColor: colors.white,
  headLineColor: colors.white,
  textColor: colors.white,
  btnLinkColor: { ...blc?.white },
  contentWidth: "65%",
  topLineText: "Direct Messaging",
  headLineText: "Access the extensive nextchapter book network from any device",
  description:
    "Sign up today to gain access to a network of hundreds of textbooks from your University.",
  btnLinkText: "Get Started",
  imageWrapWidth: "40%",
  image: "/images/undraw_Chatting.svg",
  alt: "Chatting",
};
