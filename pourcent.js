

function calc () {
  let number = document.getElementById("firstNumber").value;
  let total = document.getElementById("secondNumber").value;
 
  let final = 100 * number / total;

  let result = document.getElementById("result");
  result.innerHTML = "= " + final + "%";
}

function calcc () {
  let numberr = document.getElementById("firstNumber1").value;
  let totall = document.getElementById("secondNumber1").value;
 
  let finall = numberr/100*totall;
  
  let resultt = document.getElementById("result2");
  resultt.innerHTML = "= " + finall;
}

function calccc () {
  let numberrr = document.getElementById("firstNumber2").value;
  let pourcent = document.getElementById("secondNumber2").value;

let result3 = document.getElementById("result3");
let upOrDown = document.getElementById("upOrDown").value;
  
  if (upOrDown === "Up") {
    result3.innerHTML = "= " + numberrr * (1 + (pourcent / 100));
  } else if (upOrDown === "Down") {
    result3.innerHTML = "= " + numberrr * (1 - (pourcent / 100));
  }
}