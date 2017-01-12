import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
  }

  renderPosts(){
    return(
      <h1> I am the PostsIndex Component</h1>
    )
  }

  render() {
    console.log(this.props)
    return (
      <div>
        {this.renderPosts()}

        <div class="fixed-action-btn">
          <Link to="/posts/new" className="btn-floating btn-large waves-effect waves-light red">
            <i class="material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}


