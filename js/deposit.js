document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('Deposit');

    const inputDeposit = document.getElementById('user-deposit');
    let inputDepositString = inputDeposit.value;
    const inputDepoistAmount = parseFloat(inputDepositString);
    console.log(inputDepoistAmount);

    inputDeposit.value = '';
})