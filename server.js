const express = require('express')
const app = express()

app.get('/', (req, res)=> {
    return res.send('HI')
})

app.listen( 3000,()=> {
    console.log('running')
})