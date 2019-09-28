var express = require('express');
var router = express.Router();
const ArticleModel = require('../model/article');


/* GET users listing. */
router.get('/', function(req, res, next) {
  const article = new ArticleModel({
    title: 'dgdfgd',
    content: 'dfgdfhdfhdfhsdf'
  });
  article.save();
  res.send('OK');
});

router.post('/', function(req, res, next) {
  const{ title,content } = req.body;
  const article = new ArticleModel({
    title: title,
    content: content
  });
  article.save();
  res.send('KKK');
});

module.exports = router;
