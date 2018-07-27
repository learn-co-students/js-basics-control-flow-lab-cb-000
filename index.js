// Write your code in this file!
function scuberGreetingForFeet(someValue){
  let result
  if (someValue <= 400){
    result = 'This one is on me!';
  }
  else if (someValue <= 2500 && someValue > 2000) {
    result = 'I will gladly take your thirty bucks.';
  }
  else if (someValue > 2500){
    result = 'No can do.'
  }
  return result
}

function ternaryCheckCity(a){
  let result

  a === 'NYC' ? result = 'Ok, sounds good.' : result = 'No go.';
  return result
}

function switchOnCharmFromTip(a){
  let result

  switch (a) {
    case 'generous':
      result = 'Thank you so much.'
      break;
      case 'not as generous':
      result = 'Thank you.'
      break;
    default:
      result = 'Bye.'
  }
  return result
}
