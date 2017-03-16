module.exports = getJobsData

const got = require('got')

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
