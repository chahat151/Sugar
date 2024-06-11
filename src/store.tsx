import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/UserSlice';
// import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: true }).concat(logger),

  devTools: process.env.NODE_ENV !== 'production', // Enable DevTools only in development
  // enhancers: [composeWithDevTools(/* Other enhancers if any */)],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
