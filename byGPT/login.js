// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";

import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63JPR_aDdfXFRDcaShgSmczwvdDIL5zw",
  authDomain: "webproject-65316.firebaseapp.com",
  projectId: "webproject-65316",
  storageBucket: "webproject-65316.firebasestorage.app",
  messagingSenderId: "854978174033",
  appId: "1:854978174033:web:6ce725bb2c6f7fd651ac70",
};
debugger;
// Initialize Firebase
const app = initializeApp(firebaseConfig);



const submit = document.getElementById("loginButton");

submit.addEventListener("click", function (event) {
  
  event.preventDefault();

  const password = document.getElementById("password").value;
  const email = document.getElementById("email").value;

  alert("jai shri ram");

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    debugger;
    // Signed in 
    const user = userCredential.user;
    alert("Account logined!!");
    window.location.href = "homePage.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
});
debugger;
