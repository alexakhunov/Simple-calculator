let first_number = document.querySelector(".first_number");
let second_number = document.querySelector(".second_number");
let btn_sum = document.querySelector(".sum");
let btn_minus = document.querySelector(".minus");
let btn_multiply = document.querySelector(".multiply");
let btn_divide = document.querySelector(".divide");
let div_1 = document.querySelector(".one");
let div_2 = document.querySelector(".two");
let div_3 = document.querySelector(".three");
let div_4 = document.querySelector(".four");

btn_sum.onclick = () => {
  let result_of_sum = +first_number.value + +second_number.value;
  div_1.innerHTML = "<p class='operation_1'>" + result_of_sum + "</p>";
};

btn_minus.onclick = () => {
  let result_of_minus = +first_number.value - +second_number.value;
  div_2.innerHTML = "<p class='operation_2'>" + result_of_minus + "</p>";
};

btn_multiply.onclick = () => {
  let result_of_multiply = +first_number.value * +second_number.value;
  div_3.innerHTML = "<p class='operation_3'>" + result_of_multiply + "</p>";
};

btn_divide.onclick = () => {
  let result_of_divide = +first_number.value / +second_number.value;
  div_4.innerHTML = "<p class='operation_4'>" + result_of_divide + "</p>";
};

let header = document.getElementById("myDIV");
let btns = header.getElementsByClassName("btn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
