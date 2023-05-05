let person = prompt("What is your name?");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "!";
}

window.alert(text);
