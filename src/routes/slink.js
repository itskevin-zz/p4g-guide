const fs = require('fs')
const express = require('express')
const route = new express.Router

const dataPath = './data/data.json'

let slinksArray = { } 
fs.readFile(dataPath, (error, slinkData) => {
    if (error) throw error
    slinksArray = JSON.parse(slinkData)
})

route.get('/slink/:arcana', (req, res) => {
    const arcana = req.params.arcana

    res.render('slink', {
        arcana: slinksArray.slinks[arcana].arcana,
        name: slinksArray.slinks[arcana].name,
        notes: slinksArray.slinks[arcana].notes,
        ranks: slinksArray.slinks[arcana].rank
    })
})

route.get('/slink', (req, res) => {
    res.render('slinks', {
        name: slinksArray.names
    })
})

module.exports = route