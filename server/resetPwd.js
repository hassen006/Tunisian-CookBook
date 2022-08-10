import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js";
import { getAuth,sendPasswordResetEmail } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

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

//const db = getDatabase(app);
const auth = getAuth();

const resetPwd = document.getElementById('resetPwd');
const myModal = document.getElementById('myModal');

function resetPassword(e) {
    e.preventDefault();
    const email = document.getElementById('reseted').value;

    console.log(email);
    if (email.trim().length >1) {
        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('A link has been sended to your email, check it ...');
            
        })
        .catch((err)=>{
            alert('try again, an error happened')
        })
    }else{
        alert('Please enter your email !!');
    }

    
}

resetPwd.addEventListener('submit', (e)=>resetPassword(e));