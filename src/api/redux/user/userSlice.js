import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../../api/API"

const initialState = {
    user: null,
    status:"idle",
};

export const loginAsync = createAsyncThunk(
    // 지연 있는 메소드
    'user/login',
    async (sign) => {
      const response = await API.loginCheck(sign.id, sign.password);
      return response;
    }
  );

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        //   incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        //   },
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
          });
      },
});

export const selectUser = (state) => state.user.user;
export const selectStatus = (state) => state.user.status;

export default userSlice.reducer;