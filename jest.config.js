module.exports = {
  verbose: true,
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  moduleDirectories: ["node_modules", "src", "lib"], 
  collectCoverageFrom: [
    "!/node_modules/*"
  ],
  transform: {
    "^.+\\.(js|jsx|ts)$": "babel-jest",
  },
};

