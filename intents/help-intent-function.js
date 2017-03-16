module.exports = HelpIntentFunction

// Purpose: To provide the user with more information on how to use the skill
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function HelpIntentFunction (intent, session, response) {
  var begin = 'This is a skill that allows you to find jobs using themuse.com '
  var useFindNewest = 'In order to find the newest job postings, please say Alexa, ask muse jobs to give me the newest job postings. '
  var question = 'What would you like to do ?'
  var output = begin + useFindNewest + question
  response.ask(output)
  return
}

