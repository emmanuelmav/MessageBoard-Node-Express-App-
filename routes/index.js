const express = require('express')
const router = express.Router();

// Data
const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    },
    {
        text: "Hey Guys!",
        user: "Betsy",
        added: new Date()
    },
    {
        text: "Hola!",
        user: "Nicole",
        added: new Date()
    },

];


// Routes

// Home Page
router.get('/', (req, res) => {
    res.render('index.ejs', { messages: messages })
})

// Show Create resource page
router.get('/new', (req, res) => {
    res.render('form.ejs', { messages: messages })
})

// Creating resource 
router.post('/new', (req, res) => {

    // Store values of the form in variables
    const messageUser = req.body.messageUser;
    const messageText = req.body.messageText;
    // console.log(messageUser)
    // console.log(messageText)

    // Add values in 'database'
    messages.push({ text: messageText, user: messageUser, added: new Date() })
    // Send back to home page
    res.redirect('/')

})


module.exports = router;