/* global fetch */
const divPostagens = document.getElementById('postagens')

async function consultaPostagens () {
  const retorno = await fetch('http://localhost:3000/postagens')
  const dados = await retorno.json()
  preencheTela(dados)
}
function preencheTela (dados) {
  dados.forEach(postagem => {
    console.log('postagem', postagem)
    const html = `<div class="postagem">
    <h3>${postagem.titulo}</h3>
    <p>${postagem.texto}</p>
    <p class="data">Publicado em: ${postagem.dataAlteracao}</p>
    </div>`
    divPostagens.innerHTML = divPostagens.innerHTML + html
  })
}
consultaPostagens()
