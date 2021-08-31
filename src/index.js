const express = require('express')

const app = express()
const PORT = 3010 || process.env.PORT;
app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).send({
        hello: 'world'
    })
})
app.listen(PORT, () => {
    console.log('server is running...')
})