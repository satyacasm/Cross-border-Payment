import {ethers} from "ethers";
const {abi} = require("./contracts/basicABI.json");

const provider = new ethers.BrowserProvider(window.ethereum)
await provider.send("eth_requestAccounts",[]);
const signer  = await provider.getSigner();
const contract = new ethers.Contract("0xc1c23A850CF85bD3E9169c55A27C5e4614cFa767",abi,signer);
async function main() {
  
  console.log("balance is "+await contract.balanceOf());
 
}

async function balance(){
  const balance = await contract.balanceOf();
  return balance;
}

async function deposit(amount){
  const deposit = await contract.depositToken(amount);
  contract.on("Deposit",(user,amount,balance)=>{
    return {user,amount,balance};
  })
}
async function withdrawal(amount){
  const withdrawal = await contract.withdrawToken(amount);
  contract.on("Withdraw",(user,amount,balance)=>{
    return {user,amount,balance};
  })
}
async function transfer(to,amount){
  const transfer = await contract.transfer(to,amount);
  contract.on("Transfer",(from,to,balance)=>{
    return {from,to,balance};
  })
}
async function getAllTransactions(){
//   const getAllTransactions = await contract.getAllTransactions();
//   return getAllTransactions;
  const transactions = await contract.getAllTransactions();
 const transactionsArray = transactions.toArray();
 const transactionsJson = transactionsArray.map((transaction) => {
	// console.log(transaction);
  return {
    counter: Number(transaction[0]),
    timestamp: Number(transaction[1]),
    from: transaction[2],
    to: transaction[3],
    amount: Number(transaction[4]),
    charges: Number(transaction[5]),
    status: transaction[6]
  };
 });
//  console.log(transactionsJson);
 return transactionsJson;
}

async function findBalance(addr){
  const findBalance = await contract.findBalance(addr);
  return findBalance;
}

export {main,balance,deposit,withdrawal,transfer,getAllTransactions,findBalance};
