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

const start = () => {
  const loginBtn = document.getElementById('loginBtn');
  loginBtn.addEventListener('click', validateLogin);
};
start();
