
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice.js';
import userReducer from './user/userSlice.js';
import groupReducer from './group/groupSlice.js';

// import storage from 'redux-persist/lib/storage'; // for local storage
import storage from 'redux-persist/lib/storage/session' // for session storage

import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  counter: counterReducer,
  user: userReducer,
  group: groupReducer,
  // 리듀서 추가를 여기에 해주삼 ㅇㅇ
});

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
});
