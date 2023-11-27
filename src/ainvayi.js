import Web3 from 'web3';
// require('dotenv').config();
const web3 = new Web3(window.web3.currentProvider);
const contract = require('./contracts/basic.json');
var basic_contract = new web3.eth.Contract(contract.abi, "0x595a8b16d29e6D9Ec96D800a1fDa439e760BC04F");
// console.log(contract.abi);
async function main() {
    const message = await basic_contract.methods.balanceOf().call();
    console.log("The message is: " + message);
  }
export {main};