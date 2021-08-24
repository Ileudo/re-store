import React from 'react';
import { BookstoreServiceConsumer } from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  // В компоненте высшего порядка мы создаем новый компонент.
  // И сюда сейчас напишем код этого  компонента.

  // Напомню, чтобы принять данные в консьюмере нам надо передать в него render-функцию.
  // Это функция, которая примет в качестве своего значения, тот сервис, который мы передадим
  // через контекст.

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {(bookstoreService) => {
          return <Wrapped {...props} bookstoreService={bookstoreService} />;
        }}
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
