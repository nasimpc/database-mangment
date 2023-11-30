const User = require('../models/user');
const Comment = require('../models/comment');

exports.addUser = async (req, res, next) => {
    try {

        // if (!req.body.phonenumber) {
        //     throw new Error('Phone number is madatory')
        // }
        console.log('hi');
        const post = req.body.post;
        const description = req.body.description;

        const data = await User.create({ post: post, description: description });
        res.status(201).json({ newPostDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}
exports.addComment = async (req, res, next) => {
    try {

        // if (!req.body.phonenumber) {
        //     throw new Error('Phone number is madatory')
        // }
        console.log(req.body.comment);
        const comment = req.body.comment;

        const data = await Comment.create({ comment: comment });
        res.status(201);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}

exports.getUser = async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.status(200).json({ allPosts: users });
    }
    catch (error) {
        console.log('Get user is failing', JSON.stringify(error));
        res.status(500).json({ error: error });
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const uId = req.params.id;
        await User.destroy({ where: { id: uId } });
        res.sendStatus(200);
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}
