const smartools = require('../index')

test('should smartools.throttle(200, true, function(){return true}) return true', () => {
  expect(function(){
    let num = 0
    let interval = null
    let throttled = smartools.throttle(200, function () {
        num++
        return true
    })

    interval = setInterval(function () {
        throttled()
    }, 20)

    setTimeout(function () {
        assert(num === Math.floor(805 / 200))
        done()
        clearInterval(interval)
    }, 805)

  }).toBeTruthy()
})

test('should {} is a empty obj', () => {
    expect(smartools.isEmptyObject({})).toBeTruthy()
})

test('should {first: 1} is not a empty obj', () => {
    expect(smartools.isEmptyObject({first: 1})).toBeFalsy()
})
