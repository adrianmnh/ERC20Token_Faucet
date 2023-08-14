import { useState } from "react";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";

import App from "./App";
import Wallet from "./Components/Wallet";
import './styles/AppRouter.css'

import {Mumbai, Ethereum} from '@thirdweb-dev/chains';

import { ThirdwebProvider, useConnectionStatus } from "@thirdweb-dev/react";


export default function AppRouter() {
	return (
		<ThirdwebProvider >
			<Routes>

				<Route path="/" element={<Layout />}>
					<Route index element={<MumbaiTestnet />} />
					<Route path="/ethereum" element={<EthereumMainnet />} />
					<Route path="*" element={<Navigate to='/' />} />
				</Route>
			</Routes>
		</ThirdwebProvider >
	);
}

function Layout() {
  return (

    <div>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link" activeClassName="active">
              Mumbai Testnet
            </Link>
          </li>
          <li className="navbar-item">
			{/* <a href="/ethereum" className="navbar-link" activeClassName="active">Ethereum Mainnet</a> */}
            <Link to="/ethereum" className="navbar-link" activeClassName="active">
              Ethereum Mainnet
            </Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
	</div>


  );
}



function MumbaiTestnet() {

	return (
		<div>

			<ThirdwebProvider
				autoConnect={true}
				activeChain={80001}
				supportedChains={[Mumbai, Ethereum]}
				clientId="23791635ed1c38db280bf3c0c0f04b68"
				dAppMeta={{
					name: "Smart Contract Reader for Mumbai Testnet - by Adrian Noa",
					description: "Gain insights into contract data, transactions, and more with this intuitive tool. Discover the power of blockchain technology in action as you navigate and interact with Ethereum's intricate network of contracts.",
					url: "https://erc.adriannyc.dev",
				}}
			>

				<App network={80001} />

			</ThirdwebProvider>
		</div>
	);
}

function EthereumMainnet() {
	return (
		<div>
			<ThirdwebProvider
				autoConnect={true}
				activeChain={1}
				supportedChains={[Mumbai, Ethereum]}
				clientId="23791635ed1c38db280bf3c0c0f04b68"
				dAppMeta={{
					name: "Smart Contract Reader for Ethereum Mainnet - by Adrian Noa",
					description: "Gain insights into contract data, transactions, and more with this intuitive tool. Discover the power of blockchain technology in action as you navigate and interact with Ethereum's intricate network of contracts.",
					url: "https://erc.adriannyc.dev",
				}}
			>

				<App network={1} />

			</ThirdwebProvider>
		</div>
	);
}