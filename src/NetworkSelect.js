import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/AppRouter.css'

import App from './App';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, useChain } from "@thirdweb-dev/react";
import { useSwitchChain, useChainId } from "@thirdweb-dev/react";
import { Ethereum, Mumbai } from '@thirdweb-dev/chains';


const NetworkSelect = (props) => {
	const selectedChain = props.networkSelected;
	// console.log(selectedChain)




	return (

		<div>
			<ThirdwebProvider
				autoConnect={true}
				// activeChain={Ethereum}
				activeChain={selectedChain}
				supportedChains={[Mumbai, Ethereum]}
				clientId="23791635ed1c38db280bf3c0c0f04b68"
				dAppMeta={{
					name: "Smart Contract Reader for Ethereum Mainnet - by Adrian Noa",
					description: "Gain insights into contract data, transactions, and more with this intuitive tool. Discover the power of blockchain technology in action as you navigate and interact with Ethereum's intricate network of contracts.",
					url: "https://erc.adriannyc.dev",
				}}
			>
				<div>



				<App network={useChainId()} />
				</div>

			</ThirdwebProvider>
		</div>
	);
}


export default NetworkSelect;


