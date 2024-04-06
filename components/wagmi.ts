import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { coinbaseWallet, injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
	chains: [mainnet, sepolia],
	connectors: [
    injected(),
    coinbaseWallet({ appName: 'DiGiV3rse' }),
    walletConnect({ projectId: process.env.WC_PROJECT_ID }),
  ],
	ssr: true,
	transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
	},
})

declare module 'wagmi' {
	interface Register {
		config: typeof config
	}
}