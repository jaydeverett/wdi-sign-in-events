var modal = document.querySelector('.modal');
var signIn = document.querySelector('.signin');
var close = document.querySelector('body > div > form > button.close');
var submit = document.querySelector('body > div > form > button.submit');
var user = document.querySelector('#user');
var pass = document.querySelector('#pass');
var userList = user.classList;
var passList = pass.classList;

signIn.addEventListener('click', function() {
  modal.style.display = 'block';
})

close.addEventListener('click', function() {
  modal.style.display = 'none';
})

submit.addEventListener('click', function() {
  user.className = 'error';
  pass.className = 'error';
})

user.addEventListener('click', function() {
  if (user.className = 'error') {
    userList.remove('error');
  }
})

pass.addEventListener('click', function() {
  if (pass.className = 'error') {
    passList.remove('error');
  }
})
