
const clientId = process.env.REACT_APP_CLIENT_ID!;

export const authURL = `https://dauth.b1nd.com/login?client_id=${clientId}&redirect_uri=http://localhost:3000/callback`;

