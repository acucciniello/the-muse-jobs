var getJobsData = require('../helpers/get-jobs-data.js')
var formatOutput = require('../helpers/format-output.js')
var formatURL = require('../helpers/format-url.js')

module.exports = LevelIntentFunction

// Purpose: To find the top 5 newest job postings on themuse.com based off experience level
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function LevelIntentFunction (intent, session, response) {
  var level = intent.slots.level.value
  if (level === undefined || level === null || level === '' || level === '{}') {
    var noSlot = 'I am sorry, I did not get a level.  Please say: Alexa, ask fan muse jobs to show jobs that are Entry Level'
    response.ask(noSlot)
    return
  }
  formatURL('level', level, function (err, url) {
    if (err) {
      var errorMsg = 'We could not find the experience level you were looking for'
      response.tell(errorMsg)
      return
    }
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
