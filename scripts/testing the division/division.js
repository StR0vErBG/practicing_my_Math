var UIcontroller = (function () {
  var domStrings = {
    thequestion: ".the-question",
    input: ".inputField",
    submit: ".submitBtn",
  };
  var domInputs = {
    questionField: document.querySelector(domStrings.thequestion),
    inputField: document.querySelector(domStrings.input).value,
    submitButton: document.querySelector(domStrings.submit),
  };
  return {
    getInputFields: function () {
      return domInputs;
    },
  };
})();

var LogicController = (function (UICtrl) {
  var DOM = UICtrl.getInputFields();

  function btnOnClick() {}
  DOM.submitButton.addEventListener("click", btnOnClick);
})(UIcontroller);
