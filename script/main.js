var secondsContainer = document.querySelector("#second");
var minutesContainer = document.querySelector("#minute");
var hoursContainer = document.querySelector("#hour");
var daysContainer = document.querySelector("#day");
var ageContainer = document.querySelector("#age");

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

    // Verifica se a contagem regressiva chegou a zero
    if (difference < 0) {
      // Se a contagem regressiva chegou a zero, reinicia a contagem para o próximo ano
      birthdayDate = new Date(
        "April 25, " + (new Date().getFullYear() + 1) + " 00:00:00"
      ).getTime();
    }

    //------------- Faz o calculo da idade -------------
    //Define o ano de nascimento
    var birthYear = 2005;

    //Obtem o ano atual
    var currentYear = new Date().getFullYear();

    //Calcula a idade atual
    var age = currentYear - birthYear;

    //se o mes for maior que 3 (já que a contagem começa do 0)
    if (new Date().getMonth() >= 3 || new Date().getDate() > 25) {
      age++;
    }

    //------------- Mostra a idade na tela -------------
    ageContainer.textContent = age + " anos";
  }, 100);
}

// Inicia a contagem regressiva quando a página for carregada
window.onload = function () {
  countdown();
};
