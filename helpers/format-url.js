var formatLocation = require('./format-location.js')
module.exports = formatURL

function formatURL (type, value, callback) {
  var url = 'https://api-v2.themuse.com/jobs?page=1&api_key=' + process.env.API_KEY
  if (type === 'location') {
    formatLocation(url, value, function (url) {
      callback(null, url)
      return
    })
  } else {
    callback('type of Information not given')
    return
  }
}
