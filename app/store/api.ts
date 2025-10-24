import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { env } from '../config/env';

// Define types for company config
export interface CompanyConfig {
  _id: string;
  stats: {
    propertiesSold: number;
    activeListings: number;
    clientSatisfaction: number;
    yearsOfExperience: number;
  };
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

// Create the API slice with RTK Query
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ 
    baseUrl: env.API_BASE_URL,
    timeout: env.API_TIMEOUT,
    prepareHeaders: (headers) => {
      // Add any required headers here
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  tagTypes: ['CompanyConfig'], // Add your tag types here for cache invalidation
  endpoints: (builder) => ({
    // Company config endpoint
    getCompanyConfig: builder.query<CompanyConfig, void>({
      query: () => '/company/config',
      providesTags: ['CompanyConfig'],
    }),
   
  }),
});

// Export hooks for usage in components
export const { 
  useGetCompanyConfigQuery
} = api;
