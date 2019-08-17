module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  
  "collectCoverageFrom": [
    "!/node_modules/*"
  ],
  transformIgnorePatterns: [
    "/node_modules/"
  ],
  transform: {
    "^.+\\.(js|jsx|ts)$": "babel-jest",
  },
};

