module.exports = LaunchIntentFunction

// Purpose: To Launch the skill and Let the user know what the options are.
// param (in): intent: given by Alexa, allows code to access parts of the intent request
// param (in): session: given by Alexa, allows code to access parts of the session in the Lambda request
// param (out): request: allows the user to change the response by Alexa

function LaunchIntentFunction (intent, session, response) {
  var output = 'Welcome to fan muse jobs.  You can find out the newest job postings here.  To start using the skill, say Alexa, ask fan muse jobs to give me the newest job postings. '
  response.ask(output)
  return
}
