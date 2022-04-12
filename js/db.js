function onSubmit(evt){
    evt.preventDefault();
    return false
    
  }

  function test() {
      alert('hello')
  }
  
  console.log('Database' ,db)
function contactUs() {
    var full_name = document.getElementById('full_name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var phone_number = document.getElementById('phone_number').value;
    var textarea = document.getElementById('textarea').value;
    let db = firebase.firestore()
    db.collection("users").add({
       full_name : full_name,
       email : email,
       subject : subject,
       phone_number : phone_number,
       textarea : textarea
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        full_name = document.getElementById('full_name') = "";
        email = document.getElementById('email') = "";
        subject = document.getElementById('subject') = "";
        phone_number = document.getElementById('phone_number') = "";
        textarea = document.getElementById('textarea') = "";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
}
