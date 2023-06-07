// const express = require('express');

// const app = express();

// const bodyParser = require('body-parser');
// const Cors = require('cors');

// const sequelize = require('./util/database');

// const routes = require('./router/routes');

// app.use(Cors());

// app.use(bodyParser.urlencoded({extended:false}));

// app.use(routes);


// sequelize.sync().then(res=>{
//     app.listen(3000);
// }).
// catch(err=>console.log(err));

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const Cors = require('cors');
const sequelize = require('./util/database');
const formroute =require('./router/routes');

app.use(Cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(formroute);

sequelize.sync().then(res=>app.listen(3000)).
catch(err=>console.log(err));
