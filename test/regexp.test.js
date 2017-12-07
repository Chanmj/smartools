const smartools = require('../index')

test('"123@qq.com" is email', () => {
    expect(smartools.isEmail('123@qq.com')).toBeTruthy()
})

test('"123qq.com" is not email', () => {
    expect(smartools.isEmail('123qq.com')).toBeFalsy()
})

test('"123232323" is not a idCard', () => {
    expect(smartools.isIdCard('123232323')).toBeFalsy()
})

test('"232302199610241024" is a idCard', () => {
    expect(smartools.isIdCard('232302199610241024')).toBeTruthy()
})

test('"1111111111" is not a phone number', () => {
    expect(smartools.isPhoneNum('1111111111')).toBeFalsy()
})

test('"13112341234" is a phone number', () => {
    expect(smartools.isPhoneNum('13112341234')).toBeTruthy()
})

test('"t.tt" is not a url', () => {
    expect(smartools.isUrl('t.tt')).toBeFalsy()
})


test('"http://www.t.tt" is a url', () => {
    expect(smartools.isUrl('http://www.t.tt')).toBeTruthy()
})

test('"12345" is not a password', () => {
    expect(smartools.isPassword('12345')).toBeFalsy()
})

test('"a12345678a" is a password', () => {
    expect(smartools.isPassword('a12345678a')).toBeTruthy()
})

test('"a12345" is not a strong password', () => {
    expect(smartools.isPassword('12345')).toBeFalsy()
})

test('"Aa12345678a" is a strong password', () => {
    expect(smartools.isPassword('a12345678a')).toBeTruthy()
})