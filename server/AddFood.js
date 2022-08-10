import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const formulaire = document.getElementById('add-food-form') ;
formulaire.addEventListener('submit',(e)=>sendRecipe(e));

function sendRecipe(e){
    e.preventDefault();
    var recName = document.getElementById('food-name').value;
    var cin = document.getElementById('user-cin').value;
    var recDesc = document.getElementById('food-desc').value ;
    var recTown = document.getElementById('food-location').value ;
    var recPhotoUrl = document.getElementById('food-pic').value ;


    if (recName.trim().length >1 && 
        cin.trim().length >1 &&
        recDesc.trim().length >1 &&
        recTown.trim().length >1 &&
        recPhotoUrl.trim().length >1 ) {
            PostReciepeInDB(recName,cin,recDesc,recTown,recPhotoUrl);
            formulaire.reset();
            window.alert('Food added successfully ...');

        
    } else {
     
        window.alert('Please fill all information food !!');
    }
    
}

function PostReciepeInDB(recName,cin,recDesc,recTown,recPhotoUrl){
    set(ref(db,'recipes/'+cin),{
        recName : recName,
        recDesc : recDesc,
        cin : cin ,
        recTown : recTown ,
        recPhotoUrl : recPhotoUrl
    })
}