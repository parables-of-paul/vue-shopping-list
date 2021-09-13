const miscItemBuilder = require('../controllers/miscItemController');
const bathItemBuilder = require('../controllers/bathItemController');
const fruitItemBuilder = require('../controllers/fruitItemController');
const fridgeItemBuilder = require('../controllers/fridgeItemController');
const freezerItemBuilder = require('../controllers/freezerItemController');
const dryItemBuilder = require('../controllers/dryItemController');

module.exports = app => {
    app
        .route('/items')
        .get(miscItemBuilder.list_all_items)
        .post(miscItemBuilder.create_a_item)
        
    app
        .route('/items/:itemId')
        .delete(miscItemBuilder.delete_a_item)
    /* bath API set up */
    app
        .route('/bath')
        .get(bathItemBuilder.list_all_bathItems)
        .post(bathItemBuilder.create_a_bathItem)
        
    app
        .route('/bath/:itemId')
        .delete(bathItemBuilder.delete_a_bathItem)
    /* fruit API Set up */
    app
        .route('/fruit')
        .get(fruitItemBuilder.list_all_fruitItems)
        .post(fruitItemBuilder.create_a_fruitItem)
        
    app
        .route('/fruit/:itemId')
        .delete(fruitItemBuilder.delete_a_fruitItem)

    /*fridge API Set up */
    app
        .route('/fridge')
        .get(fridgeItemBuilder.list_all_fridgeItems)
        .post(fridgeItemBuilder.create_a_fridgeItem)
    
    app
        .route('/fridge/:itemId')
        .delete(fridgeItemBuilder.delete_a_fridgeItem)
    /* freezer API Endpoint Setup */
    app
        .route('/freezer')
        .get(freezerItemBuilder.list_all_freezerItems)
        .post(freezerItemBuilder.create_a_freezerItem)
    
    app
        .route('/freezer/:itemId')
        .delete(freezerItemBuilder.delete_a_freezerItem)
    /*dry Items API Set up */
    app
        .route('/dry')
        .get(dryItemBuilder.list_all_dryItems)
        .post(dryItemBuilder.create_a_dryItem)
    
    app
        .route('/dry/:itemId')
        .delete(dryItemBuilder.delete_a_dryItem)
};
