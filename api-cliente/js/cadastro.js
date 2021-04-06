/* global fetch */
// Captura o click do botão salvar
const btn = document.getElementById('salvar')
btn.onclick = () => {
  const postagem = getDadosFormulario()
  enviarDadosParaAPI(postagem)
}
const campoTitulo = document.getElementById('titulo')
const campoTexto = document.getElementById('texto')
const campoAutor = document.getElementById('autor')

// Pegar os dados do formulário
function getDadosFormulario () {
  const postagem = {}
  postagem.titulo = campoTitulo.value
  postagem.texto = campoTexto.value
  postagem.autor = campoAutor.value
  return postagem
}
// Enviar os dados para a API
async function enviarDadosParaAPI (postagem) {
  const resposta = await fetch('http://localhost:3000/postagens', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(postagem)
  })
  if (resposta.status === 200) {
    const [divMsg] = document.getElementsByClassName('msg')
    divMsg.style.backgroundColor = '#00e600'
    divMsg.innerHTML = '<p>Adicionado com sucesso!</p>'
    limpaCampos()
  }
}

function limpaCampos () {
  campoTitulo.value = ''
  campoTexto.value = ''
  campoAutor.value = ''
}
