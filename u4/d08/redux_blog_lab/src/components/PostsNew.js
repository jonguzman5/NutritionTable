import React, { Component } from 'react';
import { createPost } from '../actions/index';

class PostsNew extends Component {
  constructor(){
    super();
    this.state = {
      title: '',
      content: '',
      categories: ''
    }
  }

  updateTitle(value){
    this.setState({
      title: value
    });
  }

  updateContent(value){
    this.setState({
      content: value
    });
  }

  updateCategories(value){
    this.setState({
      categories: value
    });
  }

  submitPost(props) {
    const { title, content, categories } = this.state;
    createPost(title, content, categories);
  }

  render() {
    return (
      <div>
        <h3> Create a new Post </h3>
          <label>Title</label>
          <input onChange={(e) => this.updateTitle(e.target.value)} />
          <br/>

          <label>Categories</label>
          <input onChange={(e) => this.updateCategories(e.target.value)} />
          <br/>

          <label>Content</label>
          <textarea defaultValue={this.state.content} onChange={(e) => this.updateContent(e.target.value)}>
          </textarea>
          <br/>

          <button onClick={() => this.submitPost()}> Submit </button>
      </div>
    );
  }
}

export default PostsNew;
