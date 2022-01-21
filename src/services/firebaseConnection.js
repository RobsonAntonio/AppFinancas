import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyDKou9YsUH2jf4XKC1KFQqbZ4fpzg6E7N8",
    authDomain: "meuapp-3c3f6.firebaseapp.com",
    databaseURL: "https://meuapp-3c3f6-default-rtdb.firebaseio.com",
    projectId: "meuapp-3c3f6",
    storageBucket: "meuapp-3c3f6.appspot.com",
    messagingSenderId: "825466976626",
    appId: "1:825466976626:web:d70a8734bc037da34f85eb",
    measurementId: "G-R48Q5ZXBMB"
  };

 if(!firebase.apps.length){
     firebase.initializeApp(firebaseConfig);
 }

 export default firebase;