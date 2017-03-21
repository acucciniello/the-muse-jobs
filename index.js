const got = require('got')
var formatOutput = require('./format-output.js')
var formatURL = require('./format-url.js')
var jobsData
var value = 'internship'

formatURL('level', value, function (url) {
  got(url)
  .then((response) => {
    jobsData = JSON.parse(response.body)
    formatOutput(jobsData)
    return
  })
  .catch((error) => {
    console.log(error.response.body)
    return
  })
})

