import React, { useState } from 'react';


import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { SmartContract, BaseContract } from "@thirdweb-dev/react";
import contract_abi from "./contracts/ProjectToken.json"
import { useConnectionStatus } from "@thirdweb-dev/react";
import "./styles/App.css";

import Methods from './Methods';


// console.log(abi);


let map;

const setters = new Map();

const getters = new Map();

// const execFunc = async (contract, key) => {
// 	try {
// 		const success = contract.call(contract, key);
// 		return success;
// 	} catch (error) {
	// 		console.error('Error calling _name:', error);
	// 		throw error;
	// 	}
	// };
	
	
	const settersArray = Array.from(setters);
	
	const Contracts = (props) => {
		const setter = props.setter;
	const loaded = props.loaded;
	
	const contract_data = props.contract_data;
	const abi = useContract(contract_data).contract.abi; //JSON.parse(contract_abi);
		
	if(abi != null) {

		abi.forEach(element => {
			// console.log(element);
			if (element.type == "function") {
				if (element.stateMutability == "view") {
					setters.set(element.name, new Map());
					element.inputs.forEach(input => {
						setters.get(element.name).set(input.name, input.type);
					});
				} else {
					getters.set(element.name, new Map());
					element.inputs.forEach(input => {
						getters.get(element.name).set(input.name, input.type);
					});
				}
				
			}
		});
	}
	
	// console.log(useContract(contract_data));
	const { contract, isLoading, error } = useContract(
		contract_data,
		"token",
		abi
		);
		
		const [methodType, setMethodType] = useState(props.type);
		// const [abi, setAbi] = useState('');
		
		

		// const { data, isLoading: isNameLoading, error: nameError } = useContractRead(contract, "name");
		
		const [type, setType] = useState('');
		
		// const data = useContractRead(contract, "name");
		const status = useConnectionStatus();
		if (status === "connected") {
			if (setter) {
				map = setters;
		} else {
			map = getters;
		}
			return (
				<>
					<div className="col-style">

						<h1>{methodType}</h1>

						{Array.from(map.keys()).map((name, index) => (

							<div key={name} className="row-style">

								{
									<Methods
										key={name}
										contract_data = {contract_data}
										contract={contract} name={name}
										params={map.get(name)}
										readOnly={true}
										loaded={loaded}			
									/>

								}
							</div>

						))}





						{/* <button key={index} onClick={(key) => execFunc(contract, key)
				}>
				{key}
			</button> */}
						{/* ({Array.from(funcs.get(key)).join(', ')}) */}
						{/* create an input box for each element in the given key's value set */}

						{/* {Array.from(funcs.get(key)).map((value, index) => (
					
					<>
					<input key={index} type="text" placeholder={value} />
					</>
					))}
					
					
				<p> */}
						{/* {console.log(key + ' : ' )} */}

						{/* {Array.from(funcs.get(key)).join(', ')}
			</p>
			
		))} */}
					</div>
				</>
			);
	}
}

export default Contracts;



