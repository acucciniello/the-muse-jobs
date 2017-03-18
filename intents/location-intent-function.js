var getJobsData = require('../helpers/get-jobs-data.js')
var formatOutput = require('../helpers/format-output.js')
var formatURL = require('../helpers/format-url.js')

module.exports = LocationIntentFunction

// Purpose: To find the top 5 newest job postings on themuse.com
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function LocationIntentFunction (intent, session, response) {
  var location = intent.slots.location.value
  formatURL('location', location, function (url) {
    /* if (err) {
      var errorMsg = 'We could not find the city you were looking for'
      response.tell(errorMsg)
      return
    } */
    getJobsData(url, function (err, result) {
      if (err) {
        var errorMsg = 'We failed pulling Data from Muse API'
        response.tell(errorMsg)
        return
      }
      formatOutput(result, function (output) {
        response.tell(output)
        return
      })
    })
  })
}
