 module.exports = formatOutput

 function formatOutput (data) {
   var output = ''
   for (var i = 0; i < 5; i++) {
     output = output + 'Job number ' + i + ' info: \n'
     output = output + 'name: ' + data.results[i].name + '\n'
     if (data.results[i].locations.length === 0) {
       output = output + 'location: none \n'
     } else if (data.results[i].locations.length === 1) {
       output = output + 'location: ' + data.results[i].locations[0].name + '\n'
     } else {
       output = output + 'locations: '
       for (var j = 0; j < data.results[i].locations.length; j++) {
         output = output + data.results[i].locations[j].name + ', '
       }
     }
     output = output + 'company: ' + data.results[i].company.name + '\n'
     console.log(output)
   }
   return
 }
