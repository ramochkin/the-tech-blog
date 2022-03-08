const router = require('express').Router();
const { Posts } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {

    try {
        const postData = await Posts.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });
        console.log(postData);

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            logged_in: req.session.logged_in,
            posts,
        });
    } catch (err) {

        res.redirect('login');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('newPost', {
        logged_in: req.session.logged_in
    });
});

router.get('/edit/:id', withAuth, async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id);
  
      if (postData) {
        const post = postData.get({ plain: true });
  
        res.render('editPost', {
          logged_in: req.session.logged_in,
          post,
        });
      } else {
        res.status(404).end();
      }
    } catch (err) {
      res.redirect('login');
    }
  });

  module.exports = router;