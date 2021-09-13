const mongoose = require('mongoose');
const dryItem = mongoose.model('dryList');



exports.list_all_dryItems = (req, res) => {
    dryItem.find({}, (err, dryItems) => {
        if(err) res.send(err);
        res.json(dryItems);
    });
};

exports.create_a_dryItem = (req, res) => {
    const newItem = new dryItem(req.body);
    newItem.save((err, dryItem) =>{
        if(err) res.send(err);
        res.json(dryItem);
    });
};

exports.delete_a_dryItem = (req, res) => {
    dryItem.deleteOne({_id: req.params.itemId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });
    });
};