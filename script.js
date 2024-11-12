let weight = document.querySelector(".weight");
let wError = document.querySelector(".wError");
let height = document.querySelector(".height");
let hError = document.querySelector(".hError");
let btn = document.querySelector(".btn");
let result = document.querySelector(".result");
let condition = document.querySelector(".condition");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");

btn.addEventListener("click", function () {
  if (weight.value == "") {
    wError.innerHTML = "Input Weight!";
  } else {
    wError.innerHTML = "";
  }
  if (height.value == "") {
    hError.innerHTML = "Input Height!";
  } else {
    hError.innerHTML = "";
  }

  if (!weight.value == "" && !height.value == "") {
    let bmi = ((weight.value * 2.20462) / (height.value * 12) ** 2) * 703;
    result.innerHTML = bmi.toFixed(2);

    if (bmi <= 18.4) {
      condition.innerHTML = "Underweight";
      result.style.background = "#a47e1b";
      condition.style.background = "#a47e1b";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      condition.innerHTML = "Healthy";
      result.style.background = "#007f5f";
      condition.style.background = "#007f5f";
    } else if (bmi >= 25 && bmi <= 29.9) {
      condition.innerHTML = "Overweight";
      result.style.background = "orange";
      condition.style.background = "orange";
    } else {
      condition.innerHTML = "Obese";
      result.style.background = "red";
      condition.style.background = "red";
    }
  }
});

btn3.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "#ffafcc";

  document.querySelector("h1").style.color = "#ff0054";
  document.querySelector("h1").innerHTML = "GIRLS BMI CALCULATOR";

  weight.style.borderColor = "#ff0054";
  height.style.borderColor = "#ff0054";

  document.querySelector(".w_labelline").style.color = "#ff0054";
  document.querySelector(".h_labelline").style.color = "#ff0054";

  document.querySelector("input:focus").style.color = "#ff0054";

  wError.style.background = "#ff0054";
  hError.style.color = "#ff0054";

  document.querySelector(".wlabel").style.color = "#ff0054";
  document.querySelector(".hlabel").style.color = "#ff0054";

  btn.style.backgroundColor = "#ff0054";
  result.style.backgroundColor = "#ff0054";
  condition.style.backgroundColor = "#ff0054";
});
