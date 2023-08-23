import { useState, useEffect } from "react";
// import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import App from "./App";
import './styles/AppRouter.css'

import { Mumbai, Ethereum } from '@thirdweb-dev/chains';

import { ThirdwebProvider, useChain, useChainId, useSwitchChain } from "@thirdweb-dev/react";
import NetworkSelect from "./NetworkSelect";


export default function AppRouter() {

	try {

		return (
			<ThirdwebProvider >
				{/* <Routes>
	
					<Route path="/" element={<Layout />}>
						<Route index element={<MumbaiTestnet selected="Mumbai"/>} />
						<Route path="/" element={<EthereumMainnet selected="Ethereum"/>} />
						<Route path="*" element={<Navigate to='/' />} />
					</Route>
				</Routes> */}
				<Layout />
			</ThirdwebProvider >
		);
	} catch (error) {
		return (
			<div>
				<h1>Something went wrong</h1>
				<p>{error.message}</p>
			</div>
		);
	}
}

function Layout() {


	const switchChain = useSwitchChain();

	// localStorage.removeItem('persistedValue');
	const [selected, setSelected] = useState(null);
	const [persistedVariable, setPersistedVariable] = useState(JSON.parse(localStorage.getItem('persistedValue')) ? JSON.parse(localStorage.getItem('persistedValue')) : null);

	const selectMumbaiChain = () => {
		setPersistedVariable(null);
		setSelected(Mumbai);
		localStorage.setItem('persistedValue', JSON.stringify(Mumbai));
		switchChain(Mumbai.chainId)
		// setPersistedVariable(JSON.parse(localStorage.getItem('selected')));

	};

	const selectEthereumChain = () => {
		setPersistedVariable(null);
		setSelected(Ethereum);
		localStorage.setItem('persistedValue', JSON.stringify(Ethereum));
		switchChain(Ethereum.chainId)
		// setPersistedVariable(JSON.parse(localStorage.getItem('selected')));

	};

	if (persistedVariable === null && localStorage.getItem('persistedValue') !== null) {
		setPersistedVariable(JSON.parse(localStorage.getItem('persistedValue')));
		window.location.reload(false);
	}


	return (
		<>

			<div>
				<nav className="navbar">
					<ul className="navbar-list">
						<li className="navbar-item">
							<button className="navbar-link" onClick={selectMumbaiChain}>
								Mumbai Testnet
							</button>
						</li>
						<li className="navbar-item">
							<button className="navbar-link" onClick={selectEthereumChain}>
								Ethereum Mainnet
							</button>

						</li>
					</ul>
				</nav>

				<hr />

			</div>

			{persistedVariable && (
				<NetworkSelect networkSelected={persistedVariable} />
				// <MumbaiTestnet selected= {Mumbai}/>
			)}
			<p></p>
			<p></p>
			<p></p>
		</>

	);
}



function MumbaiTestnet(props) {

	return (
		<div>

			<ThirdwebProvider
				// clientId="23791635ed1c38db280bf3c0c0f04b68"
				autoConnect={true}
				activeChain={Mumbai}
				supportedChains={[Mumbai, Ethereum]}
				dAppMeta={{
					name: "Smart Contract Reader for Mumbai Testnet - by Adrian Noa",
					description: "Gain insights into contract data, transactions, and more with this intuitive tool. Discover the power of blockchain technology in action as you navigate and interact with Ethereum's intricate network of contracts.",
					url: "https://erc.adriannyc.dev",
				}}
			>
				{props.selected}

				<App network={useChainId()} />

			</ThirdwebProvider>
		</div>
	);
}

function EthereumMainnet(props) {
	return (
		<div>
			<ThirdwebProvider
				// clientId="23791635ed1c38db280bf3c0c0f04b68"
				autoConnect={true}
				activeChain={Ethereum}
				supportedChains={[Mumbai, Ethereum]}
				dAppMeta={{
					name: "Smart Contract Reader for Ethereum Mainnet - by Adrian Noa",
					description: "Gain insights into contract data, transactions, and more with this intuitive tool. Discover the power of blockchain technology in action as you navigate and interact with Ethereum's intricate network of contracts.",
					url: "https://erc.adriannyc.dev",
				}}
			>
				{props.selected}

				<App network={useChainId()} />

			</ThirdwebProvider>
		</div>
	);
}