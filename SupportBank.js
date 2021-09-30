const fs = require('fs')
const name = "Rob S"

 class Transaction{
     constructor (date, from, to, narrative, amount ){
        this.date = date;
        this.from = from;
        this.to = to;
        this.narrative = narrative
        this.amount = amount;
     }
  }

const transaction = new Transaction("11.09.2014", "Noah", "Me", "poo", 23)
const transactionamnt = transaction.amount
  class Account{
    constructor (name){
    this.name = name;
    this.balance = 0;
    }
    withdraw(amount){
      this.balance = this.balance - amount
    }
    add(amount){
      this.balance = this.balance + amount
    }
  }

const fileContents = fs.readFileSync('Transactions2014.csv', 'utf8')
const transactionsStr = fileContents.toString().split("\n")

 const transactions = [];
 const accountNames = [];
 const accountsobj = {};

for (let i = 1 ; i < transactionsStr.length; i++){
  const transactionsArr = transactionsStr[i].split(",")
  transactions.push(new Transaction(
    transactionsArr[0],
    transactionsArr[1],
    transactionsArr[2],
    transactionsArr[3],
    transactionsArr[4],
    )
  )
}

for (let o = 0; o < transactions.length; o++){
  accountNames.push(transactions[o].from)
}
//let uniqueAcc = new Set (accountNames)

for (let i = 0; i < accountNames.length ; i++){
  accountsobj[accountNames[i]] = new Account(accountNames[i])
  //console.log(accountNames[i])
}
 console.log(accountsobj)
//console.log(accountNames)
for (let o = 0; o < transactions.length; o++){
  accountsobj[transactions[o].from].withdraw(transactions[o].amount)
  accountsobj[transactions[o].to].add(transactions[o].amount)
  //console.log(accountsobj[transactions[o].from].balance)
}