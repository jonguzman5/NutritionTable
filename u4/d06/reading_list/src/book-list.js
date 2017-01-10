import React, { Component } from 'react';

export default class BookList extends Component {
  componentWillMount = () => {
    this.setState({
      books: [
        {
          title: "McElligot's Pool",
          pages: 64
        },
        {
          title: "I Wish That I Had Duck Feet",
          pages: 64
        },
        {
          title: "The Sneetches",
          pages: 72
        },
        {
          title: "Yertle the Turtle",
          pages: 96
        }
      ]
    }) // ends this.setState
  }

  renderList() {
    return this.state.books.map((book) => {
      return (
        <li
          key={book.title} className="list-group-item"
          onClick={ () => this.props.selectBook(book) }
        >
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}
