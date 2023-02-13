document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit');

    const inputDeposit = document.getElementById('user-deposit');
    let inputDepositString = inputDeposit.value;
    const inputDepoistAmount = parseFloat(inputDepositString);
    // console.log(inputDepoistAmount);

    inputDeposit.value = '';

    if(isNaN(inputDepoistAmount)){
        alert('Please input valid number');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);
    // console.log(depositTotal);

    const currentTotalDeposit = depositTotal + inputDepoistAmount;
    // console.log(currentTotalDeposit);

    depositTotalElement.innerText = currentTotalDeposit;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    // console.log(balanceTotal);

    const currentBlanceTotal = balanceTotal + inputDepoistAmount;

    balanceTotalElement.innerText = currentBlanceTotal;
})