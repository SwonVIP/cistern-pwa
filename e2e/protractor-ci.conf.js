const config = require('./protractor.conf').config;

config.capabilities = {
  browserName: 'chrome',
  chromeOptions: {
    args: ['--headless', '--no-sandbox', '--disable-gpu', 'start-maximized', 'disable-infobars', '--disable-extensions', '--disable-dev-shm-usage']
  }
};

exports.config = config;
