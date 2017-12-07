/**
 * 判断强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
 * 
 * @param   {String} str 
 * @returns {Boolean}
 */
function isStrongPassword(str) {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/.test(str)
}

module.exports = isStrongPassword