fetch('https://newsapi.org/v2/top-headlines?sources=bbc-news&language=en&apiKey=8da18b3cc3554cce8e35f13f8cda973a')
  .then(response => response.json())
  .then(data => {
    noticias(data);
    console.log(data)
  });

async function noticias(data) {

    data.articles.map((article) =>{
  const resultado = document.getElementById('resultado')

  const div = document.createElement('div')
  div.classList.add('resultado-div')

  const titulo = document.createElement('h1')
  titulo.classList.add('resultado-titulo')

  const descricao = document.createElement('p')
  descricao.classList.add('resultado-descricao')

  const rank = document.createElement('p')
  rank.classList.add('resultado-rank')

  titulo.innerText = article.title
  descricao.innerText = article.description

  rank.innerText = rank.innerText = new Date(article.publishedAt).toLocaleString('pt-BR')



  div.appendChild(titulo)
  div.appendChild(descricao)
  div.appendChild(rank)

  resultado.appendChild(div)

  console.log(rank)
})
}







































//GIT HUB: staff-gj