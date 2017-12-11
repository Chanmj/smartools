/**
 * 生成指定范围随机数
 *  
 * @param  {Number} min 
 * @param  {Number} max 
 * @return {Number} 
 */
function randomNum(min, max) {
    return Math.floor(Math.random() * (max-min+1) )+ min;
}

module.exports = randomNum