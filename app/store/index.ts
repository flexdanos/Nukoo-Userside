import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
  reducer: {
    // Add the RTK Query API reducer
    [api.reducerPath]: api.reducer,
    // Add other reducers here
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
