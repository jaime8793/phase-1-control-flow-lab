
function scuberGreetingForFeet(someNumber) {

    if (someNumber <= 400){
            return "Free Sample";
    }
    else if (someNumber > 2000 && someNumber < 2500){
        return "Give me 30 Dollars.";
    }
    else if(someNumber > 2500){
        return "No rides allowed.";
    }

}

function ternaryCheckCity(city) {

    if (city === "NYC") {
        return "Ok, sounds good.";
    }
    else{
        return "No go.";
    }
}


function switchOnCharmFromTip(tip) {

    if (tip === "generous") {
        return "Thank you so much.";
    } else if (tip === "not as generous") {
        return "Thank you.";
    } else {
        return "Bye.";
    }
  }