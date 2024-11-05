// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase, set, ref, push } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8ln0VdUsa9XoSdg5Qw2xFQukkCwB6fI4",
  authDomain: "realtime-c041b.firebaseapp.com",
  projectId: "realtime-c041b",
  storageBucket: "realtime-c041b.appspot.com", // Corrected storage bucket
  messagingSenderId: "394549225076",
  appId: "1:394549225076:web:49831e2f4b3dcfa1c0d321"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function writeDataInDB(username, email, password) {
  // Generate a unique ID
  const newUserRef = push(ref(db, 'users'));
  
  // Write data using the unique key
  set(newUserRef, {
    FullName: username,
    Email: email,
    Password: password
  }).then(() => {
    console.log('Data saved successfully');
  }).catch((error) => {
    console.error("Error writing to DB:", error);
  });
}

document.getElementById('submit-button').addEventListener('click', (e) => {
  e.preventDefault(); // Prevents the form from refreshing the page if it's in a form element

  // Fetch values inside the event listener to get the latest inputs
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  writeDataInDB(username, email, password);

  console.log('Data submission initiated');
});
