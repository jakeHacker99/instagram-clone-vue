
// dependencies


const express = require('express')
const admin = require('firebase-admin');



// config -firebase

const serviceAccount = require('./serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();


// config express


const app = express()


// end point -posts

app.get('/posts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let posts = []
    db.collection('posts').orderBy('date', 'desc').get().then(snapshot => {
        snapshot.forEach((doc) => {
            posts.push(doc.data())
            
    })
    response.send(posts)

});
// end point -createPost

app.post('/createPost', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  response.send(request.headers)


});


})

app.listen( process.env.PORT|| 3000)
