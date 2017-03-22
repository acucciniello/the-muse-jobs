module.exports = formatCategory

// Purpose: To Format the job category given by the user in order to be acceptable by themuse API
// param (in/out): url: given by previous function, is base url with the api key is returned with the proper category
// param (in): value: the spoken cateogory from the user
// param (out): callback: passes url back to formatURL()

function formatCategory (url, value, callback) {
  var urlCategory = 'category='
  var word
  // When search requires letters to be lower case
  if (value === 'customer service' || value === 'receptionist' || value === 'human resources') {
    value = value.split(' ')
    for (var i = 0; i < value.length; i++) {
      urlCategory = urlCategory + value[i] + '+'
    }
  } else {
    value = value.split(' ')
    for (i = 0; i < value.length; i++) {
      if (value[i] === 'and') {
        value[i] = '%26'
      } else {
        word = value[i].charAt(0).toUpperCase()
        value[i] = value[i].replace(value[i].charAt(0), word)
      }
      urlCategory = urlCategory + value[i] + '+'
    }
  }
  urlCategory = urlCategory.substring(0, urlCategory.length - 1)
  url = url + '&' + urlCategory
  callback(null, url)
  return
}
