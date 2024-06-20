
import type {Config} from 'jest';

const config: Config = {
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": "babel-jest"
  },
  testEnvironment: "jsdom",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  
};

export default config;
