import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const data = axios.get('http://localhost:5000/api/users').then(
    res => res.data)
  return data;
});

export const updateUser = createAction('UPDATE_USER');

export const removeUser = createAsyncThunk('users/removeUser', async (id) => {
  const data = axios.delete(`http://localhost:5000/api/users/${id}`).then(
    res => res.data)
  return data;
});