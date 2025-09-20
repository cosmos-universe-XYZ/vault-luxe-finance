# Vault Luxe Finance

A sophisticated luxury asset vault platform built with React, TypeScript, and Web3 integration. This platform enables secure management and financing of high-value assets using fully homomorphic encryption (FHE) for privacy-preserving operations.

## Features

- **Secure Asset Management**: Manage luxury assets with encrypted data storage
- **Web3 Integration**: Connect with popular wallets like Rainbow, MetaMask, and WalletConnect
- **FHE Privacy**: All sensitive data is encrypted using fully homomorphic encryption
- **Smart Contract Integration**: Deploy and interact with FHE-enabled smart contracts
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Web3**: RainbowKit, Wagmi, Viem
- **Blockchain**: Ethereum Sepolia Testnet
- **Encryption**: Fully Homomorphic Encryption (FHE)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cosmos-universe-XYZ/vault-luxe-finance.git
cd vault-luxe-finance
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

5. Start the development server:
```bash
npm run dev
```

## Smart Contract Features

The platform includes FHE-enabled smart contracts for:

- **Asset Registration**: Securely register luxury assets with encrypted metadata
- **Vault Management**: Create and manage asset vaults with privacy-preserving operations
- **Financing**: Enable secure lending against luxury assets
- **Ownership Transfer**: Transfer asset ownership with encrypted verification

## Wallet Integration

Supports multiple wallet providers:
- Rainbow Wallet
- MetaMask
- WalletConnect
- Coinbase Wallet

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Application pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── contracts/          # Smart contract interfaces
```

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider

## Security

This platform implements multiple security layers:

- **FHE Encryption**: All sensitive data is encrypted using fully homomorphic encryption
- **Smart Contract Security**: Audited contracts with access controls
- **Wallet Security**: Secure wallet integration with proper authentication
- **Data Privacy**: No sensitive data is stored in plaintext

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions, please open an issue in the GitHub repository.