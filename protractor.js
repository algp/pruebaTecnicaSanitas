const Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


exports.config = {
    specs: ['specs/*.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    onPrepare: function() {
        jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: 'jasmine-reports/'
        }));
    }
}