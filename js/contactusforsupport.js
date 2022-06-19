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

// Contactus For Support Start here
var contactusforSupport = document.getElementById('contactusforSupport');
var full_name = document.getElementById('full_name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var phone_number = document.getElementById('phone_number');
var textarea = document.getElementById('textarea');
var hiddenId = document.getElementById('hiddenId');

contactusforSupport.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!full_name.value || !email.value || !subject.value || !phone_number.value || !textarea.value ) return null

  var id = hiddenId.value || Date.now()

  db.ref('contactusforSupport/' + id).set({
    full_name : full_name.value,
    email: email.value,
    subject: subject.value,
    phone_number: phone_number.value,
    textarea: textarea.value,
  });
  document.getElementById('contactusforSupport_para').innerHTML = `"Your form has been submitted <i class="bi bi-check-circle" style="color:green"></i>"`
    full_name.value= "";
    email.value= "";
    subject.value= "";
    phone_number.value= "";
    textarea.value= "";
    hiddenId.value = '';
});



// function contactUs() {
//     var full_name = document.getElementById('full_name').value;
//     var email = document.getElementById('email').value;
//     var subject = document.getElementById('subject').value;
//     var phone_number = document.getElementById('phone_number').value;
//     var textarea = document.getElementById('textarea').value;
//     let db = firebase.firestore()
//     db.collection("users").add({
//        full_name : full_name,
//        email : email,
//        subject : subject,
//        phone_number : phone_number,
//        textarea : textarea
//     })
//     .then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//         full_name = document.getElementById('full_name') = "";
//         email = document.getElementById('email') = "";
//         subject = document.getElementById('subject') = "";
//         phone_number = document.getElementById('phone_number') = "";
//         textarea = document.getElementById('textarea') = "";
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// }



// Refer A Friend Start here..............###################################/////////////////

// CREATE DATA





// READ DATA

var reviews = document.getElementById('reviews');
var reviewsRef = db.ref('/reviews');

reviewsRef.on('child_added', (data) => {
  var li = document.createElement('li')
  li.id = data.key;
  li.innerHTML = reviewTemplate(data.val())
  reviews.appendChild(li);
  li.classList.add('card', 'ml-5', 'mr-2')
});

reviewsRef.on('child_changed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.innerHTML = reviewTemplate(data.val());
});

reviewsRef.on('child_removed', (data) => {
  var reviewNode = document.getElementById(data.key);
  reviewNode.parentNode.removeChild(reviewNode);
});

reviews.addEventListener('click', (e) => {
  var reviewNode = e.target.parentNode

  // UPDATE DATA
  if (e.target.classList.contains('edit')) {
    fullName.value = reviewNode.querySelector('.fullName').innerText;
    message.value  = reviewNode.querySelector('.message').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE DATA
  if (e.target.classList.contains('delete')) {
    var id = reviewNode.id;
    db.ref('reviews/' + id).remove();
  }
});
     // Reviews Stars
     const reviewsStarts = () => {
        const container = document.querySelector('.select_ratings');
        const items = container.querySelectorAll('.select_ratings-item')
        container.onclick = e => {
        const elClass = e.target.classList;
        // change the select_ratings if the user clicks on a different star
        if (!elClass.contains('active')) {
        items.forEach( // reset the active class on the star
        item => item.classList.remove('active')
        );
        console.log(e.target.getAttribute("data-rate", 'DataRate_Stars'));
        elClass.add('active'); // add active class to the clicked star
        }
        };
     }
   

  function reviewTemplate({fullName,message}) {
 
    return `
          <div class="card-body pt-0 mt-5">
             <div class="widget-49">
                <div class="widget-49-title-wrapper">
                   <div class="widget-49-meeting-info" style="display: flex; flex-direction: row;">
                      <h4 class="card-title fullName" style="margin-left: 0px; margin-top: -20px !important;">${fullName}</h4>
                     
                   </div>
                     <div class="student_reviewa">
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                      <span class="fa fa-star checked"></span>
                   </div>
                </div>
                <p style="text-align: left; margin-top: 0px !important;" class="card-text fst-box-desc message">${message}</p>
             </div>
          </div>
      
     
    `
  };
  

//   <div style="display: flex; flex-direction: row" class="mb-5">
//   <button class='edit'style="background: none; border: none; font-size: 14px; outline: none; color: green;">Edit</button> 
//   <button class='delete ml-3'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//   </div>

{/* <button class='delete'>Delete</button>
<button class='edit'>Edit</button> */}