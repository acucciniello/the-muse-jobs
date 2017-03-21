module.exports = formatLevel

// Purpose: To Format the level given by the user in order to be acceptable by themuse API
// param (in/out): url: given by previous function, is base url with the api key is returned with the proper experience level
// param (in): value: the spoken level from the user
// param (out): callback: passes url back to formatURL()

function formatLevel (url, value, callback) {
  var urlLevel = 'level='
  var word
  value = value.split(' ')
  if (value.length === 1) {
    // Case where level is Internship
    word = value[0].charAt(0).toUpperCase()
    value[0] = value[0].replace(value[0].charAt(0), word)
    urlLevel = urlLevel + value[0]
  } else if (value.length === 2) {
    // Input is Entry Level, Mid Level or Senior Level
    for (var i = 0; i < value.length; i++) {
      word = value[i].charAt(0).toUpperCase()
      value[i] = value[i].replace(value[i].charAt(0), word)
      urlLevel = urlLevel + value[i] + '+'
    }
    urlLevel = urlLevel.substring(0, urlLevel.length - 1)
  } else {
    // Input was not 1 of the 4 options: Internship, Entry Level, Mid Level, or Senior Level
    callback('Wrong level input')
    return
  }
  url = url + '&' + urlLevel
  callback(null, url)
  return
}
