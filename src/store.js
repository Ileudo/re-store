// Код, который инициализирует Redux Store

import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunkMiddleware from 'redux-thunk';

// Аргумент первой функции это оригинальный createStore.
//Вторая функция это новое возвращаемое значение функции createStore.
const logMiddleware = (store) => (dispatch) => (action) => {
  console.log(action.type, store.getState());
  return dispatch(action);
};

const stringMiddleware = () => (dispatch) => (action) => {
  if (typeof action === 'string') {
    return dispatch({
      type: action,
    });
  }
  return dispatch(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware)
);

const delayedActionCreator = (timeout) => (dispatch) => {
  setTimeout(() => dispatch({ type: 'DELAYED_ACTION' }), timeout);
};

store.dispatch(delayedActionCreator(3000));

export default store;
