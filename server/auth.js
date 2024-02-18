
const SECRET = process.env.SUNDAE_AUTH_SECRET;

export const AUTH_CONFIG = {
  authRequired: false,
  auth0Logout: true,
  secret: SECRET,
  baseURL: 'https://sundaee-c5c29f94e9b3.herokuapp.com',
  clientID: 'JeSdkfkOQ5zeHA0OlUZbROb8hc4BdtJg',
  issuerBaseURL: 'https://dev-wwzvhvto6t4diopr.us.auth0.com'
};
