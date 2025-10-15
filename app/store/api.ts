import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define your base URL - update this to your actual API endpoint
const BASE_URL = 'https://jsonplaceholder.typicode.com';

// Define types for our test data
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

// Create the API slice with RTK Query
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['User'], // Add your tag types here for cache invalidation
  endpoints: (builder) => ({
    // Test endpoint using JSONPlaceholder API
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getUserById: builder.query<User, number>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
  }),
});

// Export hooks for usage in components
export const { useGetUsersQuery, useGetUserByIdQuery } = api;
