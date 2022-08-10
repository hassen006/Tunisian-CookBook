  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js";


  const firebaseConfig = {
    apiKey: "AIzaSyAdWNkVhsAjc0e_rJY1_TBH7xSa5OputmA",
  authDomain: "hassen-project.firebaseapp.com",
  databaseURL: "https://hassen-project-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hassen-project",
  storageBucket: "hassen-project.appspot.com",
  messagingSenderId: "878164449856",
  appId: "1:878164449856:web:253cb159e15cea759fdda5",
  measurementId: "G-XQ83JHW5PP"
  };

  const app = initializeApp(firebaseConfig);
  const myForm = document.getElementById("LoginForm");

  function checkLogin(e){
    // ! DISABLE HARD REFRESH
    e.preventDefault();
     
    const email = document.getElementById('Username').value;
    const password = document.getElementById('Password').value;


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        localStorage.setItem("cnx","A");
        alert("Sign In succefully ! please press OK to continue ");
        window.location = 'addFood.html';

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        localStorage.setItem("cnx" , "H")
        console.log(errorMessage);
        alert("Password or email invalide ! ")
      });
    



  }

  myForm.addEventListener('submit', (e)=>checkLogin(e))