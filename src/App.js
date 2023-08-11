import React, { useState } from 'react';

import logo from './logo.svg';
import "./styles/App.css";
import { validateInputAddress } from './Utils.js';

import Wallet from './Components/Wallet';
import IsConnected from './Components/IsConnected';
import MiscTest from './TestComponents/MiscTest';
import LoadedContract from './Components/LoadedContract';
import Modal from './Components/Modal';
import MainComponent from './Components/MainComponent';

import { useConnectionStatus, useContract, useChain, useSwitchChain } from "@thirdweb-dev/react";
import { Ethereum, Mumbai } from '@thirdweb-dev/chains';
import { set } from 'zod';
import { ConnectWallet } from "@thirdweb-dev/react";


const { ethers } = require('ethers');
// import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum)


function App(props) {
	// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	// console.log("vw: ", vw);
	// console.log("vh: ", vh);

	// unknown connecting connected disconnected
	const isConnected = useConnectionStatus();

	// useSwitchChain(props.network);


	// const myDefaultAddress = "0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8";
	const myDefaultAddress = "0xA470437D05a58568e69A7D81B32B917C015A9AaF";
	const [loaded, setLoaded] = useState(false);
	const [contractLoaded, setContractLoaded] = useState(false);
	const [isValidAddress, setValidAddress] = useState(true);
	const [inputAddress, setInputAddress] = useState('');

	const [networkReady, setNetworkReady] = useState(false);
	const [waiting, setWaiting] = useState(false);

	const currentChain = useChain();

	const network = props.network;

	const ready = props.ready;

	// let inputAddress = '';

	/************* For Production *************/
	const [contractAddress, setContractAddress] = useState('');

	/************* For Testing *************/
	// const [contractAddress, setContractAddress] = useState(myDefaultAddress);
	// if (inputAddress == '') {
	// 	setInputAddress(myDefaultAddress);
	// 	setValidAddress(true);
	// }

	// const [topRight, setTopRight] = useState('');
	// if(network != useChain()){
	const switchNetworkFrom = useSwitchChain();

	function changeBackground(){
		if(sessionStorage.getItem('colour')){
			document.body.style.backgroundColor = sessionStorage.getItem('colour');
		} else {
			document.body.style.backgroundColor = '#282c34';
			sessionStorage.setItem('colour', '#282c34');
		}
		window.location.reload(false);

	}

	const switchNetwork = async () => {
		console.log("switchNetwork");
		await switchNetworkFrom(network);

		// changeBackground();
		window.location.reload(false);
		console.log(network);

	};

	if (currentChain != undefined) {
		console.log(currentChain);
	}


	let topRight = '';

	const addressChecker = async (address) => {
		// console.log("addressChecker: ", address);
		try {
			const code = await provider.getCode(address);
			if (code !== '0x') return true;
		} catch (error) { }
		// if it comes here, then it's not a contract.
		return false;
	};

	const contract = useContract(contractAddress);

	const handleInputClick = async () => {
		// Inside the event handler, use the setter function to update the state variable

		setValidAddress(false);
		setContractAddress('');
		setLoaded(false);

		setInputAddress(myDefaultAddress);

		const addressCheck = await addressChecker(myDefaultAddress);
		console.log("Valid Address?: ", addressCheck);
		if (addressCheck) {
			setContractAddress(myDefaultAddress);
			setValidAddress(true);
			// console.log("valid address from CLICK");
		} else {
			setValidAddress(false);
			setContractAddress('');
		}
	};

	const handleInputChange = async (event) => {

		setValidAddress(false);
		setContractAddress('');
		setLoaded(false);

		let address = event.target.value.trim();

		setInputAddress(address);

		if (validateInputAddress(address)) {
			const addressCheck = await addressChecker(address);
			console.log(address, " - Valid Input Address?: ", addressCheck);
			if (addressCheck) {
				// console.log("valid address from input change");
				setContractAddress(address);
				setValidAddress(true);
			}
		}
	};


	if (contract.isSuccess && !contractLoaded) {
		// console.log(contract);
		setContractLoaded(true);
		setContractAddress(contract.data.contractWrapper.writeContract.address);
	} else {

	}

	if (isConnected == "connected") {
		topRight = 'top-right';
	}
	else if (isConnected == "disconnected") {
		topRight = '';
		// loaded = false;
		if (loaded) setLoaded(false);
	}

	console.log(isConnected);
	console.log(currentChain);
	console.log(network);


	return (

		<div>

			<div className="App">
				<header className="App-header">



					{currentChain != undefined &&


						<>

							<p></p>
							<p></p>

							<p></p>
							<h1>Smart Contract Reader</h1>
							{network == currentChain.chainId && (
								<>

									<p></p>
									{network == 80001 && 
									<>
									<button className="contract-input-button" onClick={handleInputClick}>Use My ERC-20 Token contract: </button>
									<code> {myDefaultAddress} </code>
									<p></p>
									</>
								}

									<input className="contract-input-field" type="text" value={inputAddress} onChange={handleInputChange} placeholder="Enter contract address" />
									<code>{!isValidAddress && inputAddress.length > 0 && inputAddress.length != 42 && "Not a valid address"}</code>
									<code>{!isValidAddress && inputAddress.length == 42 && "Not valid, are you on the right Network?"}</code>
								</>
							)}
						</>

					}

					<div>
						<p></p>
						<p></p>
						<code className="site-url" > https://erc.adriannyc.dev </code>
						<p></p>

						<IsConnected contractAddress={contractAddress} contract={contract} isConnected={isConnected} isValidAddress={isValidAddress} currentChain={currentChain} />

						<p></p>


						<div className={`wallet-container ${topRight}`}>
							{/* <div className={`wallet-container`}> */}
							<p></p>
							<Wallet />
							<p></p>
						</div>

						<img src={logo} className="App-logo" alt="logo" />



						<p></p>

						{currentChain != undefined && isConnected == "connected" && network != currentChain.chainId &&
							<button className='switch-network-button' onClick={switchNetwork}>Switch to {network==80001? "Mumbai Network" : "Ethereum Network"}</button>
						}

						<MainComponent contractAddress={contractAddress} contract={contract} isConnected={isConnected} isValidAddress={isValidAddress} />




						<p></p>
						<p></p>
					</div>
				</header>
			</div >

		</div >

	);
}
export default App;