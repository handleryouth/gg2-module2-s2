export const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
export const REDIRECT_URL =
  process.env.REACT_APP_SPOTIFY_REDIRECT_URL ||
  "http://localhost:3000/callback/";
export const RESPONSE_TYPE = "token";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const BASE_URL = "https://api.spotify.com/v1";
export const SCOPE = "playlist-modify-private";
export const SPOTIFY_URL = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
