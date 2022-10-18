let form = document.getElementById("formId");

form.addEventListener("submit", function calculate(event) {
  event.preventDefault();
  let billAmount = Number(document.querySelector(".bill-amount").value);
  let percentage = Number(document.querySelector(".percentage").value);

  let tip = document.querySelector(".tip-amount");
  tip.innerHTML = (billAmount * percentage) / 100;

  let calculateTotal = billAmount + Number(tip.innerHTML);
  let total = document.querySelector(".total-amount");
  total.innerHTML = "💸" + Math.floor(calculateTotal);

  if (billAmount === "" || percentage == "") {
    alert("Please enter both values");
    return;
  }
});
