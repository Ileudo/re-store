// reducer - обычная функция, которая принимает два аргумента: state и action.
// И reducer в результате должен вернуть новый state.
import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
