const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const buttonPerguntar = document.querySelector('#buttonPerguntar')
const respostas = [
    "Miau.",
    "Ron Ron",
    "Com certeza!",
    "Não tenho tanta certeza.",
    "...",
    "Não conte com isso.",
    "Não sei!",
    "É possível.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "As perspectivas não são tão boas",
    "Quem sabe?",
    "Sinais apontam que sim.",
    "Sinais apontam que não.",
    "O burro sempre vai na frente.",
    "Boi sonso é que pula a cerca.",
    "Quem se faz de ovelha, o lobo come.",
    "Peixe esperto come a isca e caga no anzol.",
    "Canário na muda não canta.",
]

function fazerPergunta() {

  if(inputPergunta.value == "") {
    alert("Digite sua pergunta, miau!")
    return
  }

  buttonPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  
  const  totalRespostas = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalRespostas)

  elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]

  elementoResposta.style.opacity = 1;

  
  setTimeout(function() {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled")
  }, 3000)
}
