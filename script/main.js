var secondsContainer = document.querySelector("#second");
var minutesContainer = document.querySelector("#minute");
var hoursContainer = document.querySelector("#hour");
var daysContainer = document.querySelector("#day");
var ageContainer = document.querySelector("#age");
var moonContainer = document.querySelector("#moon");

function countdown() {
  // Define a data de destino (25 de abril)
  var birthdayDate = new Date(
    "April 25, " + new Date().getFullYear() + " 00:00:00"
  ).getTime();

  // Atualiza a contagem regressiva a cada segundo
  var interval = setInterval(function () {
    // Obtém a data e hora atuais
    var currentDate = new Date().getTime();

    // Calcula a diferença entre a data atual e a data de destino
    var difference = birthdayDate - currentDate;

    // Calcula dias, horas, minutos e segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Exibe a contagem regressiva na página
    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds; //se segundos for menor que 10 a função deve acrescentar o 0 na frente, senão continua normal
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysContainer.textContent = days < 10 ? "0" + days : days;

    // Verifica se a data atual é 25 de abril
    var currentDate = new Date();
    if (currentDate.getMonth() == 3 && currentDate.getDate() == 25) {
      // Se for 25 de abril, esconde o countdown e exibe a mensagem + botões
      document.querySelector("#countdown").style.display = "none";
      document.querySelector("#congrats").style.display = "flex";
    } else {
      // // Se não for 25 de abril, mostra o countdown e esconde a mensagem + botões
      document.querySelector("#countdown").style.display = "flex";
      document.querySelector("#congrats").style.display = "none";
    }

    // Verifica se a contagem regressiva chegou a zero
    if (difference < 0) {
      // Se a contagem regressiva chegou a zero, reinicia a contagem para o próximo ano
      birthdayDate = new Date(
        "April 25, " + (new Date().getFullYear() + 1) + " 00:00:00"
      ).getTime();
    }

    // Faz o calculo da idade

    //Define o ano de nascimento
    var birthYear = 2005;

    //Obtem o ano atual
    var currentYear = currentDate.getFullYear();

    //Calcula a idade atual
    var age = currentYear - birthYear;

    //Mostra a idade na tela
    ageContainer.textContent = age + " anos";
  }, 1000);
}

// Inicia a contagem regressiva quando a página for carregada
window.onload = function () {
  countdown();
};

// Função que atribui uma função aos botões de forma aleatoria e sempre que usuário
//clicar no botão correto (que está recebendo a função no momento), será exibido a animação

var buttons = document.querySelectorAll(".button");
var correctButtonIndex = Math.floor(Math.random() * buttons.length);
var correctButton = buttons[correctButtonIndex];

correctButton.addEventListener("click", function () {
  document.querySelector("#congrats").style.display = "none";
  document.querySelector("#congrats").style.visibility = "hidden";
  document.querySelector("#effects").style.display = "flex";
  moonContainer.classList.add("moon-transition");
<<<<<<< HEAD

  function shootingStars() {
    document.querySelector("#shooting-stars").style.display = "flex";
  }

  setTimeout(shootingStars, 5000);
});

for (let i = 0; i < buttons.length; i++) {
  if (i !== correctButtonIndex) {
    buttons[i].addEventListener("click", function () {
      alert("Ops. Se esforce mais! 😛");
    });
  }
=======
>>>>>>> 079a739f54fbf0b864c402a489ddf97abb1c9c41
}

// função que mostra os efeitos extras e o card quando o ovni é clicado
var ovni = document.querySelector("#ovni");
var balloons = document.querySelector(".balloons");
var head = document.querySelector(".head");

function ovniBtn() {
  // alert("oi");
  ovni.classList.add("ovni-effect");
  document.querySelector(".arrow").style.display = "none";
  balloons.classList.add("balloons-up");
  head.classList.add("head-up");

  function showCard() {
    document.querySelector(".card").style.display = "flex";
  }

  setTimeout(showCard, 4000);

  function stopShootingStars() {
    document.querySelector("#shooting-stars").style.opacity = "0";
  }

  setTimeout(stopShootingStars, 4200);
}

// configuração do typeit js

new TypeIt(".text", {
  speed: 40,
  waitUntilVisible: true,
})
  .pause(1000)
  .type("Oi, oi, testando.. Parece que tá funcionando. Valos", { delay: 300 })
  .move(-2)
  .delete(1)
  .type("m")
  .move(null, { to: "END" })
  .type(" lá!")
  .pause(1000)
  .delete(55)
  .type(
    "O universo esperou por você e recebeu a dádiva de sua presença há exatos 18 anos, mas ele ainda não conhece sua capacidade. Ele ainda está tentando desvendar o mistério por trás da pessoa que você é e irá se tornar. <br><br>Você trouxe luz para o espaço e ilumina a vida daqueles que estão ao seu redor. Voçê traz alegria, inspiração e deixa queixos caídos por onde passa, mas não por simplesmente ter sido contemplada com tanta beleza. <br><br>"
  )
  .type(
    "Você é o tipo de pessoa fácil de apaixonar e eu poderia listar diversas das suas melhores qualidades, MAS NÃO TEM MAIS ESPAÇOOOOOOOOOOOOOOOOOOO. Vou ter que apagar esse :("
  )
  .pause(3000)
  .delete(171)
  .type(
    "Resumindo: você é especial e só existe você sendo você. E caramba, eu poderia falar bem mais sobre você, mas nem tudo é perfeito, sabe? E isso não tá ficando legal"
  )
  .pause(3000)
  .delete(108)
  .type("<br><br>Feliz aniversario, Barbára!")
  .pause(1000)
  .delete(7)
  .type("árbara!")
  .go();
