const express = require("express");
const router = express.Router();
const db = require("../../models");

// routing (html) /member
router.get("/", (req, res) => {
   // get comments from db and send to template
// res.render("member",[]);
   return Promise.all([
      db.Member.findAll({}),
      db.Group.findAll({})
   ]).then(data => res.render("member", {members: data[0], groups: data[1]}))
  
      .catch(err => {
         res.status(500);
         next(err);
      });
});

module.exports = router;
