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
// affiliateProgram Start here
var affiliateProgram = document.getElementById('affiliateProgram');
var fullName = document.getElementById('fullName');
var email = document.getElementById('email');
var phone_number = document.getElementById('phone_number');
var university = document.getElementById('university');
var facebook = document.getElementById('facebook');
var insta = document.getElementById('insta');
var tiktok = document.getElementById('tiktok');
var hiddenId = document.getElementById('hiddenId');




affiliateProgram.addEventListener('submit', (e) => {
  e.preventDefault();





  if (!fullName .value || !email .value || !phone_number .value || !university .value || !facebook .value || !insta .value || !tiktok ) return null
   

    var id = hiddenId.value || Date.now()

  db.ref('affiliateProgram/' + id).set( {
    fullName : fullName.value,
    email: email.value,
    phone_number: phone_number.value,
    university: university.value,
    facebook: facebook.value,
    insta: insta.value,
    tiktok: tiktok.value,
  });
  document.getElementById('affiliateProgram_para').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
  fullName.value= "";
  email.value= "";
  phone_number.value= "";
  university.value= "";
  facebook.value= "";
  insta.value= "";
  tiktok.value= "";
  hiddenId.value= '';
  
  

});


var subscribeForm = document.getElementById('subscribeForm');


const subscribeNow = () => {
    var subscribe = document.getElementById('subscribe').value;
    var hiddenId = document.getElementById('hiddenId').value;

console.log(`subscriber ===>>>> ${subscribe}`)
//   e.preventDefault();

const subs = {
    subscribe : subscribe,
}

  if (subscribe !== ""){
    
  var id = hiddenId || Date.now()

  db.ref('subscribers/' + id).set(subs);
  document.getElementById('subscribe_para').innerHTML = `"Thanks for Subscribe Guideology <i class="bi bi-hand-thumbs-up" style="color:green"></i>"`
  subscribe= "";
  hiddenId = '';
  
}else{
    document.getElementById('subscribe_para').innerHTML = `"Empty email/getting server error <i class="bi bi-x-circle" style="color:red"></i>"`
}

};
