// BookList будет немного более интересным компонентом, поскольку как только он загружается,
// он будет запрашивать данные.  Соответственно у этого компонента будет метод жизненного цикла.
// А поскольку у компонента есть метод жизненного цикла, то он должен быть компонентом-классом.

import React, { Component } from 'react';
import { BookListItem } from '../book-list-item';
import './book-list.css';

class BookList extends Component {
  render() {
    const books = [
      {
        id: 1,
        title: 'Production-Ready Microservices',
        author: 'Susan J. Fowler',
      },
      { id: 2, title: 'Release It!', author: 'Michael T. Nygard' },
    ];
    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export { BookList };
