import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCfldUDa6RCJzfJzeh-2DUxhlkA6u9MvYw",
    authDomain: "projectmanagement-32ab8.firebaseapp.com",
    projectId: "projectmanagement-32ab8",
    storageBucket: "projectmanagement-32ab8.appspot.com",
    messagingSenderId: "975166640208",
    appId: "1:975166640208:web:c1bc0b6887da5f417b4155"
  };

  //firebase init
  firebase.initializeApp(firebaseConfig)
//   init service
const projectFirestore = firebase.firestore()
// auth
const projectAuth = firebase.auth()
//init firebase storage
const projectStorage = firebase.storage()
// setup timestamps
const timestamp = firebase.firestore.Timestamp

export {projectFirestore,projectAuth,projectStorage,timestamp}