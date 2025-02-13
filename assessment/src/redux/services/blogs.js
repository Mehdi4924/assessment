// Async thunk to fetch blogs
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

const api = axios.create({
  baseURL: 'http://192.168.18.23:3001/api',
});

export default fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async data => {
  const {search, tags, page, limit} = data;
  console.log(data)
  let url;
  if (!!tags) {
    url = `/blogs/?tags=${tags}`;
  } else if (!!search) {
    url = `/blogs/?search=${search}`;
  } else {
    url = `/blogs/?page=${page || 1}&limit=${limit || 10}`;
  }
  const response = await api.get(url);

  return response.data.blogs;
});

export const fetchTags = createAsyncThunk('blogs/fetchTags', async data => {
  const response = await api.get('/blogs/tags');
  return response.data.tags;
});
