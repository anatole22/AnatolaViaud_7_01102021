const express = require('express');
const app = express();
const path = require("path")
const bodyParser = require('body-parser');
const auth = require("./middleware/auth")

// recuperation de Helmet (sécurise les appli Express en définissant divers en-têtes HTTPP, protège contre les failles XSS//
const helmet = require('helmet');
const cors = require('cors');

//environnement variables//
require('dotenv').config()

const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/user")
const messageRoutes = require("./routes/message")
const commentRoutes = require("./routes/comment")



//DB connection//
require("./Database/dbConnexion");


/* CROSS ORIGIN RESOURCE SHARING CORS*/
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});


/* .json - méthode de l'objet bodyParser qui transforme le corps de la requête en objet JS*/
app.use(bodyParser.json());

app.use(helmet());
app.use(cors());

//  ENDPOINTS CHEMIN D'ACCES /
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use("/api/auth", authRoutes)
app.use("/api/users", auth, userRoutes)
app.use("/api/messages", auth, messageRoutes)
app.use("/api/comments", auth, commentRoutes)

module.exports = app