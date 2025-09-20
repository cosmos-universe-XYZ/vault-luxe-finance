// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@fhevm/lib/Reencrypt.sol";
import "@fhevm/lib/Fhe.sol";

contract VaultLuxeFinance {
    using Fhe for euint32;
    using Fhe for ebool;
    
    struct LuxuryAsset {
        euint32 assetId;
        euint32 value;
        euint32 appraisalScore;
        ebool isVerified;
        ebool isAvailable;
        string assetType;
        string description;
        string metadataHash;
        address owner;
        uint256 registrationTime;
        uint256 lastAppraisal;
    }
    
    struct Vault {
        euint32 vaultId;
        euint32 totalValue;
        euint32 assetCount;
        ebool isActive;
        ebool isPublic;
        string vaultName;
        string description;
        address creator;
        uint256 creationTime;
    }
    
    struct FinancingRequest {
        euint32 requestId;
        euint32 requestedAmount;
        euint32 collateralValue;
        euint32 interestRate;
        ebool isApproved;
        ebool isActive;
        address borrower;
        address lender;
        uint256 requestTime;
        uint256 deadline;
    }
    
    struct EncryptedTransaction {
        euint32 transactionId;
        euint32 amount;
        ebool isEncrypted;
        address from;
        address to;
        string transactionType;
        uint256 timestamp;
        string encryptedData;
    }
    
    mapping(uint256 => LuxuryAsset) public assets;
    mapping(uint256 => Vault) public vaults;
    mapping(uint256 => FinancingRequest) public financingRequests;
    mapping(uint256 => EncryptedTransaction) public encryptedTransactions;
    mapping(address => euint32) public userReputation;
    mapping(address => euint32) public userCreditScore;
    mapping(uint256 => uint256[]) public vaultAssets;
    mapping(address => uint256[]) public userAssets;
    mapping(address => uint256[]) public userVaults;
    
    uint256 public assetCounter;
    uint256 public vaultCounter;
    uint256 public financingCounter;
    uint256 public transactionCounter;
    
    address public owner;
    address public appraiser;
    address public verifier;
    
    event AssetRegistered(uint256 indexed assetId, address indexed owner, string assetType);
    event VaultCreated(uint256 indexed vaultId, address indexed creator, string vaultName);
    event FinancingRequested(uint256 indexed requestId, address indexed borrower, uint32 amount);
    event EncryptedTransactionExecuted(uint256 indexed transactionId, address indexed from, address indexed to, uint32 amount);
    event AssetVerified(uint256 indexed assetId, bool isVerified);
    event ReputationUpdated(address indexed user, uint32 reputation);
    
    constructor(address _appraiser, address _verifier) {
        owner = msg.sender;
        appraiser = _appraiser;
        verifier = _verifier;
    }
    
    function registerAsset(
        string memory _assetType,
        string memory _description,
        string memory _metadataHash,
        euint32 _value,
        euint32 _appraisalScore
    ) public returns (uint256) {
        require(bytes(_assetType).length > 0, "Asset type cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        
        uint256 assetId = assetCounter++;
        
        assets[assetId] = LuxuryAsset({
            assetId: _value, // Will be set properly
            value: _value,
            appraisalScore: _appraisalScore,
            isVerified: Fhe.asEbool(false),
            isAvailable: Fhe.asEbool(true),
            assetType: _assetType,
            description: _description,
            metadataHash: _metadataHash,
            owner: msg.sender,
            registrationTime: block.timestamp,
            lastAppraisal: block.timestamp
        });
        
        userAssets[msg.sender].push(assetId);
        
        emit AssetRegistered(assetId, msg.sender, _assetType);
        return assetId;
    }
    
    function createVault(
        string memory _vaultName,
        string memory _description,
        ebool _isPublic
    ) public returns (uint256) {
        require(bytes(_vaultName).length > 0, "Vault name cannot be empty");
        
        uint256 vaultId = vaultCounter++;
        
        vaults[vaultId] = Vault({
            vaultId: Fhe.asEuint32(vaultId),
            totalValue: Fhe.asEuint32(0),
            assetCount: Fhe.asEuint32(0),
            isActive: Fhe.asEbool(true),
            isPublic: _isPublic,
            vaultName: _vaultName,
            description: _description,
            creator: msg.sender,
            creationTime: block.timestamp
        });
        
        userVaults[msg.sender].push(vaultId);
        
        emit VaultCreated(vaultId, msg.sender, _vaultName);
        return vaultId;
    }
    
    function addAssetToVault(
        uint256 _vaultId,
        uint256 _assetId
    ) public {
        require(assets[_assetId].owner == msg.sender, "Only asset owner can add to vault");
        require(vaults[_vaultId].creator == msg.sender, "Only vault creator can add assets");
        require(Fhe.decrypt(assets[_assetId].isAvailable), "Asset is not available");
        require(Fhe.decrypt(vaults[_vaultId].isActive), "Vault is not active");
        
        vaultAssets[_vaultId].push(_assetId);
        assets[_assetId].isAvailable = Fhe.asEbool(false);
        
        // Update vault totals
        vaults[_vaultId].totalValue = vaults[_vaultId].totalValue + assets[_assetId].value;
        vaults[_vaultId].assetCount = vaults[_vaultId].assetCount + Fhe.asEuint32(1);
    }
    
    function requestFinancing(
        uint256 _vaultId,
        euint32 _requestedAmount,
        euint32 _interestRate,
        uint256 _deadline
    ) public returns (uint256) {
        require(vaults[_vaultId].creator == msg.sender, "Only vault creator can request financing");
        require(Fhe.decrypt(vaults[_vaultId].isActive), "Vault must be active");
        require(_deadline > block.timestamp, "Deadline must be in the future");
        
        uint256 requestId = financingCounter++;
        
        financingRequests[requestId] = FinancingRequest({
            requestId: _requestedAmount, // Will be set properly
            requestedAmount: _requestedAmount,
            collateralValue: vaults[_vaultId].totalValue,
            interestRate: _interestRate,
            isApproved: Fhe.asEbool(false),
            isActive: Fhe.asEbool(true),
            borrower: msg.sender,
            lender: address(0),
            requestTime: block.timestamp,
            deadline: _deadline
        });
        
        emit FinancingRequested(requestId, msg.sender, Fhe.decrypt(_requestedAmount));
        return requestId;
    }
    
    function approveFinancing(
        uint256 _requestId,
        address _borrower
    ) public {
        require(financingRequests[_requestId].borrower == _borrower, "Invalid borrower");
        require(Fhe.decrypt(financingRequests[_requestId].isActive), "Request is not active");
        require(block.timestamp <= financingRequests[_requestId].deadline, "Request has expired");
        
        financingRequests[_requestId].isApproved = Fhe.asEbool(true);
        financingRequests[_requestId].lender = msg.sender;
    }
    
    function executeEncryptedTransaction(
        address _to,
        euint32 _amount,
        string memory _transactionType,
        string memory _encryptedData
    ) public returns (uint256) {
        require(_to != address(0), "Invalid recipient address");
        require(bytes(_transactionType).length > 0, "Transaction type cannot be empty");
        require(bytes(_encryptedData).length > 0, "Encrypted data cannot be empty");
        
        uint256 transactionId = transactionCounter++;
        
        encryptedTransactions[transactionId] = EncryptedTransaction({
            transactionId: _amount, // Will be set properly
            amount: _amount,
            isEncrypted: Fhe.asEbool(true),
            from: msg.sender,
            to: _to,
            transactionType: _transactionType,
            timestamp: block.timestamp,
            encryptedData: _encryptedData
        });
        
        emit EncryptedTransactionExecuted(transactionId, msg.sender, _to, Fhe.decrypt(_amount));
        return transactionId;
    }
    
    function processSecurePayment(
        uint256 _transactionId,
        string memory _encryptedPaymentData
    ) public {
        require(encryptedTransactions[_transactionId].from == msg.sender, "Only transaction initiator can process");
        require(bytes(_encryptedPaymentData).length > 0, "Payment data cannot be empty");
        
        // Update transaction with encrypted payment data
        encryptedTransactions[_transactionId].encryptedData = _encryptedPaymentData;
    }
    
    function verifyAsset(uint256 _assetId, ebool _isVerified) public {
        require(msg.sender == verifier, "Only verifier can verify assets");
        require(assets[_assetId].owner != address(0), "Asset does not exist");
        
        assets[_assetId].isVerified = _isVerified;
        emit AssetVerified(_assetId, Fhe.decrypt(_isVerified));
    }
    
    function updateReputation(address _user, euint32 _reputation) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(_user != address(0), "Invalid user address");
        
        userReputation[_user] = _reputation;
        emit ReputationUpdated(_user, Fhe.decrypt(_reputation));
    }
    
    function updateCreditScore(address _user, euint32 _creditScore) public {
        require(msg.sender == appraiser, "Only appraiser can update credit score");
        require(_user != address(0), "Invalid user address");
        
        userCreditScore[_user] = _creditScore;
    }
    
    function getAssetInfo(uint256 _assetId) public view returns (
        string memory assetType,
        string memory description,
        uint32 value,
        uint32 appraisalScore,
        bool isVerified,
        bool isAvailable,
        address owner,
        uint256 registrationTime
    ) {
        LuxuryAsset storage asset = assets[_assetId];
        return (
            asset.assetType,
            asset.description,
            Fhe.decrypt(asset.value),
            Fhe.decrypt(asset.appraisalScore),
            Fhe.decrypt(asset.isVerified),
            Fhe.decrypt(asset.isAvailable),
            asset.owner,
            asset.registrationTime
        );
    }
    
    function getVaultInfo(uint256 _vaultId) public view returns (
        string memory vaultName,
        string memory description,
        uint32 totalValue,
        uint32 assetCount,
        bool isActive,
        bool isPublic,
        address creator,
        uint256 creationTime
    ) {
        Vault storage vault = vaults[_vaultId];
        return (
            vault.vaultName,
            vault.description,
            Fhe.decrypt(vault.totalValue),
            Fhe.decrypt(vault.assetCount),
            Fhe.decrypt(vault.isActive),
            Fhe.decrypt(vault.isPublic),
            vault.creator,
            vault.creationTime
        );
    }
    
    function getFinancingRequestInfo(uint256 _requestId) public view returns (
        uint32 requestedAmount,
        uint32 collateralValue,
        uint32 interestRate,
        bool isApproved,
        bool isActive,
        address borrower,
        address lender,
        uint256 requestTime,
        uint256 deadline
    ) {
        FinancingRequest storage request = financingRequests[_requestId];
        return (
            Fhe.decrypt(request.requestedAmount),
            Fhe.decrypt(request.collateralValue),
            Fhe.decrypt(request.interestRate),
            Fhe.decrypt(request.isApproved),
            Fhe.decrypt(request.isActive),
            request.borrower,
            request.lender,
            request.requestTime,
            request.deadline
        );
    }
    
    function getEncryptedTransactionInfo(uint256 _transactionId) public view returns (
        uint32 amount,
        bool isEncrypted,
        address from,
        address to,
        string memory transactionType,
        uint256 timestamp,
        string memory encryptedData
    ) {
        EncryptedTransaction storage transaction = encryptedTransactions[_transactionId];
        return (
            Fhe.decrypt(transaction.amount),
            Fhe.decrypt(transaction.isEncrypted),
            transaction.from,
            transaction.to,
            transaction.transactionType,
            transaction.timestamp,
            transaction.encryptedData
        );
    }
    
    function getUserAssets(address _user) public view returns (uint256[] memory) {
        return userAssets[_user];
    }
    
    function getUserVaults(address _user) public view returns (uint256[] memory) {
        return userVaults[_user];
    }
    
    function getVaultAssets(uint256 _vaultId) public view returns (uint256[] memory) {
        return vaultAssets[_vaultId];
    }
    
    function getUserReputation(address _user) public view returns (uint32) {
        return Fhe.decrypt(userReputation[_user]);
    }
    
    function getUserCreditScore(address _user) public view returns (uint32) {
        return Fhe.decrypt(userCreditScore[_user]);
    }
}