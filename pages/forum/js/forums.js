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

  console.log('db', db)
  
  // CREATE REWIEW
  
 // CREATE REWIEW

var forumForm = document.getElementById('forumForm');
var title   = document.getElementById('title');
var program    = document.getElementById('program');
var category   = document.getElementById('category');
var desc   = document.getElementById('desc');
var hiddenId   = document.getElementById('hiddenId');


forumForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!title.value || !program.value || !category || !desc) return null

  var id = hiddenId.value || Date.now()

db.ref('forum/' + id).set({
    title: title.value,
    program: program.value,
    category: category.value,
    desc: desc.value
  });
  
  title.value = '';
  program.value  = '';
  category.value = '';
  desc.value = '';
  hiddenId.value = '';
});

// console.log(`Forum Data : ${db}`)

// READ REVEIWS

// var reviews = document.getElementById('reviews');
// var reviewsRef = db.ref('/reviews');

// reviewsRef.on('child_added', (data) => {
//   var li = document.createElement('li')
//   li.id = data.key;
//   li.innerHTML = reviewTemplate(data.val())
//   reviews.appendChild(li);
//   li.classList.add('card', 'ml-5', 'mr-2')
// });

// reviewsRef.on('child_changed', (data) => {
//   var reviewNode = document.getElementById(data.key);
//   reviewNode.innerHTML = reviewTemplate(data.val());
// });

// reviewsRef.on('child_removed', (data) => {
//   var reviewNode = document.getElementById(data.key);
//   reviewNode.parentNode.removeChild(reviewNode);
// });

// reviews.addEventListener('click', (e) => {
//   var reviewNode = e.target.parentNode

//   // UPDATE REVEIW
//   if (e.target.classList.contains('edit')) {
//     title.value = reviewNode.querySelector('.title').innerText;
//     program.value  = reviewNode.querySelector('.program').innerText;
//     hiddenId.value = reviewNode.id;
//   }

//   // DELETE REVEIW
//   if (e.target.classList.contains('delete')) {
//     var id = reviewNode.id;
//     db.ref('reviews/' + id).remove();
//   }
// });
//      // Reviews Stars
//      const reviewsStarts = () => {
//         const container = document.querySelector('.select_ratings');
//         const items = container.querySelectorAll('.select_ratings-item')
//         container.onclick = e => {
//         const elClass = e.target.classList;
//         // change the select_ratings if the user clicks on a different star
//         if (!elClass.contains('active')) {
//         items.forEach( // reset the active class on the star
//         item => item.classList.remove('active')
//         );
//         console.log(e.target.getAttribute("data-rate", 'DataRate_Stars'));
//         elClass.add('active'); // add active class to the clicked star
//         }
//         };
//      }
   

//   function reviewTemplate({title,program}) {
 
//     return `
//           <div class="card-body pt-0 mt-5">
//              <div class="widget-49">
//                 <div class="widget-49-title-wrapper">
//                    <div class="widget-49-meeting-info" style="display: flex; flex-direction: row;">
//                       <h4 class="card-title title" style="margin-left: 0px; margin-top: -20px !important;">${title}</h4>
                     
//                    </div>
//                      <div class="student_reviewa">
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                       <span class="fa fa-star checked"></span>
//                    </div>
//                 </div>
//                 <p style="text-align: left; margin-top: 0px !important;" class="card-text fst-box-desc program">${program}</p>
//              </div>
//           </div>
      
     
//     `
//   };
  

//   <div style="display: flex; flex-direction: row" class="mb-5">
//   <button class='edit'style="background: none; border: none; font-size: 14px; outline: none; color: green;">Edit</button> 
//   <button class='delete ml-3'style="background: none; border: none; font-size: 14px; outline: none; color: red;">Delete</button>
//   </div>

{/* <button class='delete'>Delete</button>
<button class='edit'>Edit</button> */}