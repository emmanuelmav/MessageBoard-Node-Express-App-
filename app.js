const { urlencoded } = require('express')
const express = require('express')
const app = express()
const path = require('path')
// Extract our router object
const index = require('./routes/index')



// Sets folder from which express will grab ejs templates
app.set('views', path.join(__dirname, 'views'))
app.set('views engine', 'ejs')

// Parses thru the url encode to form datat then
// We can access it thru req.body
app.use(urlencoded({ extended: true }))


app.use('/', index)
// Use the index.js file to handle 
// all endpoints that start with "/"

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
})


