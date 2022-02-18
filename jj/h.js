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
