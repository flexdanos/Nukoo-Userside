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

// Define types for properties
export interface PropertyImage {
  url: string;
  alt: string;
  _id: string;
}

export interface PropertyFeature {
  [key: string]: any;
}

export interface Property {
  _id: string;
  title: string;
  type: string;
  location: {
    city: string;
    area: string;
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  sizeUnit: string;
  images: PropertyImage[];
  thumbnail: string;
  category: string;
  features: PropertyFeature[];
  description: string;
  yearBuilt: number;
  status: 'available' | 'sold' | 'pending' | 'off-market';
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

// The API returns a direct array of properties, not wrapped in an object
export type PropertiesResponse = Property[];

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
  tagTypes: ['CompanyConfig', 'Properties'], // Add your tag types here for cache invalidation
  endpoints: (builder) => ({
    // Company config endpoint
    getCompanyConfig: builder.query<CompanyConfig, void>({
      query: () => '/company/config',
      providesTags: ['CompanyConfig'],
    }),
    
    // Company properties endpoint
    getCompanyProperties: builder.query<PropertiesResponse, { sortBy?: string; sortOrder?: 'asc' | 'desc'; status?: string; type?: string }>({
      query: (params = {}) => {
        const searchParams = new URLSearchParams();
        
        if (params.sortBy) searchParams.append('sortBy', params.sortBy);
        if (params.sortOrder) searchParams.append('sortOrder', params.sortOrder);
        if (params.status) searchParams.append('status', params.status);
        if (params.type) searchParams.append('type', params.type);
        
        const queryString = searchParams.toString();
        return `/company/properties${queryString ? `?${queryString}` : ''}`;
      },
      providesTags: ['Properties'],
    }),
   
  }),
});

// Export hooks for usage in components
export const { 
  useGetCompanyConfigQuery,
  useGetCompanyPropertiesQuery
} = api;
