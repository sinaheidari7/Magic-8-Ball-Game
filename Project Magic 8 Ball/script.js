function getUserChoice(){

  var output = document.getElementById("output");

  var name = (prompt("What is your name?"));

  output.innerHTML = "Hello" + name + "!" + "<br>" + "<br>";
  
  var question = (prompt("Please ask a question!"));

  output.innerHTML += "User question: " + question + "<br>" + "<br>";

  var eightBall = "";

  var randomNumber = Math.floor(Math.random() * 8);

  switch (randomNumber){
  case 0:
    eightBall = 'Better not tell you now.';
    break;
  case 1:
    eightBall = 'Concentrate and ask again.';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Dont count on it';
    break;
  case 5:
    eightBall = 'My reply is no.';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}
  output.innerHTML += "Eightball's answer: " + eightBall;
}
