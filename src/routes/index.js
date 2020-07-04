const express = require('express')
const route = new express.Router

route.get('', (req, res) => {
    res.render('index')
})

module.exports = route