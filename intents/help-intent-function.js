module.exports = HelpIntentFunction

// Purpose: To provide the user with more information on how to use the skill
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function HelpIntentFunction (intent, session, response) {
  var begin = 'This is a skill that allows you to find jobs using themuse.com '
  var useFindNewest = 'In order to find the newest job postings, please say Alexa, ask fan muse jobs to give me the newest job postings.  '
  var useLocation = 'In order to find the newest job postings by location, please say Alexa, ask fan muse jobs to tell me jobs near New York City Metro Area.  '
  var useLevel = 'In order to find the newest job postings by location, please say Alexa, ask fan muse jobs to show jobs that are Entry Level.  '
  var useCategory = 'In order to find the newest job postings by category, please say Alexa, ask fan muse jobs to tell me jobs that are in the category engineering.  '
  var question = 'What would you like to do ?'
  var output = begin + useFindNewest + useLocation + useLevel + useCategory + question
  response.ask(output)
  return
}

