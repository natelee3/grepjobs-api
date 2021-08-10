'use strict';

const express = require('express');
const JobsModel = require('../models/Jobs');
const router = express.Router();

router.get('/:user?', async (req, res) => {
    if (!!req.params.user) {
        const { user } = req.params;
        const Favorites = await JobsModel.getAllUserFavorites(user);
        if (Favorites.count = 0) {
            res.send(Favorites)
        }
        res.json(Favorites).status(200);
    } else {
        const allData = await JobsModel.getAll();
        res.json(allData).status(200);
    }
});

router.post('/add', async (req, res) => {
    const response = await JobsModel.addFavorite(req.body);
    res.send(response);
});

router.post('/delete', async (req, res) => {
    const response = await JobsModel.deleteFavorite(req.body);
    res.status(200).send(response);
});

router.post('/update', async (req, res) => {
    const response = await JobsModel.updateFavorite(req.body);
    res.status(200).send(response);
});


module.exports = router;
