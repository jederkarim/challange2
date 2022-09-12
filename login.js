function login() {
   var email = document.getElementById("email");
   var mp = document.getElementById("mp");

   var formError = false;

   if (email.value == "") {
      email.classList.add('is-invalid');
      email.classList.remove('is-valid');
      formError = true;
   } else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
   }

   if (mp.value == "" || mp.length >= 8) {
      mp.classList.add('is-invalid');
      mp.classList.remove('is-valid');
      formError = true;
   }
   else {
      mp.classList.remove('is-invalid');
      mp.classList.add('is-valid');
   }

   if (formError == false) {
      var users = JSON.parse(localStorage.getItem('users')) || [];
      console.log(users);
      var util = users.find(user => user.email == email.value && user.mp == mp.value)    /* parcours du tableau users.map *//*users.find la recherche d'un element*/ 
      console.log(util);
      window.location.href = "/auth-javascript/js/dashboard.html";
      
      
   }
}
var btn = document.getElementById('btn');
btn.addEventListener('click', login);