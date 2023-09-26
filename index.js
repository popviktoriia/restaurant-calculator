const btnCalculate = document.querySelector ("#btnCalculate");
const btnAddTip = document.querySelector ("#btnAddTip");

btnCalculate.addEventListener ("click", calculateAmount);
btnAddTip.addEventListener ("click", showTipOptions);

function showTipOptions (e) {
    e.preventDefault();
    tip.style.display = "block";
}

function calculateAmount (e) {
    e.preventDefault();
    const bill = document.querySelector ("#bill").value;
    const people = document.querySelector ("#people").value;
    const tip = document.querySelector ("#tip").value;
    
    if (bill ==="" || people ==="" || people < 1) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter all data!',
        })
    }
    
    let moneyPerPerson = bill/people;
    let tipPerPerson = (bill*tip)/people;
    let totalMoney = moneyPerPerson + tipPerPerson;

    moneyPerPerson = moneyPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalMoney = totalMoney.toFixed(2);
    
    document.querySelector ("#dividedBill").textContent = moneyPerPerson;
    document.querySelector ("#dividedTip").textContent = tipPerPerson;
    document.querySelector ("#billAndTip").textContent = totalMoney;
}

gsap.from(".containerOne", {x: 400, duration: 1.5, delay: 1, opacity: 0.1})
gsap.from(".containerThree", {x: -700, duration: 1.5, delay: 3.5, opacity: 0.8})
gsap.from("h1", {y: -100, delay: 5.5, ease: "powerOut"})