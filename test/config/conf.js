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
    slow: 20000,
  },
  baseUrl: 'https://xn--d1aiavecq8cxb.xn--p1ai/samsung',
};
