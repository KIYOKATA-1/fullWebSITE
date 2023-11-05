var countDownDate = new Date("November 4, 2024 00:00:00").getTime();

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000* 60 * 60));
    var minutes = Math. floor((distance % (1000* 60* 60)) / (1000*60));
    var seconds = Math. floor((distance % (1000*60)) / 1000);

    document.getElementById("day").innerHTML = days;
    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("min").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
},1000) 


// Получаем ссылки на элементы
var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];

// Открываем модальное окно при клике на кнопку
btn.onclick = function() {
  modal.style.display = 'block';
}

// Закрываем модальное окно при клике на кнопку "Закрыть"
span.onclick = function() {
  modal.style.display = 'none';
}

// Закрываем модальное окно при клике вне окна
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}
