import {configureStore} from '@reduxjs/toolkit';
import blogReducer from '../features/blogSlice';
import tagReducer from '../features/tagSlice';
export const store = configureStore({
  reducer: {
    blogs: blogReducer,
    tags: tagReducer,
  },
});
