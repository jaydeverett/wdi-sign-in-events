var modal = document.querySelector('.modal');
var signIn = document.querySelector('.signin');
var close = document.querySelector('body > div > form > button.close');
var submit = document.querySelector('body > div > form > button.submit');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');
var userTraits = user.classList;
var passTraits = pass.classList;

signIn.addEventListener('click', function() {
  modal.style.display = 'block';
})

close.addEventListener('click', function() {
  modal.style.display = 'none';
})

submit.addEventListener('click', function(e) {
  e.stopPropagation()
  user.className = 'error';
  pass.className = 'error';
})

user.addEventListener('click', function(e) {
  e.stopPropagation();
  if (user.className = 'error') {
    userTraits.remove('error');
  }
})

pass.addEventListener('click', function(e) {
  e.stopPropagation();
  if (pass.className = 'error') {
    passTraits.remove('error');
  }
})
 modal.addEventListener('click', function() {
   modal.style.display = 'none';
 })
