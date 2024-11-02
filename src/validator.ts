import * as dotenv from "dotenv";

interface EnvConfigItem {
  required: boolean;
  type: "string" | "number" | "boolean";
  defaultValue?: string;
}

type EnvConfig = {
  [key: string]: EnvConfigItem;
};

const loadEnv = (filePath: string): void => {
  dotenv.config({ path: filePath });
};

const validateEnv = (envConfig: EnvConfig): void => {
  Object.keys(envConfig).forEach((key) => {
    const { required, type, defaultValue } = envConfig[key];
    const value = process.env[key] || defaultValue;

    // Debug line to check the resolved value
    console.log(`Validating ${key}:`, value);

    if (required && !value) {
      throw new Error(`Missing required environment variable: ${key}`);
    }

    if (value) {
      if (type === "number" && isNaN(Number(value))) {
        throw new Error(`Environment variable ${key} should be a number.`);
      } else if (type === "boolean" && !["true", "false"].includes(value)) {
        throw new Error(
          `Environment variable ${key} should be a boolean (true/false).`
        );
      }
    }
  });
};

export { loadEnv, validateEnv };
