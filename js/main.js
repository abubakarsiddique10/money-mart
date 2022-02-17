
function inputValue(inputId, i) {
    let inputTex = document.getElementById('total-' + inputId);
    let inputNumber = parseFloat(inputTex.value);
    if (isNaN(inputNumber)) {
        document.getElementsByClassName('error')[i].style.display = 'block';
        inputTex.value = '';
    }
    else {
        inputTex.value = '';
        return inputNumber;
    }
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    let totalIncome = inputValue('income', 0);
    let foodCost = inputValue('food-cost', 1);
    let rentCost = inputValue('rent-cost', 2);
    let clothCost = inputValue('cloth-cost', 3);
    // calculating total income and total cost
    let totalCost = foodCost + rentCost + clothCost;
    if (totalCost > totalIncome) {
        console.log('vole number')
    }
    else {
        if (typeof totalIncome == 'number' && typeof totalCost == 'number') {
            let Balance = totalIncome - totalCost;
            document.getElementById('total-expenses').innerText = totalCost;
            document.getElementById('balance').innerText = Balance;
        }
    }
})
document.getElementById('save-btn').addEventListener('click', function () {
    // select total expenses, balance and calculating
    let getExpenses = document.getElementById('total-expenses').innerText;
    let totalExpenses = parseInt(getExpenses)
    let getBalance = document.getElementById('balance').innerText;
    let balance = parseInt(getBalance);
    let totalIncome = totalExpenses + balance;
    // get parcentage input value
    let parcentage = inputValue('parcentage-input')
    if (isNaN(parcentage)) {
        console.log('please enter numer')
    }
    // select saving amount, remaining balance and calculating
    else {
        let saving = document.getElementById('savign-amount');
        let savingAmount = totalIncome * parcentage / 100;
        saving.innerText = savingAmount
        let reaminingBalance = document.getElementById('remaining-balance');
        reaminingBalance.innerText = balance - savingAmount;
    }
})