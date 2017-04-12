var assert = require('assert');

browser.addCommand("getUrlAndTitle", function(customVal) {
    return {
        url: this.getUrl(),
        title: this.getTitle(),
        customVal: customVal
    };
});

describe('webdriver.io page', () => {
    before(function(){
        browser.url('http://webdriver.io');
    });

    it('should have the right title - the fancy generator way', () => {
        var title = browser.getTitle();
        assert.equal(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
    it('should go to GETSTARTED page', () => {
        var buttom = browser.elements('.getstarted');
        assert.equal(buttom.getText(), 'GET STARTED');
        assert.equal(buttom.getAttribute('href'), 'http://webdriver.io/guide.html');
    });
});

describe('github page', () => {
    it('should use my custom command', () => {
        browser.url('http://www.github.com');
        var {
            url,
            title,
            customVal,
        } = browser.getUrlAndTitle('foobar');
        assert.strictEqual(url, 'https://github.com/');
        assert.strictEqual(title, 'The world\'s leading software development platform · GitHub');
        assert.strictEqual(customVal, 'foobar');
    });
});
