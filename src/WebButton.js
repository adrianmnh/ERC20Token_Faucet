import './Contract.js';

import React, { useState } from 'react';
import { Web3Button } from '@thirdweb-dev/react';
// import {  useChain, useAddress } from "@thirdweb-dev/react";
import { useConnectionStatus } from "@thirdweb-dev/react";

import './styles/App.css'


const getName = async (contract) => {
	try {
		const success = await contract.call('name');
		return success;
	} catch (error) {
		console.error('Error calling name:', error);
		throw error;
	}
};
const getDecimals = async (contract) => {
	try {
		const success = await contract.call('decimals');
		return success;
	} catch (error) {
		console.error('Error calling name:', error);
		throw error;
	}
};
const getSymbol = async (contract) => {
	try {
		const success = await contract.call('symbol');
		return success;
	} catch (error) {
		console.error('Error calling name:', error);
		throw error;
	}
};

const getSupply = async (contract) => {
	try {
		const success = await contract.call('availableSupply');
		return success;
	} catch (error) {
		console.error('Error calling availableSupply:', error);
		throw error;
	}
};

const getTokenData = async (contract) => {
	try {
		console.log(contract);
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
	const [buttonText, setButtonText] = useState('Load Contract Methods');
	const [supplyText, setSupplyText] = useState('Available Token Supply');
	const [symbolText, setSymbolText] = useState('');
	const [decimalText, setDecimalText] = useState('0');
	const [displayData, setDisplayData] = useState(false);

	const contract_data = props.contract_data;

	// console.log(contract_data);


	const handleSuccess = async (result) => {
		try {
			console.log('Success:', result);

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
			console.log('Error in handleSuccess:', error);
		}
	};

	const handleError = (error) => {
		console.log('Error:', error);
		// You can handle the error, update state, or show an error message to the user
	};


	return (

		<>
			{useConnectionStatus() === 'connected' && (

				<div className='button-container'>

					<Web3Button
						// currentChain = {useConnectionStatus()._chainId}						
						contractAddress={contract_data}
						className="load-button"
						action={(contract) => getTokenData(contract)}
						onSuccess={handleSuccess}
						onError={handleError}
						isDisabled={isDisabled}
						onSubmit={(action) => {
							console.log('submitted');
						}}
						theme="dark"
					>
						<p id="name">{buttonText}</p>
						{/* <p id="supply">{supplyText}</p> */}
					</Web3Button>
					{displayData && (

						<div className="button-token-data">
							<div>Supply: {supplyText}</div>
							<div>Symbol: {symbolText}</div>
							<div>Decimals: {decimalText}</div>


						</div>
					)

					}

					{/* <div>
						<p>Name: {props.name}</p>
						<p>Age: {props.age}</p>
						<p>logged in? {props.isLoggedIn.toString()}</p>
					</div> */}
				</div>

			)
			}
		</>
	);
};

export default WebButton;
