const smartools = require('../index')

test('should randomNum in [3, 9]', () => {
    expect(smartools.randomNum(3, 9)).toBeGreaterThanOrEqual(3) 
    expect(smartools.randomNum(3, 9)).toBeLessThanOrEqual(9) 
})
