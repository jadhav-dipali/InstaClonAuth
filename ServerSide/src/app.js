const express = require("express");
require ("./db/connection")
require("dotenv").config();
const router = require("./router/Insta");
const routerAuth = require("./router/authRouter")
const PORT = process.env.PORT
const app = express();
const cors = require("cors")

app.use(cors());

app.use(express.json());
app.use(router);
app.use(routerAuth)


app.listen(PORT,()=>{
    console.log(`listening the port ${PORT}`)
})