
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBOAjEArXit5zNMOOLaG0mog-rWAZb1W5o",
      authDomain: "kwitter-website-8e4ea.firebaseapp.com",
      databaseURL: "https://kwitter-website-8e4ea-default-rtdb.firebaseio.com",
      projectId: "kwitter-website-8e4ea",
      storageBucket: "kwitter-website-8e4ea.appspot.com",
      messagingSenderId: "965993171615",
      appId: "1:965993171615:web:6a72f50dd1bf5d599030aa"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";
    function addRoom(){
          room_name = document.getElementById("room_name").value;
          
          firebase.database().ref("/").child(room_name).update({
              purpose : "Adding Room Name"
          });
          localStorage.setItem("room_name", room_name);
          window.location = "kwitter_page.html";
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log(Room_names);
       available_room_names = "<div class='room_name' id='"+Room_names+"' onclick='redirect_to_room(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML += available_room_names;
      //End code
      });});}
getData();
function redirect_to_room(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html"
}
function log_out(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}