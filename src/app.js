const path = require('path')
const express = require('express')
const hbs = require('hbs')

const dataRoute = require('./routes/data')
const indexRoute = require('./routes/index')
const dayRoute = require('./routes/day')
const slinkRoute = require('./routes/slink')
const calendarRoute = require('./routes/calendar')

// create express instance
const app = express()
const port = process.env.PORT || 3000

// define paths for express 
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

// getting routes
app.use(express.json())
app.use(dataRoute)
app.use(indexRoute)
app.use(dayRoute)
app.use(slinkRoute)
app.use(calendarRoute)

// 404 pages
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: 'Page Not Found'
    })
})

// Start web server
app.listen(port, () => {
    console.log('listening on port: ', port)
})