import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,onValue,ref } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

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
  const db = getDatabase(app);  
  

  function getFoods(){
    const allFood = ref(db,"recipes/");
    onValue(allFood,(snapshot)=>{
        const data = snapshot.val();
        var keys = Object.keys(data);
        const colorButton = ["btn-primary","btn-secondary","btn-success","btn-danger","btn-warning","btn-info"];

        for(let i = 0 ; i < keys.length ; i++){
            var item = keys[i];
            var cin = data[item].cin;
            var recName = data[item].recName;
            var recDesc = data[item].recDesc;
            var recDescShort = recDesc.substring(0, 200);
            var recTown = data[item].recTown;
            var recPhotoUrl = data[item].recPhotoUrl;
            var randomColor = Math.floor(Math.random() * colorButton.length);

            var el = document.createElement("div");
            el.innerHTML =
           `<div class="card mb-3 food col ">
            <img class="card-img-top" style="max-width: 400px; align-self : center" src="${recPhotoUrl}" alt="">
          <div class="card-body">
               <h5 class="card-title text-center">${recName}</h5>
                <p class="card-text">${recDescShort} ...</p>
                
                

<div>
                <button type="button" class="btn ${colorButton[randomColor]}" data-toggle="modal" data-target="#exampleModal${i}">
                more Info...
                </button>
              
              
              <div class="modal fade" id="exampleModal${i}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">${recName}</h5>  
                    </div>
                    <div class="modal-body">
                    ${recDesc}
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      
                    </div>
                  </div>
                </div>
              </div>
</div>
                
            </div>
        </div>` ;

      


document.getElementById('search-result').appendChild(el);
        } 
        
    })
  }



getFoods();




