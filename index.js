function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet<=400){
    return 'This one is on me!';
  } else if (feet>2000 && feet<=2500) {
return 'I will gladly take your thirty bucks.'
  }
  else if (feet>2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  
  return city==='NYC' ? 'Ok, sounds good.': 'No go.';
}
function switchOnCharmFromTip(tipAmount) {
  let response;

  switch (tipAmount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
      break;
  }

  return response;
}