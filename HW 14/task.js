// Определить локаторы xpath и css для следующих элементов:
// сайт https://www.bbc.co.uk/ 
// Картинка с визуализацией элементов прикреплена к письму.

// 1 - элемент с картинкой
Xpath - //* [contains (@class, 'media--hero')]
css - .media--hero

// 2 - топ нав меню
// - найти только первый видимый элемент 
Xpath - //* [contains (@class, "orbit-header-links")]//*[1]/*[@data-v-item]
css - .orbit-header-links li:first-child a[data-v-item]

// - последний видимый элемент
Xpath - (//* [contains (@class, "orbit-header-links")]//*[@data-v-item])[last()]

// - найти все видимые элементы
Xpath - //* [contains (@class, "orbit-header-links")]//*[@data-v-item]
css - .orbit-header-links a[data-v-item]

// - все невидимые элементы
Xpath - //* [contains (@class, "orbit-header-links international")]//a[not(@data-v-item)]
css - .orbit-header-links.international a:not([data-v-item])

// - найти нечетные элементы
Xpath - //* [contains(@class, "orbit-header-links international")]//*[position() mod 2 = 0]
css - .orbit-header-links.international li:nth-child(odd)

// 3 - дата
Xpath - //*[contains (@class, 'module--header')]/h2/text()

// 4 - кликабельный элемент поиска
Xpath - //*[@id='orbit-search-button']
css - .orbit-search__button

// 5 - лого
Xpath - //*[@id='homepage-link']/*[1]
css - #homepage-link svg 

// 6 - новости блоком
Xpath - //*[contains(@class, "module--promo")]//*[contains(@class, "media-list__item") and position() > 1]
css - .module--promo li.media-list__item:not(:first-child)