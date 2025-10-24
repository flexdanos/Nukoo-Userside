/**
 * Environment configuration utility
 * Provides type-safe access to environment variables
 */

export const env = {
  // API Configuration
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL,
  API_TIMEOUT: Number(import.meta.env.VITE_API_TIMEOUT),

  // App Configuration
  APP_NAME: import.meta.env.VITE_APP_NAME || 'Nukoo Userside',
  APP_VERSION: import.meta.env.VITE_APP_VERSION || '1.0.0',
  APP_ENV: import.meta.env.VITE_APP_ENV || 'development',

  // Feature Flags
  ENABLE_ANALYTICS: import.meta.env.VITE_ENABLE_ANALYTICS === 'true',
  ENABLE_DEBUG: import.meta.env.VITE_ENABLE_DEBUG === 'true',

  // External Services
  GOOGLE_MAPS_API_KEY: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  CONTACT_EMAIL: import.meta.env.VITE_CONTACT_EMAIL || 'contact@nukoo.com',

  // Database
  DB_NAME: import.meta.env.VITE_DB_NAME || 'nukoo_userside',

  // Utility methods
  isDevelopment: () => env.APP_ENV === 'development',
  isProduction: () => env.APP_ENV === 'production',
  isDebugMode: () => env.ENABLE_DEBUG,
} as const;

export default env;
