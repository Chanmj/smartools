const smartools = require('../index')

test('[1, 2] not equal [2, 1]', () => {
  expect(smartools.arrayEqual([1, 2], [2, 1])).toBeFalsy()
})

test('[1, 2] equal [1, 2]',() => {
    expect(smartools.arrayEqual([1, 2], [1, 2])).toBeTruthy()
})

test('same array should return true', () => {
    let arr = [1, 0, 2, 4]
    expect(smartools.arrayEqual(arr, arr)).toBeTruthy()
})
