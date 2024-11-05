// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
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
window.onload = function () {
  // Initialize Firebase and Database
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const auth = getAuth();

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

          createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                  alert("Account created successfully!");
              })
              .catch((error) => {
                  console.error("Error:", error.message);
                  alert(error.message);
              });
      });
  }

  // Submit Button Event Listener for Database Write
  const submitButton = document.getElementById("registerButton");
  if (submitButton) {
      submitButton.addEventListener("click", (e) => {
          e.preventDefault();
          
          // Get form data
          const username = document.getElementById('full_name').value;
          const email = document.getElementById('email').value;
          const password = document.getElementById('password').value;
          const age = document.getElementById('age').value;
          const phone = document.getElementById('phone').value;
          const location = document.getElementById('location').value;
          const skill = document.getElementById('skill').value;
          const experience = document.getElementById('experience').value;
          const availability = document.getElementById('availability').value;
          const relocate = document.getElementById('relocate').checked;

          writeDataInDB(username, email, password, age, phone, location, skill, experience, availability, relocate);
      });
  }
};

function writeDataInDB(username, email, password, age, phone, location, skill, experience, availability, relocate) {
  const db = getDatabase();
  const newUserRef = push(ref(db, 'users'));

  set(newUserRef, {
      FullName: username,
      Email: email,
      Password: password,
      Age: age,
      Phone: phone,
      Location: location,
      Skill: skill,
      Experience: experience,
      Availability: availability,
      Relocate: relocate
  })
  .then(() => {
      console.log('Data saved successfully to the database');
  })
  .catch((error) => {
      console.error("Error writing to DB:", error);
  });
}
