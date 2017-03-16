var getJobsData = require('../helpers/get-jobs-data.js')
var formatOutput = require('../helpers/format-output.js')

module.exports = GeneralJobsFunction

// Purpose: To find the top 5 newest job postings on themuse.com
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function GeneralJobsFunction (intent, session, response) {
  var url = 'https://api-v2.themuse.com/jobs?page=1&api_key=' + process.env.API_KEY
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
}
