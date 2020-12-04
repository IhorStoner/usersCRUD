import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from 'axios'
import config from '../../config/deafult.json'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  
  const data = axios.get(`${config.serverUrl}/api/users`).then(
    res => res.data)
  return data;
});

export const updateUser = createAction('UPDATE_USER');

export const removeUser = createAsyncThunk('users/removeUser', async (id) => {
  const data = axios.delete(`${config.serverUrl}/api/users/${id}`).then(
    res => res.data)
  return data;
});