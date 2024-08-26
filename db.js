const express = require('express');
const app = express();
const port = 3000;
const userEvents = require('./Routes/evenement')
const userImage = require('./Routes/image')
const userId = require('./Routes/user')
const insertUserRouter = require('./Routes/insertUser')
const mysql = require('mysql2');

const db =require('./config/ConnectDatabase')


// Utilisation du middleware pour parser le JSON
app.use(express.json());

app.use("/login",userId)
app.use("/events",userEvents)
app.use("/image",userImage)
app.use("/insertUser",insertUserRouter)



app.listen(port, () => {
  console.log(`Serveur Express.js démarré sur le port ${port}`);
});
