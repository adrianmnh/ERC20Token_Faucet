
import logo from './logo.svg';
import "./styles/App.css";
import Wallet from './Wallet';
import WebButton from './WebButton';
import IsConnected from './IsConnected';
import { validateInputAddress } from './Utils.js';

import { useConnectionStatus, useContract, isAddre } from "@thirdweb-dev/react";
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

	// unknown connecting connected disconnected
	const isConnected = useConnectionStatus();


	const myDefaultAddress = "0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8";
	const [loaded, setLoaded] = useState(false);
	const [contractLoaded, setContractLoaded] = useState(false);
	const [isValidAddress, setValidAddress] = useState(false);
	const [inputAddress, setInputAddress] = useState('');

	/************* For Production *************/
	const [contractAddress, setContractAddress] = useState('');

	/************* For Testing *************/
	// const [contractAddress, setContractAddress] = useState(myDefaultAddress);
	// if (inputAddress == '') {
	// 	setInputAddress(myDefaultAddress);
	// 	setValidAddress(true);
	// }

	// const [topRight, setTopRight] = useState('');
	let topRight = '';

	const { mutateAsync: upload } = useStorageUpload();


	const handleLoadContractButtonClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		if (isValidAddress) {
			setLoaded(true);
			// console.log("load Contract button clicked");
		}
	};
	const handleInputClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		setContractAddress(myDefaultAddress);
		setInputAddress(myDefaultAddress);
		setValidAddress(true);
	};

	const handleInputChange = (event) => {
		setInputAddress(event.target.value);
		let address = event.target.value.trim();
		// address = address.trim();
		if (validateInputAddress(address)) {
			console.log("valid address");
			setContractAddress(address);
			setValidAddress(true);
		}
		else {
			setValidAddress(false);
			setContractAddress('');
		}
	};


	const [speed, setSpeed] = useState(25);

	const handleSliderChange = (event) => {
		// const newSpeed = parseFloat(event.target.value);
		const newSpeed = parseInt(event.target.value);
		if (newSpeed === 65) {
			setSpeed(60000);
		} else {

			setSpeed(newSpeed);
		}
		//   onChange(newSpeed);
	};

	// console.log(useConnectionStatus());

	const contract = useContract(contractAddress);

	if (contract.isSuccess && !contractLoaded) {
		// console.log(contract);
		setContractLoaded(true);
		setContractAddress(contract.data.contractWrapper.writeContract.address);
	} else {
		// console.log('ZOD??');
		// console.log(contract);
	}

	if (isConnected == "connected") {
		topRight = 'top-right';
	}
	else if (isConnected == "disconnected") {
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
					<code>{!isValidAddress && inputAddress != "" &&  "Not a valid address"}</code>
					{/* </div> */}
					<p></p>
					<p></p>

					<code className="site-url" > https://erc.adriannyc.dev </code>
					<p></p>


					<IsConnected contractAddress={contractAddress} contract={contract} isConnected={isConnected} isValidAddress={isValidAddress} />


					{/* <MiscTest contractAddress={contractAddress} /> */}

					<p></p>


					<div className={`wallet-container ${topRight}`}>
						<p></p>
						<Wallet />
						<p></p>
					</div>


					<img src={logo} className="App-logo" alt="logo" />

					<p></p>

					{/* < MiscTest /> */}


					{isValidAddress && (

						<div>


							< div onClick={handleLoadContractButtonClick} style={{ cursor: 'pointer' }} >
								<WebButton contractAddress={contractAddress} contract={contract} />
							</div>

							<p></p>
							{loaded && (
								<div className="methods">
									<div className="speed-control">
										<label htmlFor="speedSlider">fade time:</label>
										<input
											type="range"
											id="speedSlider"
											// min="10"
											min="5"
											max="65"
											// step="10"
											step="5"
											value={speed}
											onChange={handleSliderChange}
										/>
										{/* <span>{speed.toFixed(1)} seconds</span> */}
										<span>{speed == 60000 ? "∞" : speed + " seconds"} </span>
									</div>
									<div className="methods-container">


										<div className="left">
											<Contracts contract={contract} readOnly={true} loaded={loaded} contractAddress={contractAddress} isConnected={isConnected} speed={speed} />
										</div>
										<div className="right">
											<Contracts contract={contract} readOnly={false} loaded={loaded} contractAddress={contractAddress} isConnected={isConnected} speed={speed}/>
										</div>

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