const express = require('express')
const axios = require('axios')


// const auth = require('../middleware');

const dataRouter = express.Router();

dataRouter.get('/menu', async (req, res) => {
    console.log("menu apis")
    try {
        const response = await axios.get('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId='+req.query.restaurantId, {
        //   params: {
        //     lat: 28.65420,
        //     lng: 77.23730,
        //     'complete-menu': true,
        //     'restaurantId': req.query.restaurantId,
        //     'page_type': 'REGULAR_MENU',
        //   },
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.5',
          },
        });
        console.log("Response: ",response.data)
        res.json(response.data);
      } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
      }
});

dataRouter.get('/restaurents', async (req, res) => {
    console.log("restaurent apis")
    try {
        const response = await axios.get('https://www.swiggy.com/dapi/restaurants/list/v5', {
          params: {
            lat: 28.65420,
            lng: 77.23730,
            is_seo_homepage_enabled: true,
            page_type: 'DESKTOP_WEB_LISTING',
          },
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'Accept-Language': 'en-US,en;q=0.5',
          },
        });
        console.log(response.data)
        res.json(response.data);
      } catch (error) {
        res.status(error.response ? error.response.status : 500).json({ error: error.message });
      }
});

module.exports = dataRouter;