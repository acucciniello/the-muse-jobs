var getJobsData = require('../helpers/get-jobs-data.js')
var formatOutput = require('../helpers/format-output.js')
var formatURL = require('../helpers/format-url.js')

module.exports = CategoryIntentFunction

// Purpose: To find the top 5 newest job postings on themuse.com based on category
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function CategoryIntentFunction (intent, session, response) {
  var category = intent.slots.category.value
  if (category === undefined || category === null || category === '' || category === '{}') {
    var noSlot = 'I am sorry, I did not get a category.  Please say: Alexa, ask fan muse jobs to tell me jobs that are in the category engineering'
    response.ask(noSlot)
    return
  }
  formatURL('category', category, function (err, url) {
    if (err) {
      var errorMsg = 'We could not find the category you were looking for'
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

