const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const app = express()
const PORT = 3010 || process.env.PORT;

app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../', 'public')));



app.get('/', (req, res) => {
    res.status(200).send({
        hello: 'world'
    })
})
app.listen(PORT, () => {
    console.log('server is running...')
})