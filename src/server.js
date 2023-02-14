const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    return res.send('HI')
})

const port = process.env.PORT || 8080

app.listen( port,()=> {
    console.log('running')
})