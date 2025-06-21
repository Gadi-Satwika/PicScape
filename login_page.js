// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBS8LkLk0edtsVXp54L8Q6IUVhWSKSUeK4",
    authDomain: "login-page-ace14.firebaseapp.com",
    projectId: "login-page-ace14",
    storageBucket: "login-page-ace14.firebasestorage.app",
    messagingSenderId: "1099176902536",
    appId: "1:1099176902536:web:0ddf7ce1e77f365506843d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();


const submit = document.getElementById('submit')
submit.addEventListener("click", function(event) {
    event.preventDefault()

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            alert('Logging In..');
            window.location.href = 'home_page.html';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
})

document.getElementById("showSignupPage").addEventListener("click", function(event) {
    event.preventDefault()
    window.location.href ="Browse_Image.html";
});
