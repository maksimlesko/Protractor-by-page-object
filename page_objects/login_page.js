require ('../page_objects/home_page.js');

var login_page = function() {
	
	this.getLoginPageTitle = function() {
		return browser.getTitle();
	};
	
	this.enterUserNameValue = function(value) {
		element(by.id('username')).sendKeys(value);
	};
	
	this.enterUserPasswordValue = function(value) {
		element(by.model('password')).sendKeys(value);
	};
	
	this.clickLogin = function() {
		element(by.className('wk-button-primary wk-button-full')).click();
		return require('./home_page.js');
	};
	
};
module.exports = new login_page();