// Função para validar o login
function validateLogin() {
  const emailInput = document.getElementById('emailInput');
  const passwordInput = document.getElementById('passwordInput');
  const registeredEmail = 'tryber@teste.com';
  const registeredPassword = '123456';

  if (emailInput.value === registeredEmail && passwordInput.value === registeredPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

// Função que verifica se o checkbox foi selecionado
function checkAgreement() {
  const checkbox = document.getElementById('agreement');
  const sendButton = document.getElementById('submit-btn');

  if (checkbox.checked) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
}

function characterCount(e) {
  const counter = document.getElementById('counter');
  counter.innerHTML = 500 - e.target.value.length;
  
}

const start = () => {
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', validateLogin);

  const checkbox = document.getElementById('agreement');
  checkbox.onchange = checkAgreement;

  const textarea = document.getElementById('textarea');
  textarea.addEventListener('keyup', characterCount);
};
start();
