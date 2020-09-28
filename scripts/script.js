var UIcontroller = (function () {
  var DOMstrings = {
    question: ".question",
    input: "#input-field",
    submit: "#submit-button",
    answer: ".answer",
    score: "#score",
  };
  var DOMinputs = {
    questionField: document.querySelector(DOMstrings.question),
    inputField: document.querySelector(DOMstrings.input),
    button: document.querySelector(DOMstrings.submit),
    answerField: document.querySelector(DOMstrings.answer),
    scoreField: document.querySelector(DOMstrings.score),
    typeField: document.querySelector("#typeIs").childNodes[1].id,
  };
  var data = {
    result: 0,
    score: 0,
  };

  DOMinputs.scoreField.textContent = data.score;
  //Button on click !Start
  DOMinputs.button.addEventListener("click", btnOnClick);
  document.addEventListener("keypress", function (event) {
    if (event.key === 13 || event.which === 13) {
      btnOnClick();
    }
  });
  function btnOnClick() {
    if (DOMinputs.inputField.value == data.result) {
      DOMinputs.answerField.innerHTML = `<span class="correct"> Your answer was correct </span>`;
      data.score += 1;
      DOMinputs.scoreField.textContent = data.score;
    } else {
      DOMinputs.answerField.innerHTML = `<span class="wrong"> Your answer was incorrect <br> The correct answer was <span style="color:black">"${data.result}" </span></span>`;
      data.score -= 1;
      DOMinputs.scoreField.textContent = data.score;
    }
    console.log(DOMinputs.inputField.value);
    console.log(data.result);
    theMath(UIcontroller).init();
  }
  //Button on click !End
  return {
    getInputs: function () {
      return DOMinputs;
    },
    getData: function () {
      return data;
    },
    test: function () {
      console.log(data);
    },
  };
})();
var theMath = function (UIctrl) {
  var randomNum1,
    randomNum2,
    DOMdata,
    multiplicationTable1,
    multiplicationTable2;

  DOMinputs = UIctrl.getInputs();
  DOMdata = UIctrl.getData();
  return {
    getTheMath: function () {
      randomNum1 = Math.floor(Math.random() * 101);
      randomNum2 = Math.floor(Math.random() * 101);

      multiplicationTable1 = Math.floor(Math.random() * 10 + 1);
      multiplicationTable2 = Math.floor(Math.random() * 10 + 1);

      DOMtype = DOMinputs.typeField;

      if (DOMtype == "+") {
        DOMinputs.questionField.textContent = `${randomNum1} + ${randomNum2}`;
        DOMdata.result = randomNum1 + randomNum2;

        console.log("+", DOMdata.result);
        console.log(UIcontroller.test());
        if (DOMdata.result > 100) {
          this.getTheMath();
        }
      } else if (DOMtype == "-") {
        DOMinputs.questionField.textContent = `${randomNum1} - ${randomNum2}`;
        DOMdata.result = randomNum1 - randomNum2;
        console.log("-", DOMdata.result);
        console.log(UIcontroller.test());
        if (
          DOMdata.result > 100 ||
          randomNum1 < randomNum2 ||
          DOMdata.result == 0
        ) {
          this.getTheMath();
        }
      } else if (DOMtype == "*") {
        DOMinputs.questionField.textContent = `${multiplicationTable1} * ${multiplicationTable2}`;
        DOMdata.result = multiplicationTable1 * multiplicationTable2;
        console.log("*", DOMdata.result);
        console.log(UIcontroller.test());
        if (
          DOMdata.result > 100 ||
          randomNum1 == 0 ||
          randomNum2 == 0 ||
          randomNum1 == 1 ||
          randomNum2 == 1
        ) {
          this.getTheMath();
        }
      } else if (DOMtype == "/") {
        var randomNum = Math.floor(Math.random() * 9) + 2;
        var randomNumE10 = Math.floor(Math.random() * 9 + 1);

        var testingArray = [
          //0
          ["testing0"],
          //1
          ["testing1"],
          //2
          [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
          //3
          [3, 6, 9, 12, 15, 18, 21, 24, 27, 30],
          //4
          [4, 8, 12, 16, 20, 24, 28, 32, 36, 40],
          //5
          [5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
          //6
          [6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
          //7
          [7, 14, 21, 28, 35, 42, 49, 56, 63, 70],
          //8
          [8, 16, 24, 32, 40, 48, 56, 64, 72, 80],
          //9
          [9, 18, 27, 36, 45, 54, 63, 72, 81, 90],
          //10
          [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
        ];
        DOMinputs.questionField.textContent =
          testingArray[randomNum][randomNumE10] + " / " + randomNum;
        DOMdata.result = testingArray[randomNum][randomNumE10] / randomNum;
        console.log(
          "Result: " + testingArray[randomNum][randomNumE10] / randomNum
        );
        console.log("Divider: " + randomNum);
        console.log("Divisible: " + testingArray[randomNum][randomNumE10]);
        // DOMinputs.questionField.textContent =
        //   testingArray[randomNum][randomNumE10] + " / " + randomNumE10;
        // DOMdata.result = testingArray[randomNum][randomNumE10] / randomNumE10;
        // console.log("RandomNum: " + randomNum);
        // console.log("The result: " + testingArray[randomNum][randomNumE10]);
        // console.log("divider " + randomNumE10);
      } else {
        console.log("You have error somewhere!");
        console.log(DOMinputs.type);
        if (DOMdata.result > 100) {
          this.getTheMath();
        }
      }
    },
    init: function () {
      return [
        this.getTheMath(),
        (DOMinputs.inputField.value = ""),
        DOMinputs.inputField.focus(),
      ];
    },
  };
};

theMath(UIcontroller).getTheMath();
var init = function () {
  var DOMinputs = UIcontroller.getInputs();
  DOMinputs.inputField = "";
};
