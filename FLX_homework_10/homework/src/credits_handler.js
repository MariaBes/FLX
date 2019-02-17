function userCard(id) {
    let key = id;
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let maxId = 3;

    let getCardOptions = function () {
        return {
            key: key,
            balance: balance,
            transactionLimit: transactionLimit,
            historyLogs: historyLogs
        }
    };

    let putCredits = function (amount) {
        balance = balance + amount;
        createHistory('Received credits', amount, new Date());
    };

    let takeCredits = function (amount) {
        if (amount <= transactionLimit && amount <= balance) {
            balance = balance - amount;
            createHistory('Withdrawal of credits', amount, new Date());

            return true;
        } else {
            console.error(`You have remaining balance: ${balance} with transaction limit: ${transactionLimit}.
             Don't forget about tax 0.5% which added to amount, during transfer operation`);

            return false;
        }
    };

    let setTransactionLimit = function (amount) {
        transactionLimit = amount;
        createHistory('Transaction limit change', amount, new Date());
    };

    let transferCredits = function (amount, recipient) {
        let discountPersent = 0.5;
        let persent = 100;
        let withTax = amount + amount * discountPersent / persent;
        if (recipient) {
            if (takeCredits(withTax)) {
                recipient.putCredits(amount);
            }

        }
    };

    let createHistory = function (type, amount, time) {
        function dateFormatting(datePart) {
            if (datePart.toString().length === 1) {
                datePart = '0' + datePart;

                return datePart;
            } else {
                return datePart;
            }
        }

        let historyItem = {
            operationType: type,
            credits: amount,
            operationTime: time.getDate() + '/' + dateFormatting(time.getMonth() + 1) + '/' +
                time.getFullYear() + ', ' + dateFormatting(time.getHours()) + ':' +
                dateFormatting(time.getMinutes()) + ':' + dateFormatting(time.getSeconds())
        };
        historyLogs.push(historyItem);

        return historyLogs;
    };

    if(id>=1&&id<=maxId){
    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    }
    }else{
        console.error('You choose card index out of range [1,3]');
    }
}


class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards=[];
        this.maxLength=3;
    }
    addCard() {
        if(this.cards.length<this.maxLength){
        this.cards.push(userCard(this.cards.length+1));
        }
    }
    getCardByKey(id){
   return this.cards[id-1];
    }
}

