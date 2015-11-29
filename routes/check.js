'use strict';
let express  = require('express'),
    router   = express.Router(),
    mongoose = require('mongoose'),
    Room     = require('../models/room.js');

// check answer against database to see if it's correct
// router.get('/:indexOfQ/:choice/:rawScore', (req, res) => {
//    let score  = parseInt(req.params.rawScore)
//    let choice = req.params.choice
//    let search query = 'wat?';
//    search in here.end((result) => {
//    })
// })

module.exports.controller = function(app) {
   //check a question
   app.get("/:indexOfQ/:choice/:rawScore/:thisRoom", (req, res) => {
      // minify params
      let index  = req.params.indexOfQ,
          rName  = req.params.thisRoom,
          choice = parseInt(req.params.choice),
          render = ['0',req.params.rawScore];

      //get the question from the room
      Room.findBy(rName).exec(function(err, room) {
         // set up 'data'
         if (err) {
            render = next(err);
         } else {
            // check answer against db
            let solution = room.questions[index].answer
            if (choice == solution)
               render[0] = 'correct'
            } else {
               render[0] = 'wrong'
            }
         }
         // render is recieved as 'data' in showAnswer on script.js
         res.send(render);
      });
   });
}
