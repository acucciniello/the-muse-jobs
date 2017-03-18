 module.exports = formatOutput

 function formatOutput (data, callback) {
   var output = ''
   for (var i = 1; i < 6; i++) {
     output = output + 'Job ' + i + ' info: \n'
     output = output + 'name: ' + data.results[i - 1].name + ', \n'
     if (data.results[i - 1].locations.length === 0) {
       output = output + 'location: none , \n'
     } else if (data.results[i - 1].locations.length === 1) {
       output = output + 'location: ' + data.results[i - 1].locations[0].name + ', \n'
     } else {
       output = output + 'locations: '
       for (var j = 0; j < data.results[i - 1].locations.length; j++) {
         output = output + data.results[i - 1].locations[j].name + ' '
       }
       output = output + ', \n'
     }
     output = output + 'company: ' + data.results[i - 1].company.name + '.\n'
   }
   callback(output)
   return
 }
