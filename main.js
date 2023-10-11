const bill = document.getElementById("bill");
const peopleNumber = document.getElementById("people_number");
const tipsDivs = document.getElementsByClassName("tips_divs");
const custom = document.getElementById("custom");
const tipPerPerson = document.getElementById("tip_output");
const totalPerPerson = document.getElementById("total_output");
const reset = document.getElementsByTagName("button");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

bill.addEventListener("input", function () {
    billValue = Number(bill.value);
    calculations();
})

let clicked = [];
for (let i = 0; i < tipsDivs.length; i++) {
    tipsDivs[i].addEventListener("click", function () {
        tipValue = Number(tipsDivs[i].innerText.slice(0, tipsDivs[i].innerText.length - 1));
        for (let j = 0; j < clicked.length; j++) {
            clicked[j].classList.remove("clicked");
        }
        clicked.push(tipsDivs[i])
        tipsDivs[i].classList.add("clicked")
        custom.value = "";
        calculations();
    })
}

peopleNumber.addEventListener("input", function () {
    peopleValue = Number(peopleNumber.value);
    calculations();
})

custom.addEventListener("input", function () {
    tipValue = Number(custom.value)
    for (let i = 0; i < clicked.length; i++) {
        clicked[i].classList.remove("clicked")
    }
    calculations();
})

function calculations() {
    if (billValue != 0 && tipValue != 0 && peopleValue != 0) {
        tipPerPerson.innerText = "$" + ((billValue * tipValue * 0.01) / peopleValue).toFixed(2);
        totalPerPerson.innerText = "$" + ((billValue * (100 + tipValue) * 0.01) / peopleValue).toFixed(2);
    } else {
        tipPerPerson.innerText = "$0.00";
        totalPerPerson.innerText = "$0.00";
    }
}
calculations();

reset[0].addEventListener("click", function () {
    bill.value = 0;
    peopleNumber.value = 0;
    custom.value = "";
    tipPerPerson.innerText = "$0.00";
    totalPerPerson.innerText = "$0.00";
    for (let j = 0; j < clicked.length; j++) {
        clicked[j].classList.remove("clicked");
    }
})
