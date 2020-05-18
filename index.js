function scuberGreetingForFeet(distance){

  if (distance <= 400) {
    return 'This one is on me!';
  }
  else if (distance > 2000 && distance <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else {
    return 'No can do.';
  }
}

function ternaryCheckCity(cityName){
  
  let response;

  cityName === 'NYC' ? (response = 'Ok, sounds good.') : (response = 'No go.')
  
  return response;
}

function switchOnCharmFromTip(generosityLevel){
  let response;
  switch (generosityLevel) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }
  return response;
}