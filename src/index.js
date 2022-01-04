const express = require('express')
const cors = require('cors')
const path = require('path')
const morgan = require('morgan')
const dbConnection = require('./config/db.js');



const app = express()
const PORT = 3010;

// Mongodb connection
dbConnection();

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


app.use((req, res, next) => {
    const error = new Error('404 Page Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    if (error.status === 404) {
        res.status(404).json({
            error
        });
    } else {
        res.status(500).json({
            error: '500'
        });
    }
    next();
});


app.listen(PORT, () => {
    console.log('server is running...')
})