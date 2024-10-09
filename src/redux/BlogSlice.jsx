import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchPosts = createAsyncThunk('blog/fetchPosts', async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

export const createPost = createAsyncThunk('blog/createPost', async (newPost) => {
  const response = await axios.post(API_URL, newPost);
  return response.data;
});

export const updatePost = createAsyncThunk('blog/updatePost', async ({ id, post }) => {
  const response = await axios.put(`${API_URL}/${id}`, post);
  return response.data;
});

export const deletePost = createAsyncThunk('blog/deletePost', async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload;
        })
        .addCase(updatePost.fulfilled, (state, action) => {
            const index = state.posts.findIndex(post => post.id === action.payload.id);
            if (index !== -1) {
                state.posts[index] = action.payload;  
            }
        })
        .addCase(deletePost.fulfilled, (state, action) => {
            state.posts = state.posts.filter((post) => post.id !== action.payload);
        });
}

});

export default blogSlice.reducer;