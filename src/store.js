// Код, который инициализирует Redux Store

import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer);

export default store;
