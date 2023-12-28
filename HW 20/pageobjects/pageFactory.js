const HomePage = require('./homePage');
const DocPage = require('./docPage');

class PageFactory {
    static 'Home Page' = new HomePage();
    static 'Doc Page' = new DocPage();
}

module.exports = PageFactory;