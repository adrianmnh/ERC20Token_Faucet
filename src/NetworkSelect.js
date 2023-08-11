import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { ThirdwebProvider, metamaskWallet, coinbaseWallet, useChain } from "@thirdweb-dev/react";
import { useSwitchChain } from "@thirdweb-dev/react";
import { Ethereum, Mumbai } from '@thirdweb-dev/chains';


const NetworkSelect = (props) => {

	// const [network, setNetwork] = useState(props.network);

	const [ready, setReady] = useState(true);


	let chain = useChain();
	console.log(chain);




	// const switchToEth = () => {
	// 	setReady(false);
	// 	setNetwork(1);
	// 	setTimeout(() => {

	// 		setReady(true);
	// 	}, 2000);
	// }
	// const switchToMumbai = () => {
	// 	setReady(false);
	// 	setNetwork(80001);
	// 	setTimeout(() => {

	// 		setReady(true);
	// 	}, 2000);
	// }


	return (

		<>
			{/* Selected Network:
			{/* <div button={switchNetworkHandler(80001)}> {network == 80001 ? "Ethereum" : "Mumbai Testnet"} Network </button> */}
			{/* <div onClick={switchNetworkHandler}> {network == 80001 ? "Ethereum" : "Mumbai Testnet"} Network </div> */}
			{/* <button onClick={switchNetworkHandler}> "Ethereum" Network </button>
			<button onClick={switchNetworkHandler}> "Mumbai Test" Network </button> */}
			{/* <button onClick={switchToEth}> "Ethereum" Network </button>
			<button onClick={switchToMumbai}> "Mumbai Test" Network </button> */}

			{/* {ready && */}
			<ThirdwebProvider



				autoConnect={true}

				// activeChain="goerli" 
				// activeChain={network == 80001 ? Mumbai.chainId : Ethereum.chainId}
				activeChain={props.network}
				// supportedChains={props.network == 80001 ? [Mumbai] : [Ethereum]}
				supportedChains={[Mumbai, Ethereum]}
				clientId="23791635ed1c38db280bf3c0c0f04b68"
				// authConfig={{
				// 	authUrl: "/api/auth",
				// 	domain: "https://example.com",
				//   }}
				dAppMeta={{
					name: "Adrian App",
					description: "ERC20 Token Faucet on Test Network",
					// logoUrl: "https://example.com/logo.png",
					url: "https://erc.adriannyc.dev",
				}}


			>

				{/* <App network={network} ready={ready} /> */}
				<App network={props.network} />


				{/* } */}

			</ThirdwebProvider>
		</>
	);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default NetworkSelect;
