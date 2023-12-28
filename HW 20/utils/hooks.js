const { Before, After, BeforeAll, AfterAll} = require('@wdio/cucumber-framework')

Before(() => {
    console.log('Hello')
})

Before('@smoke', () => {
    console.log('By By')
})