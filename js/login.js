const usuario = {
  login: 'aluno.serratec',
  senha: 'senha123'
}

let iptLogin = document.getElementById('login')
let iptSenha = document.getElementById('senha')
let btnLogin = document.getElementById('btn-login')

btnLogin.addEventListener('click', () => {
  if (!iptLogin.value || !iptSenha.value) {
    alert('Login e senha devem ser preenchidos')
    return
  }

  if (!loginValido(iptLogin.value, iptSenha.value)) {
    alert('Login ou senha inválido')
    return
  }

  window.open('dashboard.html')
})

function loginValido(login, senha) {
  if (login.toLowerCase() != usuario.login || senha != usuario.senha) {
    return false
  }

  return true
}
