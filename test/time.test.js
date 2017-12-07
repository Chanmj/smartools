const smartools = require('../index')

test('remain time one day one hour one min one second', () => {
    let time = new Date().getTime(),
    oneSecond = 1000,
    oneMinute = oneSecond * 60,
    oneHour = oneMinute * 60,
    oneDay = oneHour * 24;
    time = time + oneSecond + oneMinute + oneHour + oneDay
    expect(smartools.formatRemainTime(time)).toBe('1天 1小时 1分钟 1秒')
})
