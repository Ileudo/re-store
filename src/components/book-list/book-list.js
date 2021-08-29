// BookList будет немного более интересным компонентом, поскольку как только он загружается,
// он будет запрашивать данные.  Соответственно у этого компонента будет метод жизненного цикла.
// А поскольку у компонента есть метод жизненного цикла, то он должен быть компонентом-классом.

import React, { Component } from 'react';
import BookListItem from '../book-list-item';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withBookstoreService } from '../hoc';
import { fetchBooks, bookAddedToCart } from '../../actions';
import { compose } from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              onAddedToCart={() => onAddedToCart(book.id)}
              book={book}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
