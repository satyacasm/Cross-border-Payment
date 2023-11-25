//SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;
import "./token.sol";

contract basic{
    
    struct transaction{
        uint256 id;
        uint256 timestamp;
        address sender;
        address receiver;
        uint256 amount;
        uint256 charges;
        string status;
        
    }
    uint counter;
    transaction[] public Transactions;
    Token token=new Token("Rizzler","RIZZ",100000,address(this));
    
    // address owner;
    uint percentCommission;
    constructor(uint _commission){
        percentCommission=_commission; 
        counter=0;
    }
    // mapping (address => uint) balance;
    
    event Deposit(
        address user,
        uint256 amount,
        uint256 balance
    );
    event Withdraw(
        address user,
        uint256 amount,
        uint256 balance
    );
    event Transfer(
        address from,
        address to,
        uint256 balance
    );
    function depositToken(uint256 _amount) public {
        uint256 commissionAmt = (percentCommission * _amount) / 100;
        uint256 realAmount = _amount;
        _amount += commissionAmt;
        require(_amount <= token._getBalance(address(this)));
        unchecked {
            counter++;
        }
        // Create the transaction and update its status before pushing
        transaction memory transact = transaction(counter, block.timestamp, address(this), msg.sender, realAmount, commissionAmt, "FAILED");
        require(token.transferFrom(address(this), msg.sender, realAmount));
        // Update the status to "SUCCESSFUL"
        transact.status = "SUCCESSFUL";
        // Push the transaction into the array
        Transactions.push(transact);
        emit Deposit(msg.sender, _amount, token._getBalance(msg.sender));
    }

    function balanceOf() public view returns(uint256){
        return token._getBalance(msg.sender);
    }
    function findBalance(address addr) public view returns(uint256){
        return token._getBalance(addr);
    }
    
    function withdrawToken(uint256 _amount) public {
        uint256 commissionAmt = (percentCommission * _amount) / 100;
        uint256 realAmount = _amount;
        _amount += commissionAmt;
        require(token._getBalance(msg.sender) >= _amount, "Insufficient deposit amount");
        unchecked {
            counter++;
        }
        transaction memory transact = transaction(counter, block.timestamp, msg.sender, address(this), realAmount, commissionAmt, "FAILED");
        require(token.transferFrom(msg.sender, address(this), _amount));
        // Create the transaction and update its status before storing
        transact.status = "SUCCESSFUL";
        // Store the transaction in the array
        Transactions.push(transact);
        emit Withdraw(msg.sender, _amount, token._getBalance(msg.sender));
    }

    function transfer(address to, uint256 amount) public returns(bool){
        uint256 commissionAmt=(percentCommission * amount)/100;
        uint256 realAmount=amount;
        amount+=commissionAmt;
        unchecked {
            counter++;
        }
        transaction memory transact = transaction(counter,block.timestamp,msg.sender,to,realAmount,commissionAmt,"FAILED");
        require(token._transfer(msg.sender, to,realAmount));
        require(token._transfer(msg.sender, address(this),commissionAmt));
        transact.status = "SUCCESSFUL";
        Transactions.push(transact);
        emit Transfer(msg.sender,to,token._getBalance(msg.sender));
        return true;
    }

    function getTransaction(uint256 _id) public view returns(transaction memory){
        require(_id>0 && _id<=counter,"Invalid Transaction ID");
        transaction storage _transact = Transactions[_id];
        return _transact;
    }

    function getAllTransactions() public view returns(transaction[] memory){
        return Transactions;
    }

}