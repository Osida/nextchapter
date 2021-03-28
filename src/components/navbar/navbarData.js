import { ROUTES } from "../../pages";
import { featureOne, featureTwo } from "../feature/homeData";

export const about_signedOut = {
  linkRouter: {
    home: "Home",
  },
  linkScroll: {
    what_we_do: "What we do",
    how_we_do_it: "How we do it",
  },
};

export const signedIn = {
  linkRouter: {
    dashboard: "Dashboard",
    sell_books: "Sell Books",
    buy_books: "Buy Books",
    trade_books: "Trade Books",
  },
  linkScroll: {},
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
