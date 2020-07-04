const fs = require('fs')
const express = require('express')
const route = new express.Router

const dataPath = './data/data.json'

let dayArray = { }
fs.readFile(dataPath, (error, dayData) => {
    if (error) throw error
    dayArray = JSON.parse(dayData)
})


route.get('/day/:urlDate', (req, res) => {
    const urlDate = req.params.urlDate
    const dateNav = dayArray.dates

    const indexCurrentDate = dateNav.findIndex(date => date === urlDate)
    const nextDate = dateNav[indexCurrentDate + 1]
    const prevDate = dateNav[indexCurrentDate - 1]

    res.render('day', {
        weekDay: dayArray.calendar[urlDate].weekDay,
        date: dayArray.calendar[urlDate].date,
        weather: dayArray.calendar[urlDate].weather,
        dayAvail: dayArray.calendar[urlDate].dayAvail,
        nightAvail: dayArray.calendar[urlDate].nightAvail,
        spoilers: dayArray.calendar[urlDate].spoilers,
        socialLinks: dayArray.calendar[urlDate].socialLinks,
        nightLinks: dayArray.calendar[urlDate].nightLinks,
        dayNotes: dayArray.calendar[urlDate].dayNotes,
        nightNotes: dayArray.calendar[urlDate].nightNotes,
        fusionForecast: dayArray.calendar[urlDate].fusionForecast,
        prevDate,
        nextDate
    })
})

module.exports = route