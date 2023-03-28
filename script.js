const secondsContainer = document.querySelector("#seconds");
const minutesContainer = document.querySelector("#minutes");
const hoursContainer = document.querySelector("#hours");
const daysContainer = document.querySelector("#days");

// const nextYear = new Date().getFullYear() + 1; // recebendo a data do proximo ano dde forma dinamica;
const nextBday = new Date().getFullYear();
const bDayDate = new Date(`April 25 ${nextBday} 00:00:00`); //data do aniversario

const updateCountdown = () => {
  const currentTime = new Date();
  const difference = bDayDate - currentTime; //milisegundos que faltam pra 25 de abril

  const days = Math.floor(difference / 1000 / 60 / 60 / 24); // dias que faltam para o dia 25 de abril
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24; // horas que faltam para o dia 25 de abril
  const minutes = Math.floor(difference / 1000 / 60) % 60; // minutos que faltam para o dia 25 de abril
  const seconds = Math.floor(difference / 1000) % 60; // segundos que faltam para o dia 25 de abril

  //   console.log({days, hours, minutes, seconds}); //milisegundos que faltam pra 25 de abril

  secondsContainer.textContent = seconds < 10 ? "0" + seconds : seconds; //se segundos for menor que 10 a função deve acrescentar o 0 na frente, senão continua normal
  minutesContainer.textContent = minutes < 10 ? "0" + minutes : minutes;
  hoursContainer.textContent = hours < 10 ? "0" + hours : hours;
  daysContainer.textContent = days < 10 ? "0" + days : days;

};

setInterval(updateCountdown, 1000);
