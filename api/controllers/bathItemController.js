const mongoose = require('mongoose');
const bathItem = mongoose.model('bathList');



exports.list_all_bathItems = (req, res) => {
    bathItem.find({}, (err, bathItems) => {
        if(err) res.send(err);
        res.json(bathItems);
    });
};

exports.create_a_bathItem = (req, res) => {
    const newItem = new bathItem(req.body);
    newItem.save((err, bathItem) =>{
        if(err) res.send(err);
        res.json(bathItem);
    });
};

exports.delete_a_bathItem = (req, res) => {
    bathItem.deleteOne({_id: req.params.itemId}, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });

    });
};