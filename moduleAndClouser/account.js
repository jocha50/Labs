window.onload = () => {
    const createAccount = document.getElementById('createAccount');
    createAccount.onclick = createNewAccount().result;
};

var accountList = [];
var createNewAccount = (function () {
    'use strict';
    var accountType = "";
    var depositAmount = 0;

    console.log("here");
    function updateInfo(accType, depo) {
        console.log("here2");
        accountType = accType;
        depositAmount = depo;
    }
    return {
        result: function () {
            updateInfo(document.getElementById('accountName').value, document.getElementById('deposit').value);
            accountList.push({
                AccountName: accountType,
                Balance: depositAmount
            });
            console.log(accountList);

            let textOnTextArea = '';
            for (let i = 0; i < accountList.length; i++) {
                textOnTextArea += "\nAccount Name:  " + accountList[i].AccountName + " \tBalance: " + accountList[i].Balance;
            }

            document.getElementById('listOfAccounts').value = textOnTextArea;
        }

    };
});



