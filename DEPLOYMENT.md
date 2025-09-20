# Vercel Deployment Guide

This guide provides step-by-step instructions for deploying the Vault Luxe Finance platform to Vercel.

## Prerequisites

- Vercel account (free tier available)
- GitHub account with the vault-luxe-finance repository
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment

### 1. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project" on the dashboard

### 2. Import GitHub Repository

1. In the "Import Git Repository" section, search for `cosmos-universe-XYZ/vault-luxe-finance`
2. Click "Import" next to the repository
3. Vercel will automatically detect it as a Vite project

### 3. Configure Project Settings

1. **Project Name**: `vault-luxe-finance` (or your preferred name)
2. **Framework Preset**: Vite (should be auto-detected)
3. **Root Directory**: `./` (default)
4. **Build Command**: `npm run build` (default)
5. **Output Directory**: `dist` (default)
6. **Install Command**: `npm install` (default)

### 4. Environment Variables Configuration

Click "Environment Variables" and add the following variables:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_KEY
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=YOUR_WALLETCONNECT_ID
NEXT_PUBLIC_INFURA_API_KEY=YOUR_INFURA_KEY
NEXT_PUBLIC_RPC_URL=https://1rpc.io/sepolia
```

**Important**: Replace `YOUR_INFURA_KEY` and `YOUR_WALLETCONNECT_ID` with your actual keys.

### 5. Advanced Configuration (Optional)

If you need to customize the build process, create a `vercel.json` file in the root directory:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "functions": {
    "src/pages/api/**/*.ts": {
      "runtime": "nodejs18.x"
    }
  },
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

### 6. Deploy

1. Click "Deploy" button
2. Wait for the build process to complete (usually 2-3 minutes)
3. Vercel will provide you with a deployment URL

### 7. Custom Domain (Optional)

1. Go to your project dashboard in Vercel
2. Click "Domains" tab
3. Add your custom domain
4. Follow the DNS configuration instructions
5. Wait for SSL certificate to be issued

## Post-Deployment Configuration

### 1. Update Smart Contract Address

After deploying your smart contracts to Sepolia testnet, update the contract address in:
- `src/lib/contracts.ts` - Update `CONTRACT_ADDRESS`
- Redeploy to Vercel

### 2. Configure Wallet Connect

1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com/)
2. Create a new project
3. Update the `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` environment variable
4. Redeploy

### 3. Test the Application

1. Visit your deployed URL
2. Connect a wallet (MetaMask, Rainbow, etc.)
3. Test asset registration
4. Test vault creation
5. Verify all functionality works correctly

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are properly installed
   - Verify environment variables are set correctly
   - Check build logs in Vercel dashboard

2. **Wallet Connection Issues**
   - Verify WalletConnect project ID is correct
   - Check that RPC URLs are accessible
   - Ensure chain ID matches your configuration

3. **Smart Contract Issues**
   - Verify contract is deployed to Sepolia testnet
   - Check contract address is correct
   - Ensure contract ABI matches the deployed contract

### Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_CHAIN_ID` | Ethereum chain ID (11155111 for Sepolia) | Yes |
| `NEXT_PUBLIC_RPC_URL` | RPC endpoint for blockchain connection | Yes |
| `NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID` | WalletConnect project ID | Yes |
| `NEXT_PUBLIC_INFURA_API_KEY` | Infura API key for additional RPC access | Optional |
| `NEXT_PUBLIC_RPC_URL` | Alternative RPC URL | Optional |

## Monitoring and Analytics

### Vercel Analytics

1. Enable Vercel Analytics in your project dashboard
2. Monitor performance metrics
3. Track user interactions

### Error Monitoring

Consider integrating error monitoring services:
- Sentry
- LogRocket
- Bugsnag

## Security Considerations

1. **Environment Variables**: Never commit sensitive keys to the repository
2. **HTTPS**: Vercel automatically provides SSL certificates
3. **Headers**: Configure security headers in `vercel.json`
4. **Rate Limiting**: Consider implementing rate limiting for API endpoints

## Performance Optimization

1. **Image Optimization**: Use Vercel's built-in image optimization
2. **Caching**: Configure appropriate cache headers
3. **CDN**: Vercel automatically provides global CDN
4. **Bundle Analysis**: Use tools like `vite-bundle-analyzer` to optimize bundle size

## Support

For deployment issues:
1. Check Vercel documentation
2. Review build logs in Vercel dashboard
3. Test locally with `npm run build` and `npm run preview`
4. Contact Vercel support if needed

## Next Steps

After successful deployment:
1. Set up monitoring and analytics
2. Configure custom domain
3. Set up automated deployments from main branch
4. Implement CI/CD pipeline
5. Add staging environment for testing