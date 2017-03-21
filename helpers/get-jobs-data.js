module.exports = getJobsData

const got = require('got')

// Purpose: To GET jobs data through themuse.com API Call
// param (in/out): url:  is base url with the api key and information from user to specify search
// param (out): callback: passes jobsData back to be formatted for output

function getJobsData (url, callback) {
  var jobsData
  got(url)
  .then((response) => {
    jobsData = JSON.parse(response.body)
    callback(null, jobsData)
    return
  })
  .catch((error) => {
    callback(error.response.body)
    return
  })
}
