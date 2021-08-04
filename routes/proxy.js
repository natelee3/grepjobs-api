const express = require('express'),
    fetch = require('node-fetch'),
    router = express.Router();

router.get('/', async (req, res) => {
    const { url } = req.query;
    let urlToProxy = url;
    if (Object.entries(req.query).length > 1) {
        const queryParams = Object.entries(req.query);
        let queryString = url;
        for (const [key, value] of queryParams) {
            if (key != 'url') {
                queryString += `&${key}=${value}`;
            }
        }
        urlToProxy = encodeURI(queryString);
    }
    try {
        const response = await fetch(urlToProxy, {
            headers: {
                Authorization: 'Token 4c95d9d3623b7f3fe789864d2db137ffe9ac9391'
            }
        }).then((response) => response.json());
        // res.header('Access-Control-Allow-Origin', '*');
        // res.header(
        //     'Access-Control-Allow-Headers',
        //     'Origin, X-Requested-With, Content-Type, Accept',
        // );
        // res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.status(200).send(response);
    } catch (error) {
        res.sendStatus(500);
    }
});

module.exports = router;