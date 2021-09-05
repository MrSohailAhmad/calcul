function getHistory() {
  return document.getElementById("history-value").innerText;
}

function putHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerText;
}

function putOutput(num) {
  if (num == "") {
    document.getElementById("output-value").innerText = num;
  } else {
    document.getElementById("output-value").innerText = putInputInFormat(num);
  }
}

function putInputInFormat(num) {
  if (num == "-") {
    return "";
  }
  let numbers = Number(num);
  let value = numbers.toLocaleString("en");
  return value;
}

function putOutputInFormat(num) {
  return Number(num.replace(/,/g, ""));
}

var operater = document.getElementsByClassName("operater");

for (var opratr = 0; opratr < operater.length; opratr++) {
  operater[opratr].addEventListener("click", function () {
    if (this.id == "clear") {
      putHistory("");
      putOutput("");
    }
    if (this.id == "backspace") {
      var output = putOutputInFormat(getOutput()).toString();
      if (output) {
        output = output.substr(0, output.length - 1);
        putOutput(output);
      }
    } else {
      var output = getOutput();
      let history = getHistory();
      if (output == "" && history != "") {
        if (isNaN(history[history.length - 1])) {
          history = history.substr(0, history.length - 1);
        }
      }
      if (output != "" || history != "") {
        output = output == "" ? output : putOutputInFormat(output);
        history = history + output;
        if (this.id == "=") {
          var result = eval(history);
          putOutput(result);
          putHistory("");
        } else {
          history = history + this.id;
          putHistory(history);
          putOutput("");
        }
      }
    }
  });
}
//
var number = document.getElementsByClassName("number");

for (var opratr = 0; opratr < number.length; opratr++) {
  number[opratr].addEventListener("click", function () {
    var output = putOutputInFormat(getOutput());
    if (output != NaN) {
      output = output + this.id;
      putOutput(output);
    }
  });
}
