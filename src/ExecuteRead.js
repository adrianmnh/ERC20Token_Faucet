
import React, { useState, useEffect } from 'react';


import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { SmartContract, BaseContract } from "@thirdweb-dev/react";
import contract_abi from "./contracts/ProjectToken.json"
import { useConnectionStatus } from "@thirdweb-dev/react";

import "./styles/App.css";


const ExecuteRead = (props) => {

	const contract = props.contract;
	const name = props.name;
	const inputValues = props.inputValues;
	const readOnly = props.readOnly;

	// console.log(inputValues);
	const input = Object.values(inputValues);
	
	const response = useContractRead(contract, name, input);


	const error = response.error;
	const loadingError = response.isLoadingError;
	// console.log(response);
	// look at abi to see if size of input is equal to size of input in abi
	if (response.status === "success") {
		const data = response.data;

		return (
			<code> {data.toString()}</code>
		)
	}
	else if (loadingError) {
		// throw error;
		// console.log(error);
	}


}

export default ExecuteRead;

