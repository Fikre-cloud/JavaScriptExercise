let accountBalance = 1000;

function deposit(deposit){
    if(isNaN(deposit) || deposit<=0){
    return;
   }
    accountBalance += deposit;
    console.log(`new balance after deposit: ${accountBalance}`);
    return accountBalance;
};

const withdraw = (withdrawAmount) => {
    if(isNaN(withdrawAmount) || withdrawAmount<=0){
        return "Invalid input value";
    }
    accountBalance -= withdrawAmount;
    console.log(`new balance after withdrawal: ${accountBalance}`);
};

function viewBalance(){
    console.log(`account Balance at viewBalance: ${accountBalance}`);
};
deposit(5000.00);
withdraw(2000.00);
viewBalance();