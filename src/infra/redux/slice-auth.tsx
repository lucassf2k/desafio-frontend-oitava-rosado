import { createSlice } from '@reduxjs/toolkit';

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
};

const INITIAL_STATE: AuthState = {
  token: '',
  isAuthenticated: false,
  isLoading: true,
};

const sliceAuth = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    createAuth: (state) => {
      localStorage.setItem('token', 'dadada');
      (state.token = 'adadada'), (state.isAuthenticated = true);
    },
    checkAuth: (state) => {
      const token = localStorage.getItem('token');
      if (token) {
        state.isAuthenticated = true;
        state.isLoading = false;
      }
    },
  },
});

export default sliceAuth.reducer;
export const { createAuth, checkAuth } = sliceAuth.actions;
export const useAuth = (state: any) => state.auth as AuthState;
