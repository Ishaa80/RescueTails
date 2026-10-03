const express = require("express");
const app = express();
const route = require("./router/auth-router");
const RRoute = require("./router/rescuer-router");
const mongoose = require('mongoose');
const cors = require("cors");
const Rescuer = require("./model/RescuerSchema");

require('./db/connection');
app.use(cors());
app.use(express.json());

app.use(require("./router/auth-router"));
app.use("/api/admin",RRoute);


const PORT = 8000;
app.listen(PORT, () =>{
    console.log(`Server is running at port: ${PORT}`);
});
