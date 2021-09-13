const mongoose = require('mongoose');
const fridgeItem = mongoose.model('fridgeList');



exports.list_all_fridgeItems = (req, res) => {
    fridgeItem.find({}, (err, fridgeItems) => {
        if(err) res.send(err);
        res.json(fridgeItems);
    });
};

exports.create_a_fridgeItem = (req, res) => {
    const newItem = new fridgeItem(req.body);
    newItem.save((err, fridgeItem) =>{
        if(err) res.send(err);
        res.json(fridgeItem);
    });
};

exports.delete_a_fridgeItem = (req, res) => {
    fridgeItem.deleteOne({_id: req.params.itemId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });
    });
};