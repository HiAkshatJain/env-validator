# validate-dotenv

A TypeScript library that simplifies the management of environment variables in Node.js applications. This package provides a robust way to load and validate environment variables from `.env` files, ensuring required variables are present and correctly typed.

## Features

- Load environment variables from a `.env` file.
- Validate the presence and type of environment variables.
- Support for default values and type checking (string, number, boolean).

## Installation

```bash
npm install validate-dotenv
```

## Usage

### Importing the Library

```typescript
import { loadEnv, validateEnv } from "validate-dotenv";
```

### Loading Environment Variables

Load the environment variables from a `.env` file:

```typescript
loadEnv(".env");
```

### Defining Expected Environment Variables

Define the expected environment variables using the `EnvConfig` type:

```typescript
const envConfig = {
  PORT: { required: true, type: "number", defaultValue: "3000" },
  DB_HOST: { required: true, type: "string" },
  USE_CACHE: { required: false, type: "boolean", defaultValue: "false" },
} as const;
```

### Validating Environment Variables

Validate the loaded environment variables:

```typescript
try {
  validateEnv(envConfig);
  console.log("All environment variables are valid.");
} catch (error) {
  if (error instanceof Error) {
    console.error("Environment variable validation error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## API

### `loadEnv(filePath: string): void`

Loads environment variables from the specified `.env` file.

### `validateEnv(envConfig: EnvConfig): void`

Validates the loaded environment variables against the provided configuration.

- **Parameters:**
  - `envConfig`: An object that defines the expected environment variables, their required status, type, and default values.

## Example

Here’s a complete example that loads and validates environment variables:

```typescript
import { loadEnv, validateEnv } from "validate-dotenv";

// Load the environment variables from a .env file
loadEnv(".env");

// Define the expected environment variables
const envConfig = {
  PORT: { required: true, type: "number", defaultValue: "3000" },
  DB_HOST: { required: true, type: "string" },
  USE_CACHE: { required: false, type: "boolean", defaultValue: "false" },
} as const;

try {
  validateEnv(envConfig);
  console.log("All environment variables are valid.");
} catch (error) {
  if (error instanceof Error) {
    console.error("Environment variable validation error:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
}
```

## License

This project is licensed under the ISC License.

## Contributing

Feel free to submit issues and pull requests. Contributions are welcome!

## Author

[Akshat Jain](https://github.com/HiAkshatJain)
