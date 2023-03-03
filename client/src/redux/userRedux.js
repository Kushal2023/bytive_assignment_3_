import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    currentUsers: [],
    isLoading: false,
  },
  reducers: {
    setUsersStart: (state) => {
      state.isLoading = true;
    },

    setUsers: (state, action) => {
      state.currentUsers = action.payload;
    },

    setUsersFinish: (state) => {
      state.isLoading = false;
    },

    updateUsers: (state, action) => {
      state.currentUsers = state.currentUsers.map((user) => {
        if (user._id === action.payload._id) {
          return action.payload;
        } else {
          return user;
        }
      });
    },

    deleteUser: (state, action) => {
      state.currentUsers = state.currentUsers.filter(
        (user) => user._id !== action.payload
      );
    },
  },
});

export const {
  updateUsers,
  setUsersStart,
  setUsers,
  setUsersFinish,
  deleteUser,
} = userSlice.actions;
export default userSlice.reducer;
