var config = {
    apiKey: "AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",
    authDomain: "guideology-cc2b5.firebaseapp.com",
    databaseURL: "https://guideology-cc2b5-default-rtdb.firebaseio.com",
    projectId: "guideology-cc2b5",
    storageBucket: "guideology-cc2b5.appspot.com",
    messagingSenderId: "130250364586",
    appId: "1:130250364586:web:2e9d6427edb6a9e67ce2d3",
    measurementId: "G-RSC5CNSPEG"
  };
  
  firebase.initializeApp(config);
  var db = firebase.database();
  
var referAFriendiewForm = document.getElementById('referAFriend');
var member1_Name   = document.getElementById('member1_name');
var member1_Email    = document.getElementById('member1_email');
var member1_Phone   = document.getElementById('member1_phone');
var member2_Name   = document.getElementById('member2_name');
var member2_Email    = document.getElementById('member2_email');
var member2_Phone   = document.getElementById('member2_phone');
var hiddenId = document.getElementById('hiddenId');

referAFriendiewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!member1_Name.value || !member1_Email.value || !member1_Phone.value || !member2_Name.value || !member2_Email.value || !member2_Phone.value  ) return null

  var id = hiddenId.value || Date.now()

  db.ref('referafriend/' + id).set({
    member1_Name : member1_Name.value,
    member1_Email: member1_Email.value,
    member1_Phone: member1_Phone.value,
    member2_Name: member2_Name.value,
    member2_Email: member2_Email.value,
    member2_Phone: member2_Phone.value,
  });
  document.getElementById('referafreiend_para').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
    member1_Name.value= "";
    member1_Email.value= "";
    member1_Phone.value= "";
    member2_Name.value= "";
    member2_Email.value= "";
    member2_Phone.value= "";
    hiddenId.value = '';
});