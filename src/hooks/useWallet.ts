import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi';
import { useReadContract, useWriteContract } from 'wagmi';
import { CONTRACT_ADDRESS, VAULT_LUXE_FINANCE_ABI } from '@/lib/contracts';

export const useWallet = () => {
  const { address, isConnected, isConnecting } = useAccount();
  const { connect, connectors, error: connectError } = useConnect();
  const { disconnect } = useDisconnect();
  const { data: balance } = useBalance({ address });
  const { writeContract } = useWriteContract();

  return {
    address,
    isConnected,
    isConnecting,
    connect,
    connectors,
    connectError,
    disconnect,
    balance,
    writeContract
  };
};

export const useContract = () => {
  const { writeContract } = useWriteContract();

  const registerAsset = async (
    assetType: string,
    description: string,
    metadataHash: string,
    value: number,
    appraisalScore: number
  ) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: VAULT_LUXE_FINANCE_ABI,
        functionName: 'registerAsset',
        args: [assetType, description, metadataHash, value, appraisalScore]
      });
      return hash;
    } catch (error) {
      console.error('Error registering asset:', error);
      throw error;
    }
  };

  const createVault = async (
    vaultName: string,
    description: string,
    isPublic: boolean
  ) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: VAULT_LUXE_FINANCE_ABI,
        functionName: 'createVault',
        args: [vaultName, description, isPublic]
      });
      return hash;
    } catch (error) {
      console.error('Error creating vault:', error);
      throw error;
    }
  };

  const addAssetToVault = async (vaultId: number, assetId: number) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: VAULT_LUXE_FINANCE_ABI,
        functionName: 'addAssetToVault',
        args: [vaultId, assetId]
      });
      return hash;
    } catch (error) {
      console.error('Error adding asset to vault:', error);
      throw error;
    }
  };

  const requestFinancing = async (
    vaultId: number,
    requestedAmount: number,
    interestRate: number,
    deadline: number
  ) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: VAULT_LUXE_FINANCE_ABI,
        functionName: 'requestFinancing',
        args: [vaultId, requestedAmount, interestRate, deadline]
      });
      return hash;
    } catch (error) {
      console.error('Error requesting financing:', error);
      throw error;
    }
  };

  const executeTransaction = async (
    to: string,
    amount: number,
    transactionType: string
  ) => {
    try {
      const hash = await writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: VAULT_LUXE_FINANCE_ABI,
        functionName: 'executeTransaction',
        args: [to, amount, transactionType]
      });
      return hash;
    } catch (error) {
      console.error('Error executing transaction:', error);
      throw error;
    }
  };

  return {
    registerAsset,
    createVault,
    addAssetToVault,
    requestFinancing,
    executeTransaction
  };
};
