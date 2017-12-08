const smartools = require('../index')

test('should parse query string', () => {
  expect(smartools.parseQueryString('https://www.google.com/search?q=helloworld&oq=helloworld&aqs=chrome..69i57j69i60j0l4.2976j0j1&sourceid=chrome&ie=UTF-8'))
    .toEqual({"aqs": "chrome..69i57j69i60j0l4.2976j0j1", "ie": "UTF-8", "oq": "helloworld", "q": "helloworld", "sourceid": "chrome"})
})

test('should string query string', () => {
  expect(smartools.stringfyQueryString({"aqs": "chrome..69i57j69i60j0l4.2976j0j1", "ie": "UTF-8", "oq": "helloworld", "q": "helloworld", "sourceid": "chrome"}))
    .toBe('aqs=chrome..69i57j69i60j0l4.2976j0j1&ie=UTF-8&oq=helloworld&q=helloworld&sourceid=chrome')
})
