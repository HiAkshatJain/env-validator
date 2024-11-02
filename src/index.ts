import { loadEnv, validateEnv } from "./validator";

// Load the environment variables from a .env file
loadEnv(".env");

// Define the expected environment variables with exact string literal types
const envConfig = {
  PORT: { required: true, type: "number", defaultValue: "3000" },
  DB_HOST: { required: true, type: "string" },
  USE_CACHE: { required: false, type: "boolean", defaultValue: "false" },
} as const;

try {
  validateEnv(envConfig);
  console.log("All environment variables are valid.");
} catch (error) {
  // Use a type assertion to ensure error is an instance of Errornpm run start
  if (error instanceof Error) {
    console.error("Environment variable validation error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
