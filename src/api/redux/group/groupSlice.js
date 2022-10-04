import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as API from "../../../api/API"

const initialState = {
    group: null,
    status:"idle",
};

export const getGroupAsync = createAsyncThunk(
    // 지연 있는 메소드
    'group/getGroup',
    async (group_id) => {
      const response = await API.getGroupById(group_id);
      console.log('response', response);
      return response;
    }
  );

export const groupSlice = createSlice({
    name: 'group',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        //   incrementByAmount: (state, action) => {
        //     state.value += action.payload;
        //   },
        selectedGroup: (state, action) => {
            state.group = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(getGroupAsync.pending, (state) => {
            // incrementAsync가 진행중일 때
            state.status = 'loading';
          })
          .addCase(getGroupAsync.fulfilled, (state, action) => {
            // incrementAsync가 끝나면
            state.status = 'idle';
            console.log('action, ', action)
            state.group = action.payload;
          });
      },
});

export const { selectedGroup } = groupSlice.actions;

export const selectGroup = (state) => state.group.group;
export const selectStatus = (state) => state.group.status;

export default groupSlice.reducer;