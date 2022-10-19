import * as firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyDk6iI5F-la_-zP8VMwtNMZ4LYfj1K_VsM",
  authDomain: "my-el-shop.firebaseapp.com",
  databaseURL: "https://my-el-shop-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "my-el-shop",
  storageBucket: "my-el-shop.appspot.com",
  messagingSenderId: "402654403432",
  appId: "1:402654403432:web:a65e0a6690d7ddc95a94dd",
  measurementId: "G-3RBE7KK7D8"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 
export default firebase  