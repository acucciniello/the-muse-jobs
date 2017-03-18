module.exports = formatURL

function formatURL (type, value, callback) {
  var url = 'https://api-v2.themuse.com/jobs?page=1&api_key=' + process.env.API_KEY
  if (type === 'location') {
    var upperValue = value.toUpperCase()
    if (upperValue === 'NEW YORK CITY METRO AREA' || upperValue === 'WASHINGTON D. C. METRO AREA') {
      // Case where the word is separated NYC or Washington DC
      value = value.split(' ')
      var urlLocation = 'location='
      for (var i = 0; i < value.length; i++) {
        urlLocation = urlLocation + value[i] + '+'
      }
      urlLocation = urlLocation.substring(0, urlLocation.length - 1)
      url = url + '&' + urlLocation
    }
  }
  callback(url)
  return
}
