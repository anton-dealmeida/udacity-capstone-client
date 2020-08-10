export const apiEndpoint = process.env.API_URL || "..."

export const authConfig = {
  domain: process.env.AUTH_DOMAIN || '...',
  clientId: process.env.AUTH_CLIENT_ID || '...',
  callbackUrl: process.env.AUTH_CALLBACK_URL || 'http://localhost:3000/callback'
}
