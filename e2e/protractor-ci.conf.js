const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--disable-dev-shm-usage', '--headless', '--disable-gpu', '--no-sandbox', '--disable-extensions']
  }
};

exports.config = config;
