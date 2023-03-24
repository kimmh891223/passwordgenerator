
var numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var lCaseArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var uCaseArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var sCharArr = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "[", "]", ":", ";", ".", ",", "<", ">", "?", "/"];

// Prompt

var genButton = document.querySelector("#genButton");

genButton.addEventListener("click", function(clicked){
  var answer1 = window.prompt("Password Length (8-128)");
  if (answer1 >= 8 && answer1 <= 128) {var answer2 = window.confirm("Do you want numbers in your Password?")
  if (answer2 == true || answer2 == false) {
    var answer3 = window.confirm("Do you want lower-case alphabets in your Password?")
    if (answer3 == true || answer3 == false) {
      var answer4 = window.confirm("Do you want upper-case alphabets in your Password?")
      if (answer4 == true || answer4 == false) {
        var answer5 = window.confirm("Do you want special character in your Password?")
        if (answer5 == true || answer5 == false) {
          var answer6 = window.confirm("Press confirm to generate your Password.");}}}}
  } else {var answerN = window.confirm("Choose a number between 8 and 128.");}

  var n = answer1;

// numbers only
  var randomNums = [];

  for (var i = 0; i < n; i++) {
    var randomNum = Math.floor(Math.random() * numbersArr.length);
    randomNums.push(randomNum);
  }

  console.log(randomNums);

  var randomNumsString = randomNums.join(",");

  console.log(randomNumsString);

  var randomNumsJoined = randomNumsString.replace(/[, ]+/g, "");

  console.log(randomNumsJoined);

  if (answer2 == true && answer3 == false && answer4 == false && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumsJoined;
  }


  // lowercase only

  var randomLCs = [];

  for (var i = 0; i < n; i++) {
      var randomLC = Math.floor(Math.random() * lCaseArr.length);
      var randomLCString = lCaseArr[randomLC]
      randomLCs.push(randomLCString);
    }

  console.log(randomLCs);

  var randomLCJoined = randomLCs.join('');

  console.log(randomLCJoined);

  if (answer2 == false && answer3 == true && answer4 == false && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomLCJoined;
  }



  // uppercase only

  var randomUCs = [];

  for (var i = 0; i < n; i++) {
      var randomUC = Math.floor(Math.random() * uCaseArr.length);
      var randomUCString = uCaseArr[randomUC]
      randomUCs.push(randomUCString);
    }

  console.log(randomUCs);
  
  var randomUCJoined = randomUCs.join('');

  console.log(randomUCJoined);

  if (answer2 == false && answer3 == false && answer4 == true && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomUCJoined;
  }

  // special characters only

  var randomSCs = [];

  for (var i = 0; i < n; i++) {
      var randomSC = Math.floor(Math.random() * sCharArr.length);
      var randomSCString = sCharArr[randomSC]
      randomSCs.push(randomSCString);
    }

  console.log(randomSCs);

  var randomSCJoined = randomSCs.join('');

  console.log(randomSCJoined);

  if (answer2 == false && answer3 == false && answer4 == false && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomSCJoined;
  }

  // num+lcase

  var numLCArr = [...lCaseArr, ...numbersArr];
  var randomNumLCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumLC = Math.floor(Math.random() * numLCArr.length);
      var randomNumLCString = numLCArr[randomNumLC]
      randomNumLCs.push(randomNumLCString);
    }

  console.log(randomNumLCs);

  var randomNumLCJoined = randomNumLCs.join('');

  console.log(randomNumLCJoined);

  if (answer2 == true && answer3 == true && answer4 == false && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumLCJoined;
  }


  // num+ucase

  var numUCArr = [...uCaseArr, ...numbersArr];
  var randomNumUCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumUC = Math.floor(Math.random() * numUCArr.length);
      var randomNumUCString = numUCArr[randomNumUC]
      randomNumUCs.push(randomNumUCString);
    }

  console.log(randomNumUCs);

  var randomNumUCJoined = randomNumUCs.join('');

  console.log(randomNumUCJoined);

  if (answer2 == true && answer3 == false && answer4 == true && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumUCJoined;
  }

  // num+schar

  var numSCArr = [...sCharArr, ...numbersArr];
  var randomNumSCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumSC = Math.floor(Math.random() * numSCArr.length);
      var randomNumSCString = numSCArr[randomNumSC]
      randomNumSCs.push(randomNumSCString);
    }

  console.log(randomNumSCs);

  var randomNumSCJoined = randomNumSCs.join('');

  console.log(randomNumSCJoined);

  if (answer2 == true && answer3 == false && answer4 == false && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumSCJoined;
  }

  // lcase+ucase

  var UCLCArr = [...lCaseArr, ...uCaseArr];
  var randomUCLCs = [];

  for (var i = 0; i < n; i++) {
      var randomUCLC = Math.floor(Math.random() * UCLCArr.length);
      var randomUCLCString = UCLCArr[randomUCLC]
      randomUCLCs.push(randomUCLCString);
    }

  console.log(randomUCLCs);

  var randomUCLCJoined = randomUCLCs.join('');

  console.log(randomUCLCJoined);

  if (answer2 == false && answer3 == true && answer4 == true && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomUCLCJoined;
  }

  // lcase+schar

  var SCLCArr = [...lCaseArr, ...sCharArr];
  var randomSCLCs = [];

  for (var i = 0; i < n; i++) {
      var randomSCLC = Math.floor(Math.random() * SCLCArr.length);
      var randomSCLCString = SCLCArr[randomSCLC]
      randomSCLCs.push(randomSCLCString);
    }

  console.log(randomSCLCs);

  var randomSCLCJoined = randomSCLCs.join('');

  console.log(randomSCLCJoined);

  if (answer2 == false && answer3 == true && answer4 == false && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomSCLCJoined;
  }

  // ucase+schar

  var UCSCArr = [...uCaseArr, ...sCharArr];
  var randomUCSCs = [];

  for (var i = 0; i < n; i++) {
      var randomUCSC = Math.floor(Math.random() * UCSCArr.length);
      var randomUCSCString = UCSCArr[randomUCSC]
      randomUCSCs.push(randomUCSCString);
    }

  console.log(randomUCSCs);

  var randomUCSCJoined = randomUCSCs.join('');

  console.log(randomUCSCJoined);

  if (answer2 == false && answer3 == false && answer4 == true && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomUCSCJoined;
  }

  // num+lcase+ucase

  var numLCUCArr = [...lCaseArr, ...numbersArr, ...uCaseArr];
  var randomNumLCUCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumLCUC = Math.floor(Math.random() * numLCUCArr.length);
      var randomNumLCUCString = numLCUCArr[randomNumLCUC]
      randomNumLCUCs.push(randomNumLCUCString);
    }

  console.log(randomNumLCUCs);

  var randomNumLCUCJoined = randomNumLCUCs.join('');

  console.log(randomNumLCUCJoined);

  if (answer2 == true && answer3 == true && answer4 == true && answer5 == false && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumLCUCJoined;
  }

  // num+lcase+schar

  var numLCSCArr = [...lCaseArr, ...numbersArr, ...sCharArr];
  var randomNumLCSCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumLCSC = Math.floor(Math.random() * numLCSCArr.length);
      var randomNumLCSCString = numLCSCArr[randomNumLCSC]
      randomNumLCSCs.push(randomNumLCSCString);
    }

  console.log(randomNumLCSCs);

  var randomNumLCSCJoined = randomNumLCSCs.join('');

  console.log(randomNumLCSCJoined);

  if (answer2 == true && answer3 == true && answer4 == false && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumLCSCJoined;
  }

  // num+ucase+schar

  var numUCSCArr = [...uCaseArr, ...numbersArr, ...sCharArr];
  var randomNumUCSCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumUCSC = Math.floor(Math.random() * numUCSCArr.length);
      var randomNumUCSCString = numUCSCArr[randomNumUCSC]
      randomNumUCSCs.push(randomNumUCSCString);
    }

  console.log(randomNumUCSCs);

  var randomNumUCSCJoined = randomNumUCSCs.join('');

  console.log(randomNumUCSCJoined);

  if (answer2 == true && answer3 == false && answer4 == true && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumUCSCJoined;
  }

  // lcase+ucase+schar

  var UCLCSCArr = [...lCaseArr, ...uCaseArr, ...sCharArr];
  var randomUCLCSCs = [];

  for (var i = 0; i < n; i++) {
      var randomUCLCSC = Math.floor(Math.random() * UCLCSCArr.length);
      var randomUCLCSCString = UCLCSCArr[randomUCLCSC]
      randomUCLCSCs.push(randomUCLCSCString);
    }

  console.log(randomUCLCSCs);

  var randomUCLCSCJoined = randomUCLCSCs.join('');

  console.log(randomUCLCSCJoined);

  if (answer2 == false && answer3 == true && answer4 == true && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomUCLCSCJoined;
  }

  // num+lcase+ucase+schar

  var numUCLCSCArr = [...lCaseArr, ...uCaseArr, ...sCharArr, ...numbersArr];
  var randomNumUCLCSCs = [];

  for (var i = 0; i < n; i++) {
      var randomNumUCLCSC = Math.floor(Math.random() * numUCLCSCArr.length);
      var randomNumUCLCSCString = numUCLCSCArr[randomNumUCLCSC]
      randomNumUCLCSCs.push(randomNumUCLCSCString);
    }

  console.log(randomNumUCLCSCs);

  var randomNumUCLCSCJoined = randomNumUCLCSCs.join('');

  console.log(randomNumUCLCSCJoined);

  if (answer2 == true && answer3 == true && answer4 == true && answer5 == true && answer6 == true) {
    document.getElementById("spewedPassText").value = randomNumUCLCSCJoined;

  }
  });


