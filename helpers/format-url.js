var formatLocation = require('./format-location.js')
var formatLevel = require('./format-level.js')
var formatCategory = require('./format-category.js')

module.exports = formatURL

// Purpose: To Format the url with information given by the user in order to be acceptable by themuse API
// param (in): type: Type of job search (location, level, etc) - given as a string
// param (in): value: the spoken value of type given from the user
// param (out): callback: passes url back to specific intent function

function formatURL (type, value, callback) {
  var url = 'https://api-v2.themuse.com/jobs?page=1&api_key=' + process.env.API_KEY
  if (type === 'location') {
    formatLocation(url, value, function (url) {
      callback(null, url)
      return
    })
  } else if (type === 'level') {
    formatLevel(url, value, function (err, url) {
      if (err) {
        callback(err)
        return
      }
      callback(null, url)
      return
    })
  } else if (type === 'category') {
    formatCategory(url, value, function (err, url) {
      if (err) {
        callback(err)
        return
      }
      callback(null, url)
      return
    })
  } else {
    callback('type of Information not given')
    return
  }
}
