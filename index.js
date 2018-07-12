// Write your code in this file!
function scuberGreetingForFeet (feet) {
  if (feet <= 400) {
    return 'This one is on me!';
  } else if (1999 < feet && feet < 2500) {
    return "I will gladly take your thirty bucks.";
  } else {
    return "No can do.";
  }
}

function ternaryCheckCity (city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip (tip) {
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
// function scuberGreetingForFeet (feet) {
//   if (feet > 2500) {
//     return 'No can do.';
//   } else if (feet > 2000) {
//     return 'I will gladly take your thirty bucks.';
//   } else if (feet <= 400) {
//     return 'This one is on me!';
//   }
// }
// 
// function ternaryCheckCity(city) {
//   if (city == 'NYC') {
//     return "Ok, sounds good.";
//   } else {
//     return "No go.";
//   }
// }
// 
// function switchOnCharmFromTip(charm) {
//   switch (charm) {
//     case 'generous':
//       return 'Thank you so much.';
//       break;
//     case 'not as generous':
//       return 'Thank you.';
//       break;
//     default:
//       return 'Bye.';
//       break;
//     }
//   }
// } 