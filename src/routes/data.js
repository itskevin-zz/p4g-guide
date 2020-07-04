const express = require('express')
const fs = require('fs')
const route = new express.Router

const dataPath = './data/data.json'

let data = { }
fs.readFile(dataPath, (error, gameData) => {
    if (error) throw error
    data = JSON.parse(gameData)
})

route.get('/data', (req, res) => {
    res.send(data)
})

module.exports = route