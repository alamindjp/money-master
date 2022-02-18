// get input id 
function getInputValue(inputId) {
    // debugger;
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    return amountValue;;
};

// calculate total cost
function calculateCost(inputTextId, netTotalCost) {
    const inputFieldText = document.getElementById(inputTextId);
    const inputAmount = parseFloat(inputFieldText.innerText);
    const expensesValue = inputAmount + netTotalCost;
    // clear input field
    inputFieldText.innerText = expensesValue;
    return expensesValue;
};

// calculate total Balance and net Balance
function calculateBalance(inputTextId, incomeInput, netTotalCost) {
    const inputFieldText = document.getElementById(inputTextId);
    const inputAmount = parseFloat(inputFieldText.innerText);
    const totalBalance = inputAmount + incomeInput;
    // clear input field
    inputFieldText.innerText = totalBalance - netTotalCost;
    return totalBalance;
};

document.getElementById('calculate-btn').addEventListener('click', function () {

    // get incomeInput
    const incomeInput = getInputValue('total-income');
    if (isNaN(incomeInput) || incomeInput <= 0) {
        return alert('Please Check Income Amount')
    }
    else {
        income = incomeInput;
    }
    // // get food input
    const foodInput = getInputValue('food-expenses-input');
    if (isNaN(foodInput) || foodInput < 0) {
        return alert('Please Check Food Amount')
    }
    else {
        foodCost = foodInput;
    }

    // // get rent input
    const rentInput = getInputValue('rent-expenses-input');
    if (isNaN(rentInput) || rentInput < 0) {
        return alert('Please Check Rent Amount')
    }
    else {
        rentCost = rentInput;
    }

    // // get clothes input
    const clothesInput = getInputValue('clothes-expenses-input');
    if (isNaN(clothesInput) || clothesInput < 0) {
        return alert('Please Check Clothes Amount')
    }
    else {
        clothesCost = clothesInput;
    }


    // get calculate total cost
    const netTotalCost = foodCost + rentInput + clothesCost;
    if (netTotalCost > income) {
        return alert('Please Check, Income Amount and Total Cost Amount')
    }
    else {
        calculateCost('total-expenses', netTotalCost);
    }


    // get calculate net balance input
    calculateBalance('net-balance', income, netTotalCost);
});

// calculate savings 
document.getElementById('savings-btn').addEventListener('click', function () {
    // debugger;
    const savingsfield = document.getElementById('saveings-persrnts');
    const saveingsInput = parseInt(savingsfield.value);
    const savingsPresent = saveingsInput / 100;
    // get income Input
    const incomeInputField = document.getElementById('total-income');
    const inputAmount = parseFloat(incomeInputField.value);

    const totalSavingsAmount = inputAmount * savingsPresent;

    const netBalanceInputField = document.getElementById('net-balance');
    const netBalance = parseFloat(netBalanceInputField.innerText);

    // get savings Input and calculate amount

    const savingsAmountField = document.getElementById('saving-amount');
    if (isNaN(saveingsInput) || saveingsInput <= 0 || totalSavingsAmount > netBalance) {
        return alert('Please Check Your Saving Percentage')
    }
    else {
        savingsAmountField.innerText = totalSavingsAmount;
    }
    const saveingsAmount = parseFloat(savingsAmountField.innerText);
    const remainingBalance = document.getElementById('remaining-balance');
    const totalRemainingBalance = netBalance - saveingsAmount;
    remainingBalance.innerText = totalRemainingBalance;

});
