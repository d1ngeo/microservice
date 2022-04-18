const express = require("express")
const router = require("./routes")
const app = express()
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors")

app.use(cors())
app.set("port", process.env.PORT)

app.use("/", router);

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(cookieParser());
app.use(morgan('dev'));




module.exports = app