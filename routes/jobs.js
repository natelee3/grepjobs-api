'use strict';

const express = require('express');
const router = express.Router();

router.get('/:id?', async (req, res) => {
    if (!!req.params.id) {
        const malletId = req.params.id;
        const theMallet = await MalletsModel.getMalletById(malletId);
        const theReview = await MalletsModel.getAllReviewsById(malletId);
        res.json(theMallet).status(200)
    } else {
        const malletsData = await MalletsModel.getAllMalletData();
        res.json(malletsData).status(200)
    }
})


module.exports = router;