import Axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";

const ROOT_URL = 'https://reduxblog.herokuapp.com/api';
const API_KEY = `?key=YOU_PUT_YOUR_OWN_API_KEY_HERE`;

export function fetchPosts(){
    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

