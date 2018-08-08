import React, { Component } from 'react';
// importing * as BooksAPI from './BooksAPI'
import * as BooksAPI from './BooksAPI';
import './App.css'

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
	 books: [],
	 loading: false
  }
  componentDidMount() {
    this.setState({ loading: true});

    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books, loading: false })
      })
  }

  changeCategory = (id, category) => {
    BooksAPI.get(id).then(data => {
      let updatedBook = data;
      updatedBook.shelf = category;

      this.setState((state) => ({
        books: state.books.filter(book => book.id !== id).concat([ updatedBook ])
      }))
    });

    BooksAPI.update({ id }, category);
  }
  render() {
	const { books, loading } = this.state;
		if (loading) return <WaitingScreen text=' Please wait, while page is loading ...'/>;
    return (
	<div className='app'>
        <Route exact path='/' render={() => (
          <ListBooks
            books={books}
            onChangeCategory={this.changeCategory}
          />
        )}/>
        <Route path='/search' render={() => (
          <SearchBooks
            books={books}
            onChangeCategory={this.changeCategory}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp;