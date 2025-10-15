# Redux Toolkit Setup

This project uses Redux Toolkit with RTK Query for state management and API calls.

## Structure

```
app/store/
├── index.ts      # Store configuration
├── api.ts        # RTK Query API slice
└── hooks.ts      # Typed Redux hooks
```

## Usage

### 1. Define API Endpoints

Edit `app/store/api.ts` to add your endpoints:

```typescript
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ['User', 'Post'], // Add tag types for cache invalidation
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => '/users',
      providesTags: ['User'],
    }),
    getUserById: builder.query<User, string>({
      query: (id) => `/users/${id}`,
      providesTags: (result, error, id) => [{ type: 'User', id }],
    }),
    createUser: builder.mutation<User, Partial<User>>({
      query: (body) => ({
        url: '/users',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['User'],
    }),
  }),
});

export const { useGetUsersQuery, useGetUserByIdQuery, useCreateUserMutation } = api;
```

### 2. Use in Components

```typescript
import { useGetUsersQuery } from '~/store/api';

function UserList() {
  const { data, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {data?.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

### 3. Use Mutations

```typescript
import { useCreateUserMutation } from '~/store/api';

function CreateUser() {
  const [createUser, { isLoading }] = useCreateUserMutation();

  const handleSubmit = async (userData) => {
    try {
      await createUser(userData).unwrap();
      // Handle success
    } catch (error) {
      // Handle error
    }
  };

  return <form onSubmit={handleSubmit}>...</form>;
}
```

### 4. Add Regular Slices (if needed)

If you need local state management beyond API calls:

```typescript
// app/store/slices/authSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
```

Then add it to the store:

```typescript
// app/store/index.ts
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authReducer, // Add your slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
```

## Environment Variables

Set your API base URL in `.env`:

```
API_BASE_URL=https://your-api.com/api
```
