module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coveragePathIgnorePatterns: ["node_modules", "test", "fiuba-course-admin"],
  globals: {
    "ts-jest": {
      isolatedModules: true
    }
  },
  watchPathIgnorePatterns: ["./node_modules/", "./fiuba-course-admin/**/*.ts"],
  testPathIgnorePatterns: [".d.ts", ".js"]
};
