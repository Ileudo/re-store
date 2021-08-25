// reducer - обычная функция, которая принимает два аргумента: state и action.
// И reducer в результате должен вернуть новый state.

const initialState = {
  books: [],
  loading: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'BOOKS_LOADED':
      return { books: action.payload, loading: false };
    default:
      return state;
  }
};

export default reducer;
