const { Posts } = require('../../models')
const router = require('express').Router()
const withAuth = require('../../utils/auth')

router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Posts.create({ ...req.body, user_id: req.session.user_id })

        res.json(newPost)

    } catch (err) {
        res.status(400).json(err);
    }
})


router.put('/:id', withAuth, async (req, res) => {
    try {
        const affectedRows = await Posts.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.json({
            message: 'Post updated'
        })

    } catch (err) {
        res.status(500).json(err);
    }

});


router.delete('/:id', withAuth, async (req, res) => {
    try {
        const affectedRows = Posts.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.json({
            message: 'Post deleted'
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;