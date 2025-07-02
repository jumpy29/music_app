const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = "7d4cba4d644a4d1e9b02d7dd389ec0bc";
const redirectUri = "http://127.0.0.1:3000";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`;
