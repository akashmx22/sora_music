// src/services/musicApi.js

const API_BASE_URL = 'https://music-api-vf3t.onrender.com';

export const fetchAllSongs = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/songs`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching all songs:', error);
    return [];
  }
};

export const fetchSongById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/songs/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error fetching song with id ${id}:`, error);
    return null;
  }
};

export const searchSongs = async (query) => {
  try {
    const response = await fetch(`${API_BASE_URL}/songs/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error searching songs:', error);
    return [];
  }
};