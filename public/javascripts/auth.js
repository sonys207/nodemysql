//本例中，拥有.switch类的有2个标签对象，querySelectorAll表示选择所有包含.switch类的标签对象
//authSwitchLinks是标签对象的数组
const authSwitchLinks = document.querySelectorAll('.switch');
//父标签包含类.auth,自身类是.modal的标签对象
//authModals是标签对象的数组
const authModals = document.querySelectorAll('.auth .modal');
const authWrapper = document.querySelector('.auth');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const signOut = document.querySelector('.sign-out');



// login form
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
   // loginForm.action = "/users";        
  //  loginForm.method = "post";        
//	loginForm.submit();
  location.href="https://www.google.com/";
  
//location.href="/users?email=jichen@qq.com&password=123wertyu";
  // const email = loginForm.email.value;
  // const password = loginForm.password.value;
  // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(user => {
      // console.log('logged in', user);
      // loginForm.reset();
    // })
    // .catch(error => {
      // loginForm.querySelector('.error').textContent = error.message;
    // });
	alert(123);
	
});








