// reducer - обычная функция, которая принимает два аргумента: state и action.
// И reducer в результате должен вернуть новый state.

const initialState = {
  books: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { books: action.payload };
    default:
      return state;
  }
};

export default reducer;
