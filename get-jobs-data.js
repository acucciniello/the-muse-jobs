module.exports = getJobsData

const got = require('got')

function getJobsData (url, callback) {
  var jobsData
  var output = ''
  got(url)
  .then((response) => {
    jobsData = JSON.parse(response.body)
    for (var i = 0; i < 5; i++) {
      output = output + 'Job number ' + i + ' info: \n'
      output = output + 'name: ' + jobsData.results[i].name + '\n'
      output = output + 'location: ' + jobsData.results[i].locations[0].name + '\n'
      output = output + 'company: ' + jobsData.results[i].company.name + '\n'
    }
    callback(null, output)
    return
  })
  .catch((error) => {
    callback(error.response.body)
    return
  })
}
