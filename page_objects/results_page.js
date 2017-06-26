require ('../page_objects/history_page.js');

var results_page = function() {
	
	this.waitForIcon = function() {
		browser.wait(protractor.ExpectedConditions.visibilityOf(element(by.className('document-action favorite-star popover-target ng-binding ng-scope'))), 15000);
		return require ('./history_page.js');
	};
	
	this.getEnteredQuery = function() {
		return element(by.model('query')).getText();
	};
	
	this.backBrowser = function() {
		browser.navigate().back();
	};
	
	this.clickHomeBreadcrumb = function() {
		
		element(by.xpath('//*[@id="body"]/ui-view/div[2]/ng-transclude/div/csn-header/csn-sub-header/div/div[1]/div/nav/ol/li/a/span')).click();
		return require ('./home_page.js');	
	};
	
};

module.exports = new results_page();