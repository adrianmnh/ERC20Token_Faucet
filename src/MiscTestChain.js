import React, { useEffect, useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";

const getTokenData = async (contract) => {
	try {
		// const tokenName = await contract.call('name');
		const tokenName = await contract.call('burn', [1]);
		// You can add more contract call statements here if needed.
		return { tokenName }; // You can return an object with multiple properties if needed.
	} catch (error) {
		console.error(error);
	}
};

const handleClick = async (contract) => {
	try {
		const response = await contract.call('burn', [1]);
		console.log('Button Clicked');
	} catch (error) {
		console.error('No signature');
		console.log(error);
	}
};


const MiscTestChain = (props) => {
	
	const contract = props.contract;

	
	return (
		<div>
			<button onClick={() => handleClick(contract)}>FROM CHAIN BUTTON</button>

		</div>
	)
	
};



export default MiscTestChain;

