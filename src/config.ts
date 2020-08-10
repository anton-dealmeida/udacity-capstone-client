export const apiEndpoint = process.env.API_URL || "https://8em58ubnhl.execute-api.us-west-2.amazonaws.com/dev"

export const authConfig = {
  domain: process.env.AUTH_DOMAIN || 'udagram-da-dev.eu.auth0.com',
  clientId: process.env.AUTH_CLIENT_ID || 'j79RMSJbUX67eVViz7ZwoJXACjttic6C',
  callbackUrl: process.env.AUTH_CALLBACK_URL || 'http://localhost:3000/callback'
}
