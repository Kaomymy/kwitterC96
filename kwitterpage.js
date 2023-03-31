const firebaseConfig = {
    apiKey: "AIzaSyDZ9pveVqK92qsn4k1qcvSVYTrSLqp9RbA",
    authDomain: "vamosconversar-ce6f9.firebaseapp.com",
    projectId: "vamosconversar-ce6f9",
    storageBucket: "vamosconversar-ce6f9.appspot.com",
    messagingSenderId: "122244969685",
    appId: "1:122244969685:web:4c1ee9b9df48c6f395de5c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  userName = localStorage.getItem("userName"); 
  roomName = localStorage.getItem("roomName");
  function send (){
    msg = document.getElementById("msg").value; 
    firebase.database().ref(roomName).push({
         name:userName, 
         message:msg, 
         like:0 
        }); 
    document.getElementById("msg").value = "";
  }
function getData() { firebase.database().ref("/"+roomName).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebaseMessageId = childKey;
    messageData = childData;
//Início do código

//Fim do código
 } });  }); }
getData();