const express = require('express');

const Product = require("../models/product.model");

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const post = await Product.create(req.body);
        return res.status(200).json(post);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" })
    }
});


router.get("/", async (req, res) => {
    try {
        const get = await Product.find().lean().exec();
        return res.status(201).json(get);

    } catch (e) {
        return res.status(500).json({ message: e.message, status: "failed" })
    }
});


module.exports = router;