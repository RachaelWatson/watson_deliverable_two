var tempFahr = prompt("What's the temperature outside today?");
var eventType = prompt("What kind of events are you attending today (casual, semi-formal, or formal?");

if (tempFahr < "54")
  {var layer = " wear a coat and ";
} else if (tempFahr >= "53" && tempFahr <= "70")
  {var layer = " wear a jacket and ";
} else if (tempFahr > "70")
  {var layer = "skip the jacket and wear ";
}

if (eventType == "casual")
  {var occassion = " something comfy.";
} else if (eventType == "semi-formal")
  {var occassion = " a polo.";
} else if (eventType = "formal")
  {var occassion = " a suit.";
}

var result = 'Since it is ' +tempFahr+ ' degrees and you are going to a ' +eventType+ ' event, you should ' +layer +occassion;


document.write(result);
console.log;
