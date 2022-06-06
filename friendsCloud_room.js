var firebaseConfig = {
    apiKey: "AIzaSyBgmq6y2miten9yX7DzAevIkerPwYKiSY8",
    authDomain: "letschat-a8385.firebaseapp.com",
    databaseURL: "https://letschat-a8385-default-rtdb.firebaseio.com",
    projectId: "letschat-a8385",
    storageBucket: "letschat-a8385.appspot.com",
    messagingSenderId: "225615674821",
    appId: "1:225615674821:web:1b2aea02bbe71122849fac",
    measurementId: "G-Q387TJ8CLW"
  };
  
 
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);
    window.location = "friendsCloud_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;


   });});}
getData();

function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "friendsCloud_page.html";
      }
