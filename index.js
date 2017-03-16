const got = require('got')
var jobsData

got('https://api-v2.themuse.com/jobs?page=1')
.then((response) => {
  jobsData = JSON.parse(response.body)
  console.log(jobsData)
  return
})
.catch((error) => {
  console.log(error.response.body)
  return
})
