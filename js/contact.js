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
// Contactus Start here
var contactUs = document.getElementById('contactUs');
var contactus_fullName = document.getElementById('contact_fullName');
var contactus_email = document.getElementById('contact_email');
var contactus_subject = document.getElementById('contact_subject');
var contactus_phone_number = document.getElementById('contact_phoneNumber');
var contactus_textarea = document.getElementById('contact_textarea');
var hiddenId = document.getElementById('hiddenId');

contactUs.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!contactus_fullName.value || !contactus_email.value || !contactus_subject.value || !contactus_phone_number.value || !contactus_textarea.value ) return null

  var id = hiddenId.value || Date.now()

  db.ref('contactus/' + id).set({
    contactus_fullName : contactus_fullName.value,
    contactus_email: contactus_email.value,
    contactus_subject: contactus_subject.value,
    contactus_phone_number: contactus_phone_number.value,
    contactus_textarea: contactus_textarea.value,
  });
  document.getElementById('contact_subumit').innerHTML = `Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>`
    contactus_fullName.value= "";
    contactus_email.value= "";
    contactus_subject.value= "";
    contactus_phone_number.value= "";
    contactus_textarea.value= "";
    hiddenId.value = '';
});
