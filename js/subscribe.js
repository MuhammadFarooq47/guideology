// var config = {
//     apiKey: "AIzaSyD5DMyubSCOcqQzqFWboc7NziRYclrdOxg",
//     authDomain: "guideology-cc2b5.firebaseapp.com",
//     databaseURL: "https://guideology-cc2b5-default-rtdb.firebaseio.com",
//     projectId: "guideology-cc2b5",
//     storageBucket: "guideology-cc2b5.appspot.com",
//     messagingSenderId: "130250364586",
//     appId: "1:130250364586:web:2e9d6427edb6a9e67ce2d3",
//     measurementId: "G-RSC5CNSPEG"
//   };
  
//   firebase.initializeApp(config);
//   var db = firebase.database();
// affiliateProgram Start here
var subscribeForm = document.getElementById('subscribeForm');


const subscribeNow = () => {
    var subscribe = document.getElementById('subscribe').value;
    var hiddenId = document.getElementById('hiddenId').value;

console.log(`subscriber ==>>>> ${subscribe}`)
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
