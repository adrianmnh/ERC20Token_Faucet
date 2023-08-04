import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet } from "@thirdweb-dev/react";
import { useChain, useConnectionStatus } from "@thirdweb-dev/react";

// const contract_data = "0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8";
// const contract_data = "";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<React.StrictMode>



		<ThirdwebProvider

			// autoConnect={true}
			autoConnect={true}


			// activeChain="goerli" 
			activeChain="mumbai"
			clientId="23791635ed1c38db280bf3c0c0f04b68"
			// authConfig={{
			// 	authUrl: "/api/auth",
			// 	domain: "https://example.com",
			//   }}
			dAppMeta={{
				name: "Adrian App",
				description: "ERC20 Token Faucet on Test Network",
				logoUrl: "https://example.com/logo.png",
				url: "https://erc.adriannyc.dev",
			}}


		>

			<App contractAddress="" />

		</ThirdwebProvider>


	</React.StrictMode >
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
