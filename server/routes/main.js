const express = require('express');
const router = express.Router();


const locals = {
  title: "NodeJs Blog",
  description: "Simple Blog created with NodeJs, Express & MongoDb."
}

//Routes
router.get('', (req, res) => {
  res.render('index', { locals });
});

router.get('/about', (req, res) => {
  res.render('about', {
    currentRoute: '/about'
  });
});

module.exports = router;