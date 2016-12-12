/**
 * 一些常用的小函数
 */

/**
 * @brief 对象深拷贝
 * @param source 源对象
 * @returns {{}} 新对象
 */
var deepCopy = function(source) {
    var result = {};
    for (var key in source) {
        result[key] = typeof source[key] === 'object' ? deepCopy(source[key]) : source[key];
    }
    return result;
};

/**
 * @brief 输出"YYYY-MM-DD hh:mm:ss"格式的日期
 * @param date 日期对象，若不传该参数则
 * @returns {string}
 */
//TODO:支持传入格式字符串
var formatDate = function(date) {
    var D=['00','01','02','03','04','05','06','07','08','09'];
    with (date || new Date) return [
        [getFullYear(), D[getMonth()+1]||getMonth()+1, D[getDate()]||getDate()].join('-'),
        [D[getHours()]||getHours(), D[getMinutes()]||getMinutes(), D[getSeconds()]||getSeconds()].join(':')
    ].join(' ');
};

/**
 * @brief 判断一个字符串是否为ip
 * @param str
 * @returns {boolean}
 */
self.isIp = function (str) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
    return reg.test(str);
};


