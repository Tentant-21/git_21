"use strict";
//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

const $EQUAL = document.querySelector("#equal");
const $result = document.querySelector(".result");
const $NUMERALS = document.querySelector(".numerals");
const negv$Sign = document.querySelector(".minus");
const $OPERATIONS = document.querySelectorAll(".operation");
const operands$Output = document.querySelector(".operands");
let inputStr = "";
const numbers = [];

$NUMERALS.addEventListener("click", function (e) {
  if (e.target.closest(".numeral") && !inputStr.includes(".")) {
    inputStr += e.target.closest(".numeral").dataset.number;
    operands$Output.textContent = inputStr;
  } else if (
    e.target.closest(".numeral") &&
    e.target.closest(".numeral").dataset.number != "."
  ) {
    inputStr += e.target.closest(".numeral").dataset.number;
    operands$Output.textContent = inputStr;
  }
});
negv$Sign.addEventListener("click", function (e) {
  if (inputStr.length == 0) {
    e.stopImmediatePropagation();
    inputStr = this.dataset.operator;
    operands$Output.textContent = inputStr;
  }
});

$OPERATIONS.forEach((operation) => {
  operation.addEventListener("click", function () {
    if (inputStr.length > 0) {
      inputStr += this.dataset.operator;
      operands$Output.textContent = inputStr;
    }
  });
});
$EQUAL.addEventListener("click", function () {
  if (inputStr) {
    try {
      $result.textContent = eval(inputStr);
      inputStr = "";
      operands$Output.textContent = inputStr;
    } catch (error) {
      $result.textContent = "error";
    }
  }
});

document.querySelector("#reset").addEventListener("click", function () {
  inputStr = "";
  operands$Output.textContent = inputStr;
  $result.textContent = inputStr;
});

document.querySelector("#del").addEventListener("click", function () {
  if (inputStr) {
    inputStr = inputStr.slice(0, -1);
    operands$Output.textContent = inputStr;
  }
});

/** ───────────────────────────────────────────────────── */
/** LIGHT THEME */
/** ───────────────────────────────────────────────────── */
const toggle$Btn = document.querySelector(".switch");

toggle$Btn.addEventListener("click", function (e) {
  if (e.target.closest(".slider")) {
    document.body.classList.toggle("light-theme");
    // console.log(this);
  }
});
