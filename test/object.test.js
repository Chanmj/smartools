const smartools = require('../index')

test('should person deepclone return true', () => {
  expect(function(){
    let person = {
        name: "user",
        setting: {
            first: "1",
            second: [1, 2, 3]
        }
    }

    return person === smartools.deepClone(person)
  }).toBeTruthy()
})
