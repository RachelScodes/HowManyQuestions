'use strict'
let test = true

let getResults = function (c,p) {
   let reqUrl = '/'+c+'/'+p
   $.ajax({
      url: reqUrl,
      method: "GET"
   }).done(renderAnswer)
}

let renderAnswer = function(data) {
   if (test){
      if (data[0] == 'next') {
         getResults(data[1],data[2])
      } else {
         $("#results").text(data[0])
      }
   }
}
