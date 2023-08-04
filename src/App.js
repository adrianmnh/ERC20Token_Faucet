
import logo from './logo.svg';
import "./styles/App.css";
import Wallet from './Wallet';
import WebButton from './WebButton';
import IsConnected from './IsConnected';
import {isValidAddress} from './Utils.js';

import { useConnectionStatus, useContract } from "@thirdweb-dev/react";
import MiscTest from './MiscTest';
import Contracts from './Contract';
import { useStorageUpload } from "@thirdweb-dev/react";

import React, { useState } from 'react';
import { set } from 'zod';

function App(props) {
	// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	// console.log("vw: ", vw);
	// console.log("vh: ", vh);
	const myDefaultAddress = "0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8";
	const [loaded, setLoaded] = useState(false);
	const [contractLoaded, setContractLoaded] = useState(false);
	const [validAddress, setValidAddress] = useState(false);
	// const [topRight, setTopRight] = useState('');
	let topRight = '';
	
	const { mutateAsync: upload } = useStorageUpload();
	
	const [inputAddress, setInputAddress] = useState('');
	const [contractAddress, setContractAddress] = useState('');
	// const [contractAddress, setContractAddress] = useState('0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8');

	const handleLoadContractButtonClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		setLoaded(true);
		console.log("load Contract button clicked");
	};
	const handleInputClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		setContractAddress(myDefaultAddress);
		setInputAddress(contractAddress);
		console.log("button clicked to load default address");
	};
	const handleInputChange = (event) => {
		let address = event.target.value;
		// console.log(address);
		address = address.trim();
		setInputAddress(address);
		if(isValidAddress(address)){
			setValidAddress(true);
			setContractAddress(address);

		} 
		else setValidAddress(false);
	};

	const status = useConnectionStatus();
	const [contract, setContract] = useState(useContract(contractAddress));
	// try {

	// 	const callContract = useContract(contractAddress);
	// 	setContract(callContract);
	// } catch (error) {
	// 	console.error('Error calling _name:', error);
	// 	throw error;
	// }

	if (contract.isSuccess && !contractLoaded) {
		// console.log(contract);
		setContractLoaded(true);
		setContractAddress(contract.data.contractWrapper.writeContract.address);
	} else {
		// console.log('ZOD??');
		// console.log(contract);
	}

	if (status == "connected") {
		topRight = 'top-right';
	}
	else if (status == "disconnected") {
		topRight = '';
		// loaded = false;
		if (loaded) setLoaded(false);
	}


	return (

		<div>

			<div className="App">
				<header className="App-header">

					<p></p>
					<p></p>
					<p></p>
					<button className="contract-input-button" onClick={handleInputClick}>Use My ERC-20 Token contract: </button>
					<code> {myDefaultAddress} </code>
					<p></p>

					{/* <div className="contract-input-container"> */}
					<input className="contract-input-field" type="text" value={inputAddress} onChange={handleInputChange} placeholder="Enter contract address" />
					{/* </div> */}
					<p></p>
					<p></p>

					<code className="site-url" > https://erc.adriannyc.dev </code>
					<p></p>


					<IsConnected contractAddress={contractAddress} contract={contract} status={status} validAddress={validAddress} />


					<MiscTest contractAddress={contractAddress} />

					<p></p>


					<div className={`wallet-container ${topRight}`}>
						<p></p>
						<Wallet />
						<p></p>
					</div>


					<img src={logo} className="App-logo" alt="logo" />

					<p></p>

					{/* < MiscTest /> */}


					{contractAddress != "" ** validAddress && (

						<div>


							< div onClick={handleLoadContractButtonClick} style={{ cursor: 'pointer' }} >
								<WebButton contractAddress={contractAddress} />
							</div>

							<p></p>
							{loaded && (
								<div className="methods-container">

									<div className="left">
										<Contracts type="Read only" setter={true} loaded={loaded} contractAddress={contractAddress} />
									</div>
									<div className="right">
										<Contracts type="Write Methods" setter={false} loaded={loaded} contractAddress={contractAddress} />
									</div>

								</div>
							)
							}

							<p></p>
							<p></p>
						</div>

					)}

					<p></p>
					<p></p>
				</header>
			</div >

		</div >

	);
}
export default App;