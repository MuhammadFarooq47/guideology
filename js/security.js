firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      
      // var uid = user.uid;
      // firebase.database().ref('registerUsers/' + uid).once("value", snap => {
      //   console.log(snap.val().uid)
      // })
      // console.log(`UserUID ==== ${uid}`)
      // console.log(`User ======........ ${user.emailVerified}`)
      // window.location.href = '/dashboard'
      // ...
      window.location.href = 'contactus.html';
      // return false;
    } else {
      console.log("User Logout please Signin")
      window.location.href = 'login.html'
      return false;
      // User is signed out
      // ...
    }
  });