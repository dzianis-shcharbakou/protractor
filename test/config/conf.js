exports.config = {
  mework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../spec/*.spec.js'],
  multiCapabilities: [
    {
      browserName: 'chrome',
    },
  ],
  mochaOpts: {
    spec: 'test/spec/*.spec.js',
    reporter: 'mochawesome',
    slow: 4000,
  },
  baseUrl: 'http://juliemr.github.io/protractor-demo/',
};
