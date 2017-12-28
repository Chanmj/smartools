const arrayEqual = require('./src/array/arrayEqual')
const getExplore = require('./src/device/getExplore')
const getOS = require('./src/device/getOS')
const randomNum = require('./src/random/randomNum')
const isEmail = require('./src/regexp/isEmail')
const isIdCard = require('./src/regexp/isIdCard')
const isPhoneNum = require('./src/regexp/isPhoneNum')
const isUrl = require('./src/regexp/isUrl')
const isPassword = require('./src/regexp/isPassword')
const isStrongPassword = require('./src/regexp/isStrongPassword')
const formatRemainTime = require('./src/time/formatRemainTime')
const throttle = require('./src/function/throttle')
const debounce = require('./src/function/debounce')
const deepClone = require('./src/object/deepClone')
const isEmptyObject = require('./src/object/isEmptyObject')
const getScrollTop = require('./src/dom/getScrollTop')
const offset = require('./src/dom/offset')
const scrollTo = require('./src/dom/scrollTo')
const setScrollTop = require('./src/dom/setScrollTop')
const parseQueryString = require('./src/url/parseQueryString')
const stringfyQueryString = require('./src/url/stringfyQueryString')
const digitUppercase = require('./src/string/digitUppercase')
const trimSpace = require('./src/string/trimSpace')

module.exports = {
    arrayEqual,
    getExplore,
    getOS,
    randomNum,
    isEmail,
    isIdCard,
    isPhoneNum,
    isUrl,
    isPassword,
    isStrongPassword,
    formatRemainTime,
    throttle,
    debounce,
    deepClone,
    isEmptyObject,
    getScrollTop,
    offset,
    scrollTo,
    setScrollTop,
    parseQueryString,
    stringfyQueryString,
    digitUppercase,
    trimSpace
}