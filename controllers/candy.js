const Candy = require('../models/candy');

exports.addCandy = async (req, res, next) => {
    try {

        console.log('controller,add');
        const name = req.body.name;
        const description = req.body.description;
        const price = req.body.price;
        const quantity = req.body.quantity;

        const data = await Candy.create({ name: name, description: description, price: price, quantity: quantity });
        res.status(201).json({ newCompanyDetail: data });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({
            error: err
        })
    }
}