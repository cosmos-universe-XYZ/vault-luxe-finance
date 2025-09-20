// Smart contract interfaces and configurations
export const CONTRACT_ADDRESS = '0x742d35Cc6634C0532925a3b8D0C0C4C7C7C7C7C7'; // Replace with actual deployed address
export const CHAIN_ID = 11155111; // Sepolia testnet

export interface LuxuryAsset {
  assetId: number;
  value: number;
  appraisalScore: number;
  isVerified: boolean;
  isAvailable: boolean;
  assetType: string;
  description: string;
  metadataHash: string;
  owner: string;
  registrationTime: number;
  lastAppraisal: number;
}

export interface Vault {
  vaultId: number;
  totalValue: number;
  assetCount: number;
  isActive: boolean;
  isPublic: boolean;
  vaultName: string;
  description: string;
  creator: string;
  creationTime: number;
}

export interface FinancingRequest {
  requestId: number;
  requestedAmount: number;
  collateralValue: number;
  interestRate: number;
  isApproved: boolean;
  isActive: boolean;
  borrower: string;
  lender: string;
  requestTime: number;
  deadline: number;
}

export interface Transaction {
  transactionId: number;
  amount: number;
  isEncrypted: boolean;
  from: string;
  to: string;
  transactionType: string;
  timestamp: number;
}

// Contract ABI (simplified for frontend integration)
export const VAULT_LUXE_FINANCE_ABI = [
  // Asset management
  "function registerAsset(string memory _assetType, string memory _description, string memory _metadataHash, uint32 _value, uint32 _appraisalScore) external returns (uint256)",
  "function getAssetInfo(uint256 _assetId) external view returns (string memory, string memory, uint32, uint32, bool, bool, address, uint256)",
  
  // Vault management
  "function createVault(string memory _vaultName, string memory _description, bool _isPublic) external returns (uint256)",
  "function getVaultInfo(uint256 _vaultId) external view returns (string memory, string memory, uint32, uint32, bool, bool, address, uint256)",
  "function addAssetToVault(uint256 _vaultId, uint256 _assetId) external",
  
  // Financing
  "function requestFinancing(uint256 _vaultId, uint32 _requestedAmount, uint32 _interestRate, uint256 _deadline) external returns (uint256)",
  "function approveFinancing(uint256 _requestId, address _borrower) external",
  "function getFinancingRequestInfo(uint256 _requestId) external view returns (uint32, uint32, uint32, bool, bool, address, address, uint256, uint256)",
  
  // Transactions
  "function executeTransaction(address _to, uint32 _amount, string memory _transactionType) external returns (uint256)",
  
  // User data
  "function getUserAssets(address _user) external view returns (uint256[])",
  "function getUserVaults(address _user) external view returns (uint256[])",
  "function getUserReputation(address _user) external view returns (uint32)",
  "function getUserCreditScore(address _user) external view returns (uint32)",
  
  // Events
  "event AssetRegistered(uint256 indexed assetId, address indexed owner, string assetType)",
  "event VaultCreated(uint256 indexed vaultId, address indexed creator, string vaultName)",
  "event FinancingRequested(uint256 indexed requestId, address indexed borrower, uint32 amount)",
  "event TransactionExecuted(uint256 indexed transactionId, address indexed from, address indexed to, uint32 amount)"
] as const;
