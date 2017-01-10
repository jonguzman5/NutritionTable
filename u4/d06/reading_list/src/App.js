import React, { Component } from 'react';
import BookList from './book-list';
import BookDetail from './book-detail';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      currentBook: null
    };
  }
  
  render() {
    return (
      <div>
        <BookList selectBook={this.selectBook.bind(this)} />

        <BookDetail book={this.state.currentBook}/>
      </div>
    );
  }

  selectBook = (book) => {
    this.setState({
      currentBook: book
    });
  }
}
