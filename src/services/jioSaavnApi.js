// src/services/jioSaavnApi.js

const BASE_URL = 'https://saavn.dev/api';

export class JioSaavnService {
  static async fetchSongs(type, id = '') {
    try {
      let url;
      switch (type) {
        case 'trending':
          url = `${BASE_URL}/trending`;
          break;
        case 'playlist':
          url = `${BASE_URL}/playlists?id=${id}`;
          break;
        case 'album':
          url = `${BASE_URL}/albums?id=${id}`;
          break;
        default:
          throw new Error('Invalid type');
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === 'SUCCESS') {
        let songs;
        if (type === 'trending') {
          songs = data.data.albums || data.data.trending?.songs || [];
        } else {
          songs = data.data.songs || [];
        }
        return songs.map(this.formatSong);
      } else {
        console.error('API returned an error:', data.message);
        return [];
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
      return [];
    }
  }

  static async searchSongs(query) {
    try {
      const response = await fetch(`${BASE_URL}/search/songs?query=${encodeURIComponent(query)}`);
      const data = await response.json();
      if (data.status === 'SUCCESS') {
        return data.data.results.map(this.formatSong);
      } else {
        console.error('API returned an error:', data.message);
        return [];
      }
    } catch (error) {
      console.error('Error searching songs:', error);
      return [];
    }
  }

  static formatSong(song) {
    return {
      id: song.id,
      title: song.name,
      artist: song.primaryArtists,
      artwork: song.image[2].link,
      url: song.downloadUrl[4].link,
      album: song.album?.name || '',
      duration: song.duration,
    };
  }
}