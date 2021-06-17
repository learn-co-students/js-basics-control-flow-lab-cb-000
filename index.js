function scuberGreetingForFeet(val){
  // Write your code here!
  if (val<= 400){
    return "This one is on me!";
  }
  else if (val>2000 && val < 2500) {
    return "I will gladly take your thirty bucks.";
  }
  else
    return "No can do.";
}

function ternaryCheckCity(city){
  // Write your code here!
  let checkcity = city === "NYC"? "Ok, sounds good.": "No go."
  return checkcity;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let compliment;

  switch(tip){
    case "generous":
    compliment = "Thank you so much.";
    break;
    case "not as generous":
    compliment = "Thank you.";
    break;
    default:
    compliment = "Bye.";
    break;

}
  return compliment;

}
