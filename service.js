 // enables strict mode which helps catch common JS programming blunders
'use strict'
var APP_ID = 'amzn1.ask.skill.6b80bb3f-2eba-4afa-b4b8-c5c88f6c145c'
var AlexaSkill = require('./alexa-skill')
var LaunchIntentFunction = require('./intents/launch-intent-function.js')
var GeneralJobsFunction = require('./intents/general-jobs-intent-function.js')
var LocationIntentFunction = require('./intents/location-intent-function')
var HelpIntentFunction = require('./intents/help-intent-function.js')
var StopIntentFunction = require('./intents/stop-intent-function.js')
var CancelIntentFunction = require('./intents/cancel-intent-function.js')

// Define a MuseJobsService function which inherits from AlexaSkill.js class
var MuseJobsService = function () {
  AlexaSkill.call(this, APP_ID)
}

MuseJobsService.prototype = Object.create(AlexaSkill.prototype)

// this will be invoked when the user first launches or opens the skill with its invocation name
// this is triggered when said "Alexa, ask muse jobs"
MuseJobsService.prototype.eventHandlers.onLaunch = LaunchIntentFunction

// How Alexa knows to handle all the different functions
// Each intent corresponds to a function
// That function is called when that intent is invoked
MuseJobsService.prototype.intentHandlers = {
  'GeneralJobsIntent': GeneralJobsFunction,
  'LocationIntent': LocationIntentFunction,
  'AMAZON.HelpIntent': HelpIntentFunction,
  'AMAZON.StopIntent': StopIntentFunction,
  'AMAZON.CancelIntent': CancelIntentFunction
}

exports.handler = function (event, context) {
  var museJobsService = new MuseJobsService()
  museJobsService.execute(event, context)
}
