// import du frameword ExpressJs
// import express from "express";
const express = require ("express");
// on crée l'application Expressjs
const app = express();

// le server retourne la réponse ci-dessous peu importe la requête
app.use((req,res) => {
    res.json({message : "Votre messagea bien étai envoyer"})
});
   
app.get("/", (req, res) => {
    res.end("Bienvenu dans le server.");
});

// route pour /acceuil
app.get("/accueil", (req, res) => {
    res.end("Vous etes à l'accueil.");
});

// route / apropos
app.get("/services", (req, res) => {
    res.end(".");
});

// créer une route avec la méthode POST
app.get("/post", (req, res) => {
    res.end("voila post");
});

app.post("/message", (req, res) => {
    res.end("Salut");
});

app.put("/contact", (req, res) => {
    res.end("Youssouf");

});

//
app.delete("/supprimer", (req; res) => {
    res.end("ça va");
});


module.exports = app;

// app.use (req, res) => {
//      res.writeHead(200, {"content-type": "text/html"});
//      res.end("Le serveur est lancer");
// });
// notre serveur Node est maintenant capable de gérer les requêtes 
// et de retourner une réponse
//app.use((req, res) => {
  // res.end("Bonjour, je le nouveau serveur!");
//});



// On exporte notre application
// pour la rendre visible par les autres fichiers du dossier du projet
//moudule.exports = app;
/*
app.get("/", (req, res) => {
    res.end("<h1>Je viens de lancer mon serveur !<h1>");
});

app.get("/bonjour", (req, res) => {
    res.end("<h1>Je viens de mettre un bonjour !<h1>");
});

app.get("/cuisine", (req, res) => {
    res.end("<h1>Vous etes dans la cuisine !<h1>");
});

app.get("/bangalo", (req, res) => {
    res.end("<h1>Vous etes dans le bangalo !<h1>");
});

app.listen(3001, () => {
    console.log("serveur au port 3001")
});
*/