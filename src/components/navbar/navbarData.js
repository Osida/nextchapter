import { ROUTES } from "../../pages";
import { featureOne, featureTwo } from "../feature/home/homeData";

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
      restProps: {
        smooth: true,
        duration: 500,
        spy: true,
        exact: "true",
        offset: -80,
      },
    },
    {
      name: "Messaging",
      to: featureTwo.id,
      restProps: {
        smooth: true,
        duration: 500,
        spy: true,
        exact: "true",
        offset: -80,
      },
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
      to: featureOne.id,
      restProps: {
        smooth: true,
        duration: 500,
        spy: true,
        exact: "true",
        offset: -80,
      },
    },
    {
      name: "How we do it",
      to: featureTwo.id,
      restProps: {
        smooth: true,
        duration: 500,
        spy: true,
        exact: "true",
        offset: -80,
      },
    },
  ],
};

export const signedIn = {
  linkR: [
    {
      name: "Dashboard",
      to: "#",
    },
    {
      name: "Sell Books",
      to: "#",
    },
    {
      name: "Buy Books",
      to: "#",
    },
    {
      name: "Trade Books",
      to: "#",
    },
  ],
  linkS: [{}],
};
