// SPDX-License-Identifier: MIT

pragma solidity ^0.8.13;

import "./IERC20.sol";

contract ProjectToken is IERC20 {
    string private _name;
    string private _symbol;
    uint8 private _decimals;
    uint256 private _totalSupply;
    uint256 private _availableSupply;
    address private _owner;
    uint256 private _totalDonations;
    uint256 private _balance;
    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    mapping(address => uint256) private _lastClaimedTime;
    mapping(address => uint256) private _supporters;

    constructor() {
        _name = "Open Avenues Thirdweb Token";
        _symbol = "OATT";
        _decimals = 3;
        _totalSupply = 12_001_091 * 10 ** _decimals;
        _availableSupply = _totalSupply;
        _owner = msg.sender;
        _balances[_owner] = _availableSupply;
        _balance = 0;
        _totalDonations = 0;
    }

    modifier ownerOnly() {
        require(msg.sender == _owner, "Not enough privileges");
        _;
    }

    modifier notOwner() {
        require(msg.sender != _owner, "Owner not allowed to");
        _;
    }

    function name() external view returns (string memory) {
        return _name;
    }

    function symbol() external view returns (string memory) {
        return _symbol;
    }

    function decimals() external view returns (uint8) {
        return _decimals;
    }

    function timeToClaim() external view returns (uint256) {
        if (
            _lastClaimedTime[msg.sender] == 0 ||
            _lastClaimedTime[msg.sender] < block.timestamp
        ) return 0;
        // return "May claim now";
        else return _lastClaimedTime[msg.sender] - block.timestamp;
        // return "May claim in " + string(_lastClaimedTime[msg.sender] - block.timestamp);
    }

    function claimTokens(uint256 amount) external notOwner returns (bool) {
        require(_availableSupply >= amount, "Not enough Token supply");
        require(_claim(amount), "Not enough time passed");
        return true;
    }

    function _claim(uint256 amount) internal returns (bool) {
        require(amount <= 1_000_000, "Not allowed");
        uint256 _timeToClaim = block.timestamp;
        require(
            _lastClaimedTime[msg.sender] == 0 ||
                _lastClaimedTime[msg.sender] < _timeToClaim,
            "Not enough time passed"
        );
        if (amount <= 5_000) {
            _timeToClaim += 1 minutes;
        } else if (amount <= 100_000) {
            _timeToClaim += 1 hours;
        } else if (amount <= 1_000_000) {
            _timeToClaim += 24 hours;
        }
        _transfer(_owner, msg.sender, amount);
        _lastClaimedTime[msg.sender] = _timeToClaim;
        return true;
    }

    function fund(
        address to,
        uint256 amount
    ) external ownerOnly returns (bool) {
        require(msg.sender == _owner, "Only owner can fund");
        require(_totalSupply >= amount, "Not enough Token supply");
        require(msg.sender != to, "Not allowed");
        _transfer(_owner, to, amount);
        return true;
    }

    function _transfer(address from, address to, uint256 amount) internal {
        require(to != address(0), "Invalid recipient address");
        require(_balances[from] >= amount, "Not enough balance");
        if (from == _owner) {
            _availableSupply -= amount;
        }
        _balances[from] -= amount;
        _balances[to] += amount;
        emit Transfer(from, to, amount);
    }

    function availableSupply() external view returns (uint256) {
        return _availableSupply;
    }

    function totalSupply() external view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) external view returns (uint256) {
        return _balances[account];
    }

    function myBalance() external view returns (uint256) {
        return _balances[msg.sender];
    }

    function transfer(address to, uint256 amount) external returns (bool) {
        _transfer(msg.sender, to, amount);
        return true;
    }

    function allowance(
        address owner,
        address spender
    ) external view returns (uint256) {
        return _allowances[owner][spender];
    }

    function approve(address spender, uint256 amount) external returns (bool) {
        _allowances[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool) {
        if (msg.sender != from) {
            require(
                _allowances[from][msg.sender] >= amount,
                "Not enough allowance"
            );
            require(_balances[from] >= amount, "Not enough balance");
            _allowances[from][msg.sender] -= amount;
        }
        _transfer(from, to, amount);
        return true;
    }

    function mint(uint256 amount) external ownerOnly returns (bool) {
        _totalSupply += amount;
        _availableSupply += amount;
        _balances[_owner] += amount;
        return true;
    }

    function burn(uint256 amount) external ownerOnly returns (bool) {
        require(_balances[_owner] >= amount, "Not enough balance");
        require(_availableSupply > _totalSupply / 10, "Not allowed");
        _totalSupply -= amount;
        _availableSupply -= amount;
        _balances[_owner] -= amount;
        return true;
    }

    function support(uint256 amount) external payable notOwner returns (bool) {
        require(msg.value == amount, "Amount cannot be 0");
        require(msg.value > 0, "Message value should be greater than 0");
        _balance += msg.value;
        _totalDonations += msg.value;
        return true;
    }

    function withdraw(uint256 amount) external ownerOnly returns (bool) {
        require(_balance >= amount, "Insufficient contract balance");
        payable(msg.sender).transfer(amount);
        _balance -= amount;
        return true;
    }
}
