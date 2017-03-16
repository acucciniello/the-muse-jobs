const got = require('got')
require('dotenv').config()
var jobsData
var output = ''

got('https://api-v2.themuse.com/jobs?page=1')
.then((response) => {
  jobsData = JSON.parse(response.body)
  for (var i = 0; i < 5; i++) {
    output = output + 'Job number ' + i + ' info: \n'
    output = output + 'name: ' + jobsData.results[i].name + '\n'
    output = output + 'location: ' + jobsData.results[i].locations[0].name + '\n'
    output = output + 'company: ' + jobsData.results[i].company.name + '\n'
  }
  console.log(output)
})
.catch((error) => {
  console.log(error.response.body)
})
