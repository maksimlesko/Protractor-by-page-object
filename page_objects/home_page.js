require ('../page_objects/results_page.js');

var home_page = function() {
	
	this.getHomePageTitle = function() {
		return browser.getTitle();
};
	this.enterSearchTerm = function(value){
		element(by.model('query')).sendKeys(value);
	};
	
	this.runMainSearch = function(){
		element(by.model('query')).sendKeys(protractor.Key.ENTER);
		return require('./results_page.js');
	};
};

module.exports = new home_page();