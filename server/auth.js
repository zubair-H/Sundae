import { ENDPOINT } from "sundae-share";

const SECRET = process.env.SUNDAE_AUTH_SECRET;

export const AUTH_CONFIG = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: ENDPOINT,
  clientID: 'JeSdkfkOQ5zeHA0OlUZbROb8hc4BdtJg',
  issuerBaseURL: 'https://dev-wwzvhvto6t4diopr.us.auth0.com'
};
