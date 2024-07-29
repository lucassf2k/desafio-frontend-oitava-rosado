import { configureStore } from '@reduxjs/toolkit';
import sliceAuth from './slice-auth';

const store = configureStore({
  reducer: {
    auth: sliceAuth,
  },
});

export default store;
