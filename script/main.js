// Função para atualizar a contagem regressiva
function updateCountdown() {
  // Data do aniversário
  var birthdayDate = new Date("April 25, " + new Date().getFullYear() + " 00:00:00").getTime();

  // Data atual
  var currentDate = new Date().getTime();

  // Verifica se a data do aniversário já passou
  if (currentDate > birthdayDate) {
    // Incrementa o ano para o próximo
    birthdayDate = new Date("April 25, " + (new Date().getFullYear() + 1) + " 00:00:00").getTime();
  }
  
  // Calcula a diferença entre as datas
  var difference = birthdayDate - currentDate;

  // Calcula dias, horas, minutos e segundos
  var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);

  // Formatação dos números para dois dígitos
  var formattedDays = days < 10 ? "0" + days : days;
  var formattedHours = hours < 10 ? "0" + hours : hours;
  var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

  // Atualiza os contêineres com os valores formatados
  document.getElementById("day").textContent = formattedDays;
  document.getElementById("hour").textContent = formattedHours;
  document.getElementById("minute").textContent = formattedMinutes;
  document.getElementById("second").textContent = formattedSeconds;

  // Verifica se é o dia do aniversário
  var today = new Date();
  var todayDate = today.getDate();
  var todayMonth = today.getMonth() + 1; // Janeiro é 0
  var isApril25 = todayDate === 25 && todayMonth === 4;

  // Mostra a div de felicitações se for o dia do aniversário
  if (isApril25) {
    document.getElementById("congrats").style.display = "flex";
    document.getElementById("content-1").style.display = "none";
  } else {
    document.getElementById("congrats").style.display = "none";
    document.getElementById("content-1").style.display = "flex";
  }

  // Calcula a idade
  var birthYear = 2005;
  var birthDate = new Date("April 25, " + birthYear + " 00:00:00");
  var currentYear = new Date().getFullYear();
  var age = currentYear - birthYear;

  if (
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())
  ) {
    age++;
  }

  // Atualiza o contêiner de idade
  document.getElementById("age").textContent = age + " anos";
}

// Inicia a contagem regressiva quando a página for carregada
window.onload = function () {
  updateCountdown();
  // Chama a função updateCountdown a cada segundo
  setInterval(updateCountdown, 1000);
};

// Botão correto
var correctButton = document.querySelector(".button");

correctButton.addEventListener("click", function () {
  var moonContainer = document.querySelector("#moon");
  var heroContainer = document.querySelector("#hero");
  var pinkContainer = document.querySelector("#pink");
  var yellowContainer = document.querySelector("#yellow-star");
  var textContainer = document.querySelector("#text-a");

  moonContainer.classList.add("transition");
  heroContainer.style.display = "none";
  pinkContainer.classList.add("transition");

  setTimeout(function () {
    yellowContainer.style.opacity = "1";
    textContainer.style.display = "flex";
  }, 2000);
});

// Botões incorretos
var buttons = document.querySelectorAll(".button");

for (let i = 0; i < buttons.length; i++) {
  if (buttons[i] !== correctButton) {
    buttons[i].addEventListener("click", function () {
      alert("Ops. Se esforce mais! 😛");
    });
  }
}

// Texto
new TypeIt(".text-element", {
  speed: 40,
  waitUntilVisible: true,
})
  .pause(1000)
  .type("Evangeline, minha Evangeline...", { delay: 300 })
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
  .type("<br><br>Feliz aniversário, minha criança.")
  .pause(1000)
  .go();
