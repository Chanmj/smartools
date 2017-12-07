/**
 * 判读密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
 * 
 * @param   {String} str 
 * @returns {Boolean}
 */
function isPassword(str) {
    return /^[a-zA-Z]\w{5,17}$/.test(str)
}

module.exports = isPassword