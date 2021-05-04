import ROUTES from "../../pages";
import { featureOne, featureTwo } from "../feature/home/homeData";

const restProps = {
  smooth: true,
  duration: 500,
  spy: true,
  exact: "true",
  offset: -80,
};

export const home_signedOut = {
  linkR: [
    {
      name: "About",
      to: ROUTES.ABOUT,
    },
  ],
  linkS: [
    {
      name: "Access",
      to: featureOne.id,
      restProps,
    },
    {
      name: "Messaging",
      to: featureTwo.id,
      restProps,
    },
  ],
};

export const about_signedOut = {
  linkR: [
    {
      name: "Home",
      to: ROUTES.HOME,
    },
  ],
  linkS: [
    {
      name: "What we do",
      to: "what_we_do",
      restProps,
    },
    {
      name: "How we do it",
      to: "how_we_do_it",
      restProps,
    },
  ],
};

export const signedIn = {
  linkR: [
    {
      name: "About",
      to: ROUTES.ABOUT,
    },
    {
      name: "Profile",
      to: ROUTES.PROFILE,
    },
    {
      name: "Sell Books",
      to: ROUTES.SELL,
    },
    {
      name: "Buy Books",
      to: ROUTES.BUY,
    },
  ],
  linkS: [{}],
};
