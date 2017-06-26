//browser.ignoreSynchronization = true - to use protractor on non-angular pages, it makes protractor not wait for Angular promises.

describe('test AC application', function(){
		
	
	xit ('to login to AC app and check the page title', function(){
		browser.get('http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home');
		element(by.id('username')).sendKeys('ac2cl.all108@cch.com');
		element(by.model('password')).sendKeys('password');
		element(by.className('wk-button-primary wk-button-full')).click();
		
		let ptitle = 'CCH AnswerConnect';
		
		browser.getTitle().then(function(title){
			expect(ptitle).toEqual("CCH AnswerConnect");
		})
	})
	xit ('to execute the main search', function(){
		element(by.model('query')).sendKeys('Minsk');

		let stext = 'Minsk';

		element(by.model('query')).getText().then(function(text){
			expect(stext).toEqual('Minsk');
		})

		element(by.model('query')).sendKeys(protractor.Key.ENTER);

		let EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.className('document-action favorite-star popover-target ng-binding ng-scope'))), 5000);
		
})
	xit ('to check history elements', function(){
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/header/div/div/ul[2]/li[1]/a')).click();
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/header/div/div/ul[2]/li[1]/csn-header-history/div/rs-recent-history/div/a')).click()
		let EC = protractor.ExpectedConditions;
		browser.wait(EC.visibilityOf(element(by.className('wk-button-group-left'))), 5000);
		element(by.linkText('Minsk')).click();

		let stext = 'Minsk';

		element(by.model('query')).getText().then(function(text){
			expect(stext).toEqual('Minsk');
		})
		browser.wait(EC.visibilityOf(element(by.className('document-action favorite-star popover-target ng-binding ng-scope'))), 5000);

		});
	xit ('to return to the homepage using browser navigation button', function(){
		let EC = protractor.ExpectedConditions;
		browser.navigate().back();
		browser.wait(EC.visibilityOf(element(by.className('wk-button-group-left'))), 5000);
	})
	
	var login_page = require('../page_objects/login_page.js');
	var home_page = require('../page_objects/home_page.js');
	var results_page = require('../page_objects/results_page.js');
	var history_page = require('../page_objects/history_page.js');
	
	it ('to login to AC app by page objects', function() {
		browser.get('http://www.answerconnect.stg.cch.com/?forcestandardlogin#/home');
		var getLoginPageTitle = login_page.getLoginPageTitle();
		expect (getLoginPageTitle).toBe('CCH AnswerConnect');
		
		login_page.enterUserNameValue('ac2cl.all108@cch.com');
		login_page.enterUserPasswordValue('password');
		var home_page = login_page.clickLogin();
		var getHomePageTitle = home_page.getHomePageTitle();
		expect (getHomePageTitle).toBe('CCH AnswerConnect');
		expect (element(by.className('beta-search-box-title')).isDisplayed()).toBe(true);
	});
	it ('to execute the main search by page objects', function() {
		home_page.enterSearchTerm('Minsk');
		var results_page = home_page.runMainSearch();
		expect (element(by.className('wk-search-input')).isDisplayed()).toBe(true);
	});
	it ('to check history elements by page objects',function(){
		var history_page = results_page.waitForIcon();
		history_page.openHistoryPopup();
		history_page.clickHistoryItem();
		history_page.waitForWkButton();
		history_page.clickMyHistoryItem('Minsk');
		results_page.waitForIcon();
		//var query = results_page.getEnteredQuery();
		//expect (query).toBe('Minsk');
		
		
	});
	it ('to return to the homepage using browser navigation button by page objects', function(){
		results_page.backBrowser();
		history_page.waitForWkButton();
		results_page.clickHomeBreadcrumb();
		expect (element(by.className('wk-navbar-container')).isDisplayed()).toBe(true);
});
	});