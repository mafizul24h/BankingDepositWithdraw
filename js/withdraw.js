document.getElementById('btn-withdraw').addEventListener('click', function(){
    // console.log('Withdraw Button');

    const inputWithdrawElement = document.getElementById('user-withdraw');
    const inputWithdrawString = inputWithdrawElement.value;
    const inputWithdraw = parseFloat(inputWithdrawString);
    // console.log(inputWithdraw);

    inputWithdrawElement.value = '';

    if(isNaN(inputWithdraw)){
        alert('Please input valid number');
        return;
    }

    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrowString = previousWithdrawElement.innerText;
    const previousWithdraw = parseFloat(previousWithdrowString);
    // console.log(previousWithdraw);

    

    const previousBalanceElement = document.getElementById('balance-total');
    const previousBalanceString = previousBalanceElement.innerText;
    const previousBalance = parseFloat(previousBalanceString);
    // console.log(previousBalance);

    if(inputWithdraw > previousBalance){
        alert('Insufficient Balance');
        return;
    }

    const currentWithdrawBalance = previousWithdraw + inputWithdraw;
    const currentWithdrawAmount = currentWithdrawBalance.toFixed(2);
    // console.log(currentWithdrawBalance);
    previousWithdrawElement.innerText = currentWithdrawAmount;

    const currentBalanceTotal = previousBalance - inputWithdraw;
    const currentBalanceAmount = currentBalanceTotal.toFixed(2);
    previousBalanceElement.innerText = currentBalanceAmount;
})