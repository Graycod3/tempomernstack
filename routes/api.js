const express = require('express');

const router = express.Router();

const BlogPost = require('../models/blogPost');


//Routes
router.get('/',(req, res)=>{
  BlogPost.find({ })
      .then((data) =>{
          console.log('Data: ', data);
          res.json(data)// the way you send that data
      })
      .catch((error) => {
          console.log('error: ', daerrorta)
      });

});
// to save the posted data
router.post('/save',(req, res)=>{
  console.log('Body: ', req.body);

  const data = req.body;
  const newBlogPost = new BlogPost(data);
  console.log('NEW BLOGPOSTS', newBlogPost);
  // .save
/*  newBlogPost.save((error) => {
      if (error) {
          res.status(500).json({msg: 'Sorry, internal server erros' });
          return
      } else{
          // BlogPost
        res.json({
              msg: 'We received your data been saved'
          });
      }
  })*/

  newBlogPost.save().then(item => res.json(item));

/*  BlogPost.create(data)
              .then(newBlogPost1=> res.json(newBlogPost1))
              .catch(err => res.status(422).json(err));
*/
  console.log('NEW BLOGPOSTS, mf w/ a sick d');


});

router.get('/name',(req, res)=>{
  const data =  {
      username: 'peter',
      age: 5
  };
  res.json(data);
});

module.exports = router;
