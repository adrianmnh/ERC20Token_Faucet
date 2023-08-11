import React, { useState } from 'react';

import './LoadedContract.js';
import '../styles/App.css'

import { Web3Button, useConnectionStatus } from "@thirdweb-dev/react";



const getName = async (contract) => {
	try {
		const success = await contract.call('name');
		return success;
	} catch (error) {
		console.error('Error calling name:', error.message);
		// throw error;
		return "Load Contract";
	}
};
const getDecimals = async (contract) => {
	try {
		const success = await contract.call('decimals');
		return success;
	} catch (error) {
		console.error('Error calling name:', error.message);
		// throw error;
		return "";
	}
};
const getSymbol = async (contract) => {
	try {
		const success = await contract.call('symbol');
		return success;
	} catch (error) {
		console.error('Error calling name:', error.messsage);
		// throw error;
		return "";
	}
};

const getSupply = async (contract) => {
	try {
		const success = await contract.call('circulatingSupply');
		return success;
	} catch (error) {
		console.error('Error calling availableSupply:', error.message);
		// throw error;
		return "";
	}
};

const getTokenData = async (contract) => {
	try {

		// console.log(contract);
		const tokenSupply = await getSupply(contract);
		const tokenName = await getName(contract);
		const tokenSymbol = await getSymbol(contract);
		const tokenDecimals = await getDecimals(contract);


		const finalResult = [tokenName, tokenSupply, tokenSymbol, tokenDecimals];
		return finalResult;
	} catch (error) {
		console.log('Error in getTokenData:', error);
		throw error;
	}
};


const WebButton = (props) => {
	const [isDisabled, setIsDisabled] = useState(false);
	const [buttonText, setButtonText] = useState('Load Contract');
	const [supplyText, setSupplyText] = useState('Available Token Supply');
	const [symbolText, setSymbolText] = useState('');
	const [decimalText, setDecimalText] = useState('0');
	const [displayData, setDisplayData] = useState(false);
	
	const contractAddress = props.contractAddress;
	const loaded = props.loaded;
	const [contract, setContract] = useState(null);
	
	if(!loaded && buttonText !== 'Load Contract'){
		setButtonText('Load Contract');
		setDisplayData(false);
	}


	const handleSuccess = async (result) => {
		try {
			// console.log('Success:', result);

			// Update the button text with the token name
			setButtonText(`${result[0].toString()}`);

			// Update the supply text with the token supply
			setSupplyText(result[1].toString());

			setSymbolText(result[2].toString());

			setDecimalText(result[3].toString());

			// Disable the button after successful action
			// setIsDisabled(true);
			setDisplayData(true);



		} catch (error) {
			console.log('Error in handleSuccess:', error.message);
			console.log('caught and dealt with, no worries... removed to extend contract scope from just tokens\n uncomment action in WebButton.js to see it work');
		}
	};

	const handleError = (error) => {
		console.log('Error:', error.message);
		// You can handle the error, update state, or show an error message to the user
	};


	return (

		<>
			{useConnectionStatus() === 'connected' && (

				<div className='button-container'>

					<Web3Button
						// currentChain = {useConnectionStatus()._chainId}						
						contractAddress={contractAddress}
						className="load-button"
						action={(contract) => getTokenData(contract)}
						// action={(contract) => console.log("methods loaded")}
						onSuccess={handleSuccess}
						onError={handleError}
						isDisabled={isDisabled}
						onSubmit={(action) => {
							// console.log('submitted');
						}}
						theme="dark"
					>
						<p id="name">{buttonText}</p>
						{/* <p id="supply">{supplyText}</p> */}
					</Web3Button>

					{displayData && (

						<div className="button-token-data">
							{supplyText && <div>Circulating Supply: {supplyText}</div>}
							{symbolText && <div>Symbol: {symbolText}</div>}
							{decimalText && <div>Decimals: {decimalText}</div>}


						</div>
					)

					}

				</div>

			)
			}
		</>
	);
};

export default WebButton;
