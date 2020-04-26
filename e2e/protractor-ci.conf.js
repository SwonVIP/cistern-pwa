const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--disable-gpu', '--no-sandbox', '--window-size=800,600', '--disable-extensions', '--disable-dev-shm-usage']
  }
};

exports.config = config;
