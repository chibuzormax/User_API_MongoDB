const express = require('express');
const { json } = require('express');
const connect = require('./config/dB');
const userRoute = require('./router/userRoutes');

connect();


const app = express();
app.use(json());

app.use('/user', userRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Serving at port ${PORT}`));