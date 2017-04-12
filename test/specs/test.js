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
        browser.getTitle().should.be.equal('WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
        //assert.strictEqual(title, 'WebdriverIO - Selenium 2.0 javascript bindings for nodejs');
    });
    it('should go to GETSTARTED page', () => {
        var buttom = browser.elements('.getstarted');
        buttom.getText().should.be.equal('GET STARTED');
        buttom.getAttribute('href').should.be.equal('http://webdriver.io/guide.html');
    });
});

describe('github page', () => {
    it('should use my custom command', () => {
        browser.url('http://www.github.com');
        browser.getUrlAndTitle('foobar').should.be.deep.equal({
            url: 'https://github.com/',
            title: 'The world\'s leading software development platform · GitHub',
            customVal: 'foobar'
        });
    });
});
