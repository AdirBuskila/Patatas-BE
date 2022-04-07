const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Posts
router.get('/', async (req, res) => {
    const products = await loadProductsCollection()
    res.send(await products.find({}).toArray())
})


// Add Posts
router.post('/', async (req, res) => {
    const products = await loadProductsCollection()
    const { type, name, price, inStock, description, img, note, addons } = req.body
    const product = {
        type,
        name,
        price,
        inStock,
        description,
        img,
        note,
        addons
    }
    await products.insertOne(product)
    res.status(201).send()
})


// Delete Posts

router.delete('/:id'), async (req, res) => {
    const products = await loadProductsCollection()
    await products.deleteOne({ _id: new mongodb.ObjectId(req.params.id)})
    res.status(202).send()
}

async function loadProductsCollection() {
    const client = await mongodb.MongoClient.connect(
        'mongodb+srv://adirbu98:kk8YCEJACuaiicsH@products.3us73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })
    return client.db('patatas_db').collection('products')
}


module.exports = router