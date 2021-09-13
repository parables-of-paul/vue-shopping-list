/* declare dependency and schema shortcut for model building */
const mongoose = require('mongoose');
const { Schema } = mongoose;

/*misc items schema */
const miscItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'summaryproductslists'}
);

module.exports = mongoose.model('miscList', miscItemSchema)

/*bath items schema */
const bathItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'bathroomproductslists'}
);

module.exports = mongoose.model('bathList', bathItemSchema)

/*fruit items schema */
const fruitItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'fruitproductslists'}
);

module.exports = mongoose.model('fruitList', fruitItemSchema)

/*fridge items schema */
const fridgeItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'fridgeproductslists'}
);

module.exports = mongoose.model('fridgeList', fridgeItemSchema)

/*freezer items schema */
const freezerItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'freezerproductslists'}
);

module.exports = mongoose.model('freezerList', freezerItemSchema)

/*Dry items schema */
const dryItemSchema = new Schema(
    {
        product: {
            type: String,
        }
    },
    {collection: 'bakingproductslists'}
);

module.exports = mongoose.model('dryList', dryItemSchema)