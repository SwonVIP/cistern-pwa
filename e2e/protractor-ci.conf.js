const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu']
  },
  directConnect: false,
  useAllAngular2AppRoots: true
};

exports.config = config;
