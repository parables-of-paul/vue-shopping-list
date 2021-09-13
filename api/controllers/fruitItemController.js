const mongoose = require('mongoose');
const fruitItem = mongoose.model('fruitList');



exports.list_all_fruitItems = (req, res) => {
    fruitItem.find({}, (err, fruitItems) => {
        if(err) res.send(err);
        res.json(fruitItems);
    });
};

exports.create_a_fruitItem = (req, res) => {
    const newItem = new fruitItem(req.body);
    newItem.save((err, fruitItem) =>{
        if(err) res.send(err);
        res.json(fruitItem);
    });
};

exports.delete_a_fruitItem = (req, res) => {
    fruitItem.deleteOne({_id: req.params.itemId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });
    });
};