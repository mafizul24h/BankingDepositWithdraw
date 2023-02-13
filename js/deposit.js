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

    if(inputDepoistAmount <= 0){
        alert('Please input positive value');
        return;
    }

    const depositTotalElement = document.getElementById('deposit-total');
    const depositTotalString = depositTotalElement.innerText;
    const depositTotal = parseFloat(depositTotalString);
    // console.log(depositTotal);

    const currentTotalDeposit = depositTotal + inputDepoistAmount;
    // console.log(currentTotalDeposit);
    const currentTotalDepositAmount = currentTotalDeposit.toFixed(2)

    depositTotalElement.innerText = currentTotalDepositAmount;

    const balanceTotalElement = document.getElementById('balance-total');
    const balanceTotalString = balanceTotalElement.innerText;
    const balanceTotal = parseFloat(balanceTotalString);
    // console.log(balanceTotal);

    const currentBlanceTotal = balanceTotal + inputDepoistAmount;
    const currentBlanceTotalAmount = currentBlanceTotal.toFixed(2);

    balanceTotalElement.innerText = currentBlanceTotalAmount;
})