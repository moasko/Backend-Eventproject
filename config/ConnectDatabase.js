const mysql = require('mysql2');
const express = require('express');

// Configuration de la connexion MySQL


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'eventdatabase'
  });
  
  // Connexion à la base de données
  db.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à MySQL:', err.stack);
      return;
    }
    console.log('Connecté à la base de données MySQL');
  });
  

  module.exports = db ;