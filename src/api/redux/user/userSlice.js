import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../../api/API"

const initialState = {
  user: null,
  status: "idle",
};

export const loginAsync = createAsyncThunk(
  // 지연 있는 메소드
  'user/login',
  async (sign, { rejectedValue }) => {
    const response = await API.loginCheck(sign.id, sign.password);
    if (response) {
      return response;
    }
    else {
      return rejectedValue();
    }
  }
);

export const refreshUserAsync = createAsyncThunk(
  'user/refresh',
  async (user_id, { rejectedValue }) => {
    const response = await API.findOneUserByUserId(user_id);
    if (response) {
      return response;
    }
    else {
      return rejectedValue();
    }
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    initStatus: (state) => {
      state.status = 'idle';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        // incrementAsync가 진행중일 때
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        // incrementAsync가 끝나면
        state.status = 'idle';
        state.user = action.payload;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        // incrementAsync가 실패라면
        state.status = 'failed';
      })
      .addCase(refreshUserAsync.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      ;
  },
});

export const { initStatus } = userSlice.actions;


export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;

export default userSlice.reducer;