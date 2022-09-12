
function register() {

   var email = document.getElementById("email");
   var nom = document.getElementById("nom");
   var prenom = document.getElementById("prenom");
   var mp1 = document.getElementById("mp1");
   var cmp = document.getElementById("cmp");

   var formError = false;


   if (nom.value == "") {
      nom.classList.add('is-invalid');
      nom.classList.remove('is-valid');
      formError = true;

   }
   else {
      nom.classList.remove('is-invalid');
      nom.classList.add('is-valid');

   }

   if (prenom.value == "") {
      prenom.classList.add('is-invalid');
      prenom.classList.remove('is-valid');
      formError = true;

   }
   else {
      prenom.classList.remove('is-invalid');
      prenom.classList.add('is-valid');
   }

   if (email.value == "") {
      formError = true;
   }
   else {
      email.classList.remove('is-invalid');
      email.classList.add('is-valid');
   }

   if (mp1.value == "" || mp1.length >= 8) {
      formError = true;
      mp1.classList.add('is-invalid');
   }
   else {
      mp1.classList.remove('is-invalid');
      mp1.classList.add('is-valid');
   }

   if (cmp.value == "" || mp1.value != cmp.value) {
      cmp.classList.add('is-invalid');
      cmp.classList.remove('is-valid');
      formError = true;

   }
   else {
      cmp.classList.remove('is-invalid');
      cmp.classList.add('is-valid');
   }


   if (formError === false) {
      var data = {
         nom: nom.value,
         prenom: prenom.value,
         email: email.value,
         mp: mp1.value
      }
      var users = JSON.parse(localStorage.getItem('users')) || [] ;  /*localStorage.getItem('users') chaine de carractere ---JSON.parse(localStorage.getItem('users')) JSOn mettre le chaine de c dans un tableau */
      var util = users.find(user => user.email == email.value)    /* parcours du tableau users.map *//*users.find la recherche d'un element*/ 
      if (util) {
         alert('user exist')
      } else {
         users.push(data);/* ajout des donnees a la fin du tableau*/
         localStorage.setItem('users', JSON.stringify(users)) /*stocker les elements dans users et  JSON.stringify(users) lui rendre en tableau */
         console.log(data);
         window.location.href = "/login.html";
      }
   }

};
var btn = document.getElementById('btn');
btn.addEventListener('click', register);



