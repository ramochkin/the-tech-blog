const router = require('express').Router();
const {Posts, Comments, User,} = require('../models');

router.get('/', async (req, res) => {
  try {
    const postData = await Posts.findAll({
      include: [User],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', { posts, logged_in: req.session.logged_in });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/post/:id', async (req, res)=>{
  try{
    const postData= await Posts.findByPk(req.params.id, {
      include: [User, {
        model: Comments,
        include: [User]
      }]
    });

    const post =  postData.get({plain: true});
    res.render('single-post', {
      post,
      logged_in: req.session.logged_in
    })


  }catch(err){
    res.status(500).json(err)
  }
})

router.get('/login', (req,res) => {
  res.render('login')
});

router.get('/signup', (req,res) => {
  res.render('signup')
});


module.exports = router;
