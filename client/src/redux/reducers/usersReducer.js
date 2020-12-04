import { createReducer } from "@reduxjs/toolkit";
import { fetchUsers,updateUser,removeUser } from '../actions/usersAction';

const initialState = {
  loading: false,
  data: [],
  error: null
};

const studentsReducer = createReducer(initialState, {
  [fetchUsers.pending]: (state) => {
    state.loading = true;
    state.error = null
  },
  [fetchUsers.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchUsers.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.payload.error;
  },
  [updateUser.type]: (state, action) => {
   
  },
  [removeUser.fulfilled]: (state, action) => {
    const selectedStudent = state.data.findIndex(student => student._id === action.payload._id)
    state.data.splice(selectedStudent, 1);
  }
});


export default studentsReducer;