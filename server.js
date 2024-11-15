// impoter le protocle http
// require() permet d'importer le package (module)
//ici le package importé est http
// import { createServer } from 'http';
const http = require ("http");
const app = require ('./app');

const numPort = 3002;

app.set("port", numPort);
const server = http.createServer(app);

// Récupèrez l'heure ici
const date = new Date();

server.listen(numPort, () => {
    // Affichez l'heure

    //console.log(`Le serveur est activité au port : ${numPort}`);
    console.log(date.toLocaleDateString()," ",date.toLocaleTimeString());
});
//déclaration serveur en utilisant http
// ici le package impoté est http
//const server = createServer(( req, res)=> {
    //res.end("Bonjour, Je suis le serveur.");
//});
//le seveur est disponible sur le port 3000
//server.listen(3000)


// on va lancer le server !!
// sur GitBash, exécuter la commande node server
// Sur le navigateur web, tapez localhost: 3000
// c'est à dire dans chaque ordinateur, nodeJs crée un server local
// Et ce server local est exposé au port 3000
// Que retenir du bug rencontré par SAID ?
// TEL qu'il figure dans le fichier package.jSon
// a l'éxécution de la commande node
// node.js lance le fichier javascript assicié à "main" dans package.json

/*
===== EN RESUMER =====
le projet node est initiliser avec la commande "node init"
*/