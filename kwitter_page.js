//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");
    function send(){
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0

          });
          document.getElementById("msg").value ="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_tag = "<h4>"+name+"<img src='tick.png' class='user_tick'></h4>";
          message_tag = "<h4 class='message_h4'>"+message+"</h4>";
          like_tag = "<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
          span_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";
          altogether = name_tag+message_tag+like_tag+span_tag;
          document.getElementById("output").innerHTML += altogether;

//End code
      } });  }); }
getData();
function updateLike(firebase_message_id) {
       console.log("clicked on like button - " + firebase_message_id);
        button_id = firebase_message_id;
         likes = document.getElementById(button_id).value;
          updated_likes = Number(likes) + 1;
      console.log(updated_likes);
       firebase.database().ref(room_name).child(firebase_message_id).update({ like : updated_likes }); }
       function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }