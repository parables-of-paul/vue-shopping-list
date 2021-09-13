const mongoose = require('mongoose');
const miscItem = mongoose.model('miscList');



exports.list_all_items = (req, res) => {
    miscItem.find({}, (err, miscItems) => {
        if(err) res.send(err);
        res.json(miscItems);
    });
};

exports.create_a_item = (req, res) => {
    const newItem = new miscItem(req.body)
    newItem.save((err, data) =>{
        if(err) res.send(err);
        res.json(data);
    });
};

exports.delete_a_item = (req, res) => {
    miscItem.deleteOne({_id: req.params.itemId}, err => {
        if(err) res.send(err);
        res.json({
            message: 'Item successfully deleted',
            _id: req.params.itemId
        });
    });
};