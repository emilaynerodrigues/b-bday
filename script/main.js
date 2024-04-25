var secondsContainer = document.querySelector("#second");
var minutesContainer = document.querySelector("#minute");
var hoursContainer = document.querySelector("#hour");
var daysContainer = document.querySelector("#day");
var ageContainer = document.querySelector("#age");

function countdown() {
  var birthdayDate = new Date(
    "April 25, " + new Date().getFullYear() + " 00:00:00"
  ).getTime();

  var interval = setInterval(function () {
    var currentDate = new Date().getTime();
    var difference = birthdayDate - currentDate;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
    daysContainer.textContent = days < 10 ? "0" + days : days;

    var today = new Date();
    var todayDate = today.getDate();
    var todayMonth = today.getMonth() + 1; // January is 0
    var isApril25 = todayDate === 25 && todayMonth === 4;

    if (isApril25) {
      // Mostra a div desejada durante todo o dia 25
      document.getElementById("congrats").style.display = "flex";
      document.getElementById("content-1").style.display = "none";
    } else {
      // Oculta a div em outros dias
      document.getElementById("congrats").style.display = "none";
      document.getElementById("content-1").style.display = "flex";
    }

    var birthYear = 2005;
    var birthDate = new Date("April 25, " + birthYear + " 00:00:00");
    var currentYear = new Date().getFullYear();
    var age = currentYear - birthYear;

    if (
      new Date().getMonth() > birthDate.getMonth() ||
      (new Date().getMonth() === birthDate.getMonth() &&
        new Date().getDate() >= birthDate.getDate())
    ) {
      age++;
    }

    ageContainer.textContent = age + " anos";
  }, 100);
}
// Inicia a contagem regressiva quando a página for carregada
window.onload = function () {
  countdown();
};

// Função que atribui uma função aos botões de forma aleatória e sempre que o usuário
// clicar no botão correto (que está recebendo a função no momento), será exibida a animação

var buttons = document.querySelectorAll(".button");
var correctButtonIndex = Math.floor(Math.random() * buttons.length);
var correctButton = buttons[correctButtonIndex];
var moonContainer = document.querySelector("#moon");
var fullMoonContainer = document.querySelector("#moon-girl");
var heroContainer = document.querySelector("#hero");
var pinkContainer = document.querySelector("#pink");
var yellowContainer = document.querySelector("#yellow-star");
var textContainer = document.querySelector("#text-a");

correctButton.addEventListener("click", function () {
  moonContainer.classList.add("transition");
  heroContainer.style.display = "none";
  pinkContainer.classList.add("transition");
  fullMoonContainer.classList.add("fullMoon-transition");

  setTimeout(function () {
    // Mostra a estrela amarela definindo sua opacidade para 1
    yellowContainer.style.opacity = "1";
    textContainer.style.display = "flex";
  }, 2000);
});

for (let i = 0; i < buttons.length; i++) {
  if (i !== correctButtonIndex) {
    buttons[i].addEventListener("click", function () {
      alert("Ops. Se esforce mais! 😛");
    });
  }
}

// texto

new TypeIt(".text-element", {
  speed: 40,
  waitUntilVisible: true,
})
  .pause(1000)
  .type("Evangeline, minha evangeline...", { delay: 300 })
  .pause(1000)
  .delete(55)
  .type(
    "Você continua a surpreender e não sabe o quanto é admirada por outros. <br><br>  Ouvir teus pensamentos sempre foi muito prazeroso. Sua forma de enxergar <br> a vida e todas suas nuances é além de intrigante. Você não é alguém fácil de <br> desvendar, mas não é difícil de enxergar sua maestria."
  )
  .pause(4000)
  .type(
    "<br><br> Você é irritantemente inteligente e seria impossível não notar tua presença. <br> Você  se destaca, mesmo em meio a tantos rostos e sempre que lembro de <br>você me vem todos os bons momentos que compartilhamos. Tivemos sorte <br> de você ter vindo até nós. <br> <br> Você alegra a vida e torna tudo mais divertido, mas também sabe ser <br> irritavelmente fria, o que é um saco. Cadê o sentimentalismo, garota? ksjhdk"
  )
  .pause(4000)
  .delete(402)
  .type(
    "<br><br>Entre todas as coisas boas que poderia lhe desejar, irei pra mais obvia: torço que tenha <br>uma boa vida, que consiga comprar seu Mob, que mostre a eles que seu esforço valeu <br> a pena e que você se torne um fenomeno de mulher!"
  )
  .type("<br><br>Feliz aniversario, minha criança.")
  .pause(1000)
  .go();
