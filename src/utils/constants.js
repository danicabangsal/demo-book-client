const DEFAULT_BASE_URL = '/api';

export const API_BASE_URL = import.meta.env.VITE_API_URL || DEFAULT_BASE_URL;

export const buildApiUrl = (path = '') => {
  if (!path.startsWith('/')) {
    return `${API_BASE_URL}/${path}`;
  }
  return `${API_BASE_URL}${path}`;
};
