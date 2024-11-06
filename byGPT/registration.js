// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, set, ref, push, get } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA63JPR_aDdfXFRDcaShgSmczwvdDIL5zw",
  authDomain: "webproject-65316.firebaseapp.com",
  databaseURL: "https://webproject-65316-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "webproject-65316",
  storageBucket: "webproject-65316.firebasestorage.app",
  messagingSenderId: "854978174033",
  appId: "1:854978174033:web:6ce725bb2c6f7fd651ac70"
};

// Initialize Firebase and make db and auth available globally
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

window.onload = function () {
  // Register Button Event Listener
  const registerButton = document.getElementById("registerButton");
  if (registerButton) {
    registerButton.addEventListener("click", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
      }

      // Register user with Firebase Authentication
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          alert("Account created successfully!");

          // After successful registration, write additional user data to Firebase Database
          const username = document.getElementById('full_name').value;
          const age = document.getElementById('age').value;
          const phone = document.getElementById('phone').value;
          const location = document.getElementById('location').value;
          const skill = document.getElementById('skill').value;
          const experience = document.getElementById('experience').value;
          const availability = docume
