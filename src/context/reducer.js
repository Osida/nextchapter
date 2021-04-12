export const initialState = {
  user: null,
  student: null,
};

export const actionTypes = {
  SET_USER: "SET_USER",
  SET_STUDENT: "SET_STUDENT",
};

const reducer = (state, action) => {
  console.log("action = ", action);

  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case actionTypes.SET_STUDENT:
      return {
        ...state,
        student: action.student,
      };

    default:
      return state;
  }
};

export default reducer;
