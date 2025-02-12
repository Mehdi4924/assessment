import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchTags} from '../services/blogs';

const tagsSlice = createSlice({
  name: 'tags',
  initialState: {
    tags: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchTags.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
