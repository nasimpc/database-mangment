const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const sequelize = require('./util/database');

var cors = require('cors');

const app = express();

app.use(cors());

const expenseRoutes = require('./routes/expense');
const companyRoutes = require('./routes/company');
const candyRoutes = require('./routes/candy');


app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/expense', expenseRoutes);
app.use('/company', companyRoutes);
app.use('/candy', candyRoutes);

sequelize
    //.sync({ force: true })`

    .sync()
    .then(result => {
        // console.log(result);
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });

