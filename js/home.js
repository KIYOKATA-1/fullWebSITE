var countDownDate = new Date("December 6, 2023 00:00:00").getTime();

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


var modal = document.getElementById('myModal');
var btn = document.getElementById('openModalBtn');
var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
  modal.style.display = 'block';
}

span.onclick = function() {
  modal.style.display = 'none';
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

function showSuccessMessage(){
    alert("SUCCESS")
}


function validation(){
  if(document.FormFIll.Username.value == ""){
    document.getElementById('result').innerHTML = "Enter your username";
    return false;
  }
  else if(document.FormFIll.Email.value == ""){
    document.getElementById('result').innerHTML = "Enter your email";
    return false;
  }
  else if(document.FormFIll.Password.value == ""){
    document.getElementById('result').innerHTML = "Enter your password";
    return false;
  }
  else if(document.FormFIll.Cpassword.value == ""){
    document.getElementById('result').innerHTML = "Confirm your password";
    return false;
  }
  else if(document.FormFIll.Password.value !== document.FormFIll.Cpassword.value ){
    document.getElementById('result').innerHTML = "Passwords are not same";
    return false;
  }
}