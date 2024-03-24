// CONCATENATE SOME STRINGS
document.getElementById("contSomeString").onclick = function () {
  let firstName = prompt("Enter Your First Name");
  let lastName = prompt("Enter Your last Name");
  let nameMessage = "Have a Nice Day";
  let exlam = "!";
  let statementOne =
    nameMessage + " " + firstName + " " + lastName + " " + exlam;
  alert(statementOne);
  document.getElementById("output").innerHTML = statementOne;
  let inHtml =
    '<p style="text-align: left;">let firstName= prompt("Enter Your First Name")  <br>let lastName= prompt("Enter Your last Name")<br>nameMessage = ("Have a Nice Day") <br>let exlam= "!"<br> let statementOne= nameMessage + " " + firstName + " " + lastName + " " + exlam <br>alert(statementOne)</p>';
  document.getElementById("statement").innerHTML = inHtml;
};

// ASK NAME FROM USER
document.getElementById("askName").onclick = function () {
  let fullName = prompt("Enter Your Full Name");
  alert("Your name is" + " " + fullName + ".");
  document.getElementById("statement").innerHTML =
    '<p style="text-align: left;"> let fullName= prompt("Enter Your Full Name") <br/> ' +
    fullName +
    " <br/>  alert(fullName)</p>";
  document.getElementById("output").innerHTML =
    "Your name is" + " " + fullName + ".";
};

// COMPARISON OPERATOR
document.getElementById("comOperator").onclick = function () {
  let firstNumber = +prompt(
    "Enter First Number To Check Comparison Between Both!"
  );
  let secondNumber = +prompt(
    "Enter Second Number To Check Comparison Between Both!"
  );
  let result;
  if (firstNumber > secondNumber) {
    result = "is greater than";
  } else if (firstNumber < secondNumber) {
    result = "is less than";
  } else if (firstNumber == secondNumber) {
    result = "is equal to";
  } else {
    result = "Please Enter Valid Number";
  }
  let ans = "" + firstNumber + " " + result + " " + secondNumber + "";
  alert(ans);
  document.getElementById("output").innerHTML = ans;
  let twoNum =
    '<p style="text-align: left;">let firstNumber = +prompt("Enter First Number To Check Comparison Between Both!") <br/>First Number = ' +
    firstNumber +
    ' <br/> let secondNumber = +prompt("Enter Second Number To Check Comparison Between Both!") <br/> Second Number = ' +
    secondNumber +
    "</p>";
  document.getElementById("statement").innerHTML = twoNum;
};

// IF ELSE IF
document.getElementById("ifCon").onclick = function () {
  let newName = prompt("Enter your name");
  let message;
  if (newName == "") {
    message = "Please must enter your name";
  } else if (newName === "ali") {
    message = "name is good";
  } else {
    message = "is your favourite name";
  }
  let nameResult = " " + newName + " " + message + "";
  alert(nameResult);
  document.getElementById("output").innerHTML = nameResult;
  let statement =
    '<p style="text-align: left;">let newName = prompt("Please Enter Name") <br/> let message  </p>';
  document.getElementById("statement").innerHTML = statement;
};

// Testing Sets Of Conditions
document.getElementById("testCondition").onclick = function () {
  let fit = +prompt("Enter Your Height");
  let height;
  if (fit == "" || fit == " ") {
    height = "Please Must Enter Your Height:";
  } else if (fit >= 7) {
    let weight = +prompt("Enter Your Weight");
    if (weight >= 70) {
      height = "You are very tall and You are very fat";
    } else {
      height = "You are tall and Weight is less";
    }
  } else if (fit >= 6) {
    let weight = +prompt("Enter Your Weight");
    if (weight >= 50) {
      height = "Your Height is good and You are less fat";
    } else {
      ("Your Height is good and You are Handsome");
    }
  } else if (fit >= 5) {
    let weight = +prompt("Enter Your Weight");
    if (weight >= 40) {
      height = "Your height is Normal and You are Handsome";
    } else {
      height = "Your height is normal and Weight is less";
    }
  } else {
    let weight = +prompt("Enter Your Weight");
    if (weight >= 40) {
      height = "Your height is Less and You weight is High";
    } else {
      height = "Your height is Less and you are Weak";
    }
  }
  alert(height);
  document.getElementById("output").innerHTML = height;
  let statement =
    '<p style="text-align: left;">let fit = +prompt("Please Enter Your Height") <br/> let weight = +prompt("Enter Your Weight") <br/> let height</p>';
  document.getElementById("statement").innerHTML = statement;
};

// if Nested if
document.getElementById("ifNested").onclick = function () {
  let age = +prompt(
    "Enter Your Age & Check are you eligible to borrow the book"
  );
  let message;
  if (age >= 18) {
    message = "You are able to buy a book";
    alert(message);
    let userInput = +prompt("Enter four digit code");
    if (userInput >= 1000) {
      message = "You are member";
      alert(message);
      let bookName = prompt(
        "Choose One Book: Wonder, Rebecca, Jurassic"
      ).toLowerCase();
      if (bookName == "wonder" || bookName == "Rebecca") {
        message = "This book is available!";
      } else {
        message = "Sorry this book is not available!";
      }
    } else {
      message = "You are not member";
    }
  } else {
    message = "You are not able to buy book";
  }
  alert(message);
  document.getElementById("output").innerHTML = message;
  let statement =
    '<p style="text-align: left;">let age = +prompt("Enter Your Age & Check are you eligible to borrow the book"); <br/> let message; <br/> let userInput = +prompt("Enter four digit code"); <br/> let bookName = prompt("Choose One Book: Wonder, Rebecca, Jurassic").toLowerCase(); </p>';
  document.getElementById("statement").innerHTML = statement;
};

// logIn
document.getElementById("logIn").onclick = function () {
  let name = prompt("Enter Your Full Name");
  let message;
  let fullNAme = name;
  if (name !== "" && name !== " " && name == fullNAme) {
    let password = +prompt("Enter Your five Digit Password");
    if (password >= 10000) {
      message = "Your password is correct";
      alert(message);
      message = "You are successfully login";
    } else {
      message = "Your password is incorrect";
    }
  } else {
    message = "Please Must Enter Your Name";
  }
  alert(message);
  document.getElementById("output").innerHTML = message;
  let statementOne =
    '<p style="text-align: left;">let name = prompt("Enter Your Name") <br> let message <br> let fullNAme = name  </p>';
  document.getElementById("statement").innerHTML = statementOne;
};

// Check
document.getElementById("check").onclick = function () {
  let userInput = prompt("Enter Different Numbers");
  let message;
  if (userInput.length > 5) {
    message = "Input is longer than 5 characters.";

    var useInput = prompt();
    if (useInput.length > 10) {
      message = "Input is longer than 10 characters.";
    } else {
      message = "Input is between 6 and 10 characters long.";
    }
  } else {
    message = "Input is 5 characters or shorter.";
  }
  alert(message);
  document.getElementById("output").innerHTML = message;
  let statement =
    '<p style="text-align: left;">let userInput = prompt("Enter Different Numbers"); <br/> let message;</p>';
  document.getElementById("statement").innerHTML = statement;
};

// Clear Statement
document.getElementById("clearStatement").onclick = function () {
  document.getElementById("statement").innerHTML = "";
};

// Clear Output
document.getElementById("clearOutput").onclick = function () {
  document.getElementById("output").innerHTML = "";
};
