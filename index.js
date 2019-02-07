// Write your code in this file!
function scuberGreetingForFeet(someValue){
  let greeting;
  switch(true){
    case someValue <= 400:
      greeting = "This one is on me!";
      break;
    case someValue > 2500:
      greeting = "No can do.";
      break;
    case someValue > 2000:
      greeting = "I will gladly take your thirty bucks.";
      break;
  }
  return greeting;
}

function ternaryCheckCity(city){
  let greeting;
  city === "NYC" ? greeting = "Ok, sounds good." : greeting = "No go."
  return greeting;
}

function switchOnCharmFromTip(tip){
  let response;
  switch(tip){
    case 'generous':
      response = "Thank you so much."
      break
    case 'not as generous':
      response = "Thank you."
      break
    default:
      response = "Bye."
      break
  }
    return response;
}
