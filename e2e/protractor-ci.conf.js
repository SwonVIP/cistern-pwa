const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--no-sandbox', '--headless', '--disable-dev-shm-usage']
  }
};

exports.config = config;
