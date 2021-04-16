export const initialState = {
  user: null,
  student: null,
  departments: [],
  selectDepartment: '',
  courses: [],
  books: [],
  selectedBook: {},
  onDepartmentPage: false,
  onClassesPage: false,
  onBookPage: false,
};

export const actionTypes = {
  SET_USER: 'SET_USER',
  SET_STUDENT: 'SET_STUDENT',
  SET_DEPARTMENTS: 'SET_DEPARTMENTS',
  SET_DEPARTMENT: 'SET_DEPARTMENT',
  SET_COURSES: 'SET_COURSES',
  SET_BOOKS: 'SET_BOOKS',
  SET_SELECTED_BOOK: 'SET_SELECTED_BOOK',
  SET_ON_DEPT_PAGE: 'SET_ON_DEPT_PAGE',
  SET_ON_CLASSES_PAGE: 'SET_ON_CLASSES_PAGE',
  SET_ON_BOOK_PAGE: 'SET_ON_BOOK_PAGE',
};

const reducer = (state, action) => {
  console.log('action = ', action);

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
    case actionTypes.SET_DEPARTMENTS:
      return {
        ...state,
        departments: [...action.departments],
      };
    case actionTypes.SET_DEPARTMENT:
      return {
        ...state,
        department: action.department,
      };
    case actionTypes.SET_COURSES:
      return {
        ...state,
        courses: [...action.courses],
      };
    case actionTypes.SET_BOOKS:
      return {
        ...state,
        books: [action.books],
      };
    case actionTypes.SET_SELECTED_BOOK:
      return {
        ...state,
        selectedBook: [action.selectedBook],
      };
    case actionTypes.SET_ON_DEPT_PAGE:
      return {
        ...state,
        onDepartmentPage: action.onDepartmentPage,
      };
    case actionTypes.SET_ON_CLASSES_PAGE:
      return {
        ...state,
        onClassesPage: action.onClassesPage,
      };
    case actionTypes.SET_ON_BOOK_PAGE:
      return {
        ...state,
        onBookPage: action.onBookPage,
      };

    default:
      return state;
  }
};

export default reducer;
