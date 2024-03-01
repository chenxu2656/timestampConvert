/**
 * @description 判断输入是否为有效的时间戳
 * @param {string} timestamp - 输入的时间戳
 * @returns {boolean|string} - 如果输入的时间戳有效，则返回时间戳类型（'second'或'millisecond'），否则返回false
 */
function isTimestamp(timestamp) {
  if (timestamp === '' || isNaN(timestamp)) {
    return false;
  }
  if (timestamp.length === 10) {
    return 'second';
  } else if (timestamp.length === 13) {
    return 'millisecond';
  } else {
    return false;
  }
}
/**
 * @description: 时间戳转成时间
 * @param {string} timestamp 时间戳
 * @param {string} type 时间戳类型
 * @return {Date} 返回时间,格式要求：yyyy-MM-dd HH:mm:ss, 自动转成使用者的当地时间
 */
function timestampToDatetime(timestamp, type) {
  let date = new Date();
  if (type === 'second') {
    date.setTime(timestamp * 1000);
  } else {
    date.setTime(timestamp);
  }
  return date.toLocaleString();
}
function convertTimestamp(timestamp) {
  if (isTimestamp(timestamp) === false) {
    alert('请输入正确的时间戳！');
    return;
  }
  alert(timestampToDatetime(timestamp, isTimestamp(timestamp)));
}


chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.text === "convertTimestamp") {
    convertTimestamp(request.timestamp);
  }
  sendResponse({
    received: true
  });
});