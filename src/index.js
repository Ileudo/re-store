import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/app';
import ErrorBoundary from './components/error-boundary';
import BookstoreService from './services/bookstore-service';
import { BookstoreServiceProvider } from './components/bookstore-service-context';

import store from './store';

const bookstoreService = new BookstoreService();

// Каждый компонент в структуре приложения отвечает за свой маленький аспект. И все эти аспекты
// становятся доступны элементам ниже по иерархии. Иными словами, все компоненты нашего приложения
// будут иметь доступ к роутингу, иметь доступ к нашему bookstoreService. Если в них будут
// происходить ошибки, эти ошибки будут отлавливаться ErrorBoundary. И в конце концов все компоненты
// ниже по иерархии будут иметь доступ к нашему Redux Store, и мы сможем делать компоненты, которые
// зависят от данных в Store, и которые могут диспатчить туда новые Actions.

ReactDOM.render(
  <BookstoreServiceProvider store={store}>
    <ErrorBoundary>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundary>
  </BookstoreServiceProvider>,
  document.getElementById('root')
);
