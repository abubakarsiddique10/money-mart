
function inputValue(inputId) {
    let inputTex = document.getElementById('total-' + inputId);
    let inputNumber = parseFloat(inputTex.value);
    inputTex.value = '';
    return inputNumber;
}
document.getElementById('calculate-btn').addEventListener('click', function () {
    let totalIncome = inputValue('income');
    let foodCost = inputValue('food-cost');
    let rentCost = inputValue('rent-cost');
    let clothCost = inputValue('cloth-cost');
    // calculating total income and total cost
    let totalCost = foodCost + rentCost + clothCost;
    let Balance = totalIncome - totalCost;
    document.getElementById('total-expenses').innerText = totalCost;
    document.getElementById('balance').innerText = Balance;
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
    // select saving amount, remaining balance and calculating
    let saving = document.getElementById('savign-amount');
    let savingAmount = totalIncome * parcentage / 100;
    saving.innerText = savingAmount
    let reaminingBalance = document.getElementById('remaining-balance');
    reaminingBalance.innerText = balance - savingAmount;
})
