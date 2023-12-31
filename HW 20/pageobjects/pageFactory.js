const HomePage = require('./homePage');
const DocPage = require('./docPage');
const NavigationBar = require('./navigationBar');
const SearchPageMode = require('./searchPageMode')

class PageFactory {
    static 'Home Page' = new HomePage();
    static 'Doc Page' = new DocPage();
    static 'Navigation Bar' = new NavigationBar();
    static 'Search Page Mode' = new SearchPageMode();
}

module.exports = PageFactory;