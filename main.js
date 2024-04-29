const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Ja')
})

app.listen(80, () => {
    console.log('Server started at port 80')
})
