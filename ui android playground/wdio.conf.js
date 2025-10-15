const { join } = require('path');

exports.config = {

    runner: 'local',

    specs: ['./features/**/*.feature'],
    
    capabilities: [
        {
            platformName: 'Android',
            'appium:automationName': 'UiAutomator2',
            'appium:deviceName': 'RRCW902M71T',
            'appium:platformVersion': '18',
            'appium:appPackage': 'com.saucelabs.mydemoapp.android',
            'appium:appActivity': 'com.saucelabs.mydemoapp.android.view.activities.SplashActivity',
            'appium:noReset': true,
        }
    ],

    framework: 'cucumber',

    cucumberOpts: {
        require: ['./step-definitions/**/*.js'],
        timeout: 60000,
        format: ['pretty'],
    },

    services: [
        ['appium', {
            command: 'appium',
        }]
    ],

    logLevel: 'info',
};
