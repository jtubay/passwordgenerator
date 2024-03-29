/// generate function that will run when the user clicks the generate password button
function generate() {
  //alerts questions asked to the user
  let questionOne = prompt("Do you want capital case letters, yes or no?");
  let questionTwo = prompt("Do you want lower case letters, yes or no?");
  let questionThree = prompt("Do you want numbers, yes or no?");
  let questionFour = prompt("Do you want symbols, yes or no?");

  //sets user choices to lowercase to prevent errors
  questionOne = questionOne.toLowerCase();
  questionTwo = questionTwo.toLowerCase();
  questionThree = questionThree.toLowerCase();
  questionFour = questionFour.toLowerCase();

  //sets the desired length of the password based on the users desire using the slider
  let setLength = document.getElementById("slider").value;

  //possible out comes based on the user's input
  const outComeOne =
    "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";
  const outComeTwo = "ABCDEFGHIJKLMNOPQRSTUVWYXZ";
  const outComeThree = "abcdefghijklmnopqrstuvwxyz";
  const outComeFour = "1234567890";
  const outComeFive = "!@#$%^&*()_+";
  const outComeSix = "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz";
  const outComeSeven = "ABCDEFGHIJKLMNOPQRSTUVWYXZ1234567890";
  const outComeEight = "ABCDEFGHIJKLMNOPQRSTUVWYXZ!@#$%^&*()_+";
  const outComeNine = "abcdefghijklmnopqrstuvwxyz1234567890";
  const outComeTen = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  const outComeEl = "1234567890!@#$%^&*()_+";
  const outComeTwel =
    "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz1234567890";
  const outComeThir =
    "ABCDEFGHIJKLMNOPQRSTUVWYXZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";
  const outComeFourTeen = "abcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

  //empty variable that will store the random password
  let password = "";

  //if statements that will generate random password based on user input using the possible outcomes to generate

  if (
    questionOne === "yes" &&
    questionTwo === "yes" &&
    questionThree === "yes" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeOne[Math.floor(Math.random() * outComeOne.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "no" &&
    questionThree === "no" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeTwo[Math.floor(Math.random() * outComeTwo.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "yes" &&
    questionThree === "no" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password +
        outComeThree[Math.floor(Math.random() * outComeThree.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "no" &&
    questionThree === "yes" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeFour[Math.floor(Math.random() * outComeFour.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "no" &&
    questionThree === "no" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeFive[Math.floor(Math.random() * outComeFive.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "yes" &&
    questionThree === "no" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeSix[Math.floor(Math.random() * outComeSix.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "no" &&
    questionThree === "yes" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password +
        outComeSeven[Math.floor(Math.random() * outComeSeven.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "no" &&
    questionThree === "no" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password +
        outComeEight[Math.floor(Math.random() * outComeEight.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "yes" &&
    questionThree === "yes" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeNine[Math.floor(Math.random() * outComeNine.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "yes" &&
    questionThree === "no" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeTen[Math.floor(Math.random() * outComeTen.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "no" &&
    questionThree === "yes" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeEl[Math.floor(Math.random() * outComeEl.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "yes" &&
    questionThree === "yes" &&
    questionFour === "no"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeTwel[Math.floor(Math.random() * outComeTwel.length)];
    }
  } else if (
    questionOne === "yes" &&
    questionTwo === "yes" &&
    questionThree === "no" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password + outComeThir[Math.floor(Math.random() * outComeThir.length)];
    }
  } else if (
    questionOne === "no" &&
    questionTwo === "yes" &&
    questionThree === "yes" &&
    questionFour === "yes"
  ) {
    for (var i = 0; i < setLength; i++) {
      password =
        password +
        outComeFourTeen[Math.floor(Math.random() * outComeFourTeen.length)];
    }
  } else {
    //alert will run if user answers no to all prompts
    alert("Please pick character types available to generate password!");
  }

  //Adds password to the display area
  document.getElementById("display").value = password;
}

// function to set length based on slider position
document.getElementById("slider").oninput = function() {
  if (document.getElementById("slider").value >= 8) {
    document.getElementById("length").innerHTML =
      "Length: " + document.getElementById("slider").value;
  } else {
    document.getElementById("length").innerHTML = "length = 8";
  }
};

//copy password to clipboard

function copyToClipboard() {
  document.getElementById("display").select();

  document.execCommand("Copy");

  alert("Password has been copied to clipboard!");
}
