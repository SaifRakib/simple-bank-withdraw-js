// handle deposit button

document.getElementById('deposit-btn').addEventListener('click',function() {
    //   get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    
    const previousDepositAmount = depositTotal.innerText;
    const newDepositAmount = parseInt(previousDepositAmount) + parseInt(depositAmount);

    depositTotal.innerText = newDepositAmount;

    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceAmount = parseInt(previousBalanceAmount) + parseInt(depositAmount);

    balanceTotal.innerText = newBalanceAmount;


    // clear the deposit input field
    depositInput.value = '';
});

// Handle withdraw with event handler

document.getElementById('withdraw-btn').addEventListener('click',function() {
    // get amount withdraw
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value; 

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawAmount = withdrawTotal.innerText;
    const newWithdrawAmount = parseInt(previousWithdrawAmount) + parseInt(withdrawAmount);

    withdrawTotal.innerText = newWithdrawAmount;


    // update account balance
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceAmount = balanceTotal.innerText;
    const newBalanceAmount = parseInt(previousBalanceAmount) - parseInt(withdrawAmount);

    balanceTotal.innerText = newBalanceAmount;

    // clear the deposit input field
    withdrawInput.value = '';


});