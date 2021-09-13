const mongoose = require('mongoose');
const freezerItem = mongoose.model('freezerList');



exports.list_all_freezerItems = (req, res) => {
    freezerItem.find({}, (err, freezerItems) => {
        if(err) res.send(err);
        res.json(freezerItems);
    });
};

exports.create_a_freezerItem = (req, res) => {
    const newItem = new freezerItem(req.body);
    newItem.save((err, freezerItem) =>{
        if(err) res.send(err);
        res.json(freezerItem);
    });
};

exports.delete_a_freezerItem = (req, res) => {
    freezerItem.deleteOne({_id: req.params.itemId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });
    });
};