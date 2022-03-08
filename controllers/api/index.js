const router = require('express').Router();
const userRoutes = require('./user-routes');
const commentsRoutes = require('./comments-routes')
const postRoutes = require('./posts-routes')

router.use('/users', userRoutes);
router.use('/comments', commentsRoutes);
router.use('/posts', postRoutes)

module.exports = router;
