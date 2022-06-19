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


  // Stars Numbers Start here ###############################//

  const container = document.querySelector('.select_ratings');
  const items = container.querySelectorAll('.select_ratings-item')
  container.onclick = e => {
  const elClass = e.target.classList;
  // change the select_ratings if the user clicks on a different star
  if (!elClass.contains('active')) {
  items.forEach( // reset the active class on the star
  item => item.classList.remove('active')
  );
  console.log('Stars Numbers ==>>>', e.target.getAttribute("data-rate"));
  elClass.add('active'); // add active class to the clicked star
  }
  };

  // Stars Numbers end here

//   console.log('db', db)
  
  // CREATE REWIEW
  
 // CREATE REWIEW

var reviewForm = document.getElementById('reviewForm');
var fullName   = document.getElementById('fullName');
var message    = document.getElementById('message');
var hiddenId   = document.getElementById('hiddenId');

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!fullName.value || !message.value) return null

  var id = hiddenId.value || Date.now()

  db.ref('reviews/' + id).set({
    fullName: fullName.value,
    message: message.value
  });
  document.getElementById('reviewsSubmitted').innerHTML = `Review has been submitted <i class="bi bi-check-circle" style="color:green"></i>`
  fullName.value = '';
  message.value  = '';
  hiddenId.value = '';
});

// READ REVEIWS

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

  // UPDATE REVEIW
  if (e.target.classList.contains('edit')) {
    fullName.value = reviewNode.querySelector('.fullName').innerText;
    message.value  = reviewNode.querySelector('.message').innerText;
    hiddenId.value = reviewNode.id;
  }

  // DELETE REVEIW
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