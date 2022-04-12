function onSubmit(){
  return(
    false
  )
}

    function clickMe() {
        // program = document.getElementById("program").value;
        // full_name = document.getElementById('full_name').value;
        // phone_number = document.getElementById('phone_number').value;
        // email = document.getElementById('email').value;
        // username = document.getElementById('username').value;
        // password = document.getElementById('password').value;
    
        // console.log(`fnae: ${full_name} phone : ${phone_number} email : ${email} username : ${username} password : ${password}`)
        //          }
        alert('click')
    }
  
// console.log(firebase.database)



  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()
  
  // Set up our register function
  function register () {
    // Get all our input fields
    program = document.getElementById("program").value;
    full_name = document.getElementById('full_name').value;
    phone_number = document.getElementById('phone_number').value;
    email = document.getElementById('email').value;
    username = document.getElementById('username').value;
    password = document.getElementById('password').value;
  
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Incorrect!!')
      return
      // Don't continue running the code
    }
    if (validate_field(full_name) == false || validate_field(program) == false || validate_field(phone_number) == false || validate_field(username) == false) {
      alert('One or More Extra Field is Incorrect!!')
      return
    }
   
    // Move on with Auth
    auth.createUserWithEmailAndPassword( email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        full_name : full_name,
        username : username,
        email : email,
        program : program,
        phone_number : phone_number,
        // last_login : Date.now()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).set(user_data)
  
      // DOne
      alert('User Created Sucessfully!!')
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }

//   var ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });

var playersRef = firebase.database().ref("users/");

playersRef.on("child_added", function(data, prevChildKey) {
   var newPlayer = data.val();
   console.log("full_name: " + newPlayer.full_name);
//    console.log("age: " + newPlayer.age);
//    console.log("number: " + newPlayer.number);
//    console.log("Previous Player: " + prevChildKey);
});

  
  // Set up our login function
  function login () {
    // Get all our input fields
    username = newPlayer.username;
    email = document.getElementById('email').value;
    password = document.getElementById('password').value;
  
    console.log(`userName ======== ${username}`)
    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
      alert('Email or Password is Incorrect!!')
      return
      // Don't continue running the code
    }
  
    auth.signInWithEmailAndPassword(email, password)
    .then(function() {
      // Declare user variable
      var user = auth.currentUser
  
      // Add this user to Firebase Database
      var database_ref = database.ref()
  
      // Create User data
      var user_data = {
        last_login : Date.toString()
      }
  
      // Push to Firebase Database
      database_ref.child('users/' + user.uid).update(user_data)
  
      // DOne
      alert('User Logged In!!')
  
    })
    .catch(function(error) {
      // Firebase will use this to alert of its errors
      var error_code = error.code
      var error_message = error.message
  
      alert(error_message)
    })
  }
  
  
  
  
  // Validate Functions
  function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
      // Email is good
      return true
    } else {
      // Email is not good
      return false
    }
  }
  
  function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
      return false
    } else {
      return true
    }
  }
  
  function validate_field(field) {
    if (field == null) {
      return false
    }
  
    if (field.length <= 0) {
      return false
    } else {
      return true
    }
  }