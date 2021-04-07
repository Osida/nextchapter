import React, { createContext, useContext, useReducer } from "react";

// initialState - what the data layer looks like in the beginning
// reducer - how we manipulate the data layer

// Create/prepare the data layer
export const StateContext = createContext();

// Wraps the app & provides the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
