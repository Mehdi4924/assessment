// Async thunk to fetch blogs
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'http://192.168.18.23:3001/api',
});

export default fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async data => {
  const {tags, page, limit} = data;
  let url;
  if (!tags) {
    url = `/blogs/?page=${page || 1}&limit=${limit || 10}`;
  } else {
    url = `/blogs/?tags=${tags}`;
  }
  const response = await api.get(url);

  return response.data.blogs;
});
