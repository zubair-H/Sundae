const env = process.env.NODE_ENV || 'development';

export let ENDPOINT = "";
if (env === "development") {
  console.log("Development environment");
  ENDPOINT = "http://localhost:3000";
}
else {
  console.log("Production environment");
  ENDPOINT = "https://sundaee-c5c29f94e9b3.herokuapp.com";
}
