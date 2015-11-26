'use strict';
let express     = require('express'),
    router      = express.Router(),
    unirest = require('unirest');

// hit api, return page num if invalid.
router.get('/:catNum/:pageNum', (req, res) => {
   let cat = req.params.catNum
   let page = parseInt(req.params.pageNum)
   let searchURL = getUrl(cat, page);
   unirest.get(searchURL)
      .header("X-Mashape-Key", "lX0iJk5iGlmshE7fTOCtRf7hsj3Zp1NuuosjsnBKj4jIROPs9R")
      .header("Accept", "application/json")
      .end((result) => {
         let render = ['next',cat,(page+1)];
         if (result.body) {
            if(result.body[0]){
            } else {
               render = ['done at: '+(page-1)]
            }
         }
         res.send(render);
      });
});

let getUrl = function(cNum,pNum){
   let base = "https://pareshchouhan-trivia-v1.p.mashape.com/v1/getQuizQuestionsByCategory?categoryId=";
   return base + cNum + "&limit=1&page=" + pNum;
}

module.exports = router;
