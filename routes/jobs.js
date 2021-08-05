'use strict';

const express = require('express');
const JobsModel = require('../models/Jobs');
const router = express.Router();

router.get('/:user?', async (req, res) => {
    if (!!req.params.user) {
        const { user } = req.params;
        const Favorites = await JobsModel.getAllUserFavorites(user);
        res.json(Favorites).status(200);
    } else {
        const allData = await JobsModel.getAll();
        res.json(allData).status(200);
    }
})

router.post('/add', async (req, res) => {
    console.log('req body: ', req.body)
    const response = await JobsModel.addFavorite(req.body);
    res.status(200).send(response);
})


module.exports = router;
