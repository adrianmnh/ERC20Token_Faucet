import React, { useState } from 'react';



import { useAddress } from "@thirdweb-dev/react";
import "../styles/App.css";
import { fetchContractAbi } from "../Utils.js";

import ExecuteMethod from './ExecuteMethod';
import IsConnected from './IsConnected';



const readMap = new Map();

const writeMap = new Map();

const payables = new Set();

// const execFunc = async (contract, key) => {
// 	try {
// 		const success = contract.call(contract, key);
// 		return success;
// 	} catch (error) {
// 		console.error('Error calling _name:', error);
// 		throw error;
// 	}
// };



const LoadedContract = (props) => {
	const readOnly = props.readOnly;
	const loaded = props.loaded;
	const isConnected = props.isConnected;
	const speed = props.speed;
	const userAddress = useAddress();

	const contractAddress = props.contractAddress;
	const contract = props.contract;
	const [currentContractAddress, setCurrentContractAddress] = useState(""); 

	// console.log("Contract Address: " + contractAddress);	
	
	const methodType = readOnly ? "Read Only" : "Write Methods";
	
	
	const readOnlyMethods = Array.from(readMap);
	const writeMethods = Array.from(writeMap);
	// console.log(readOnlyMethods);
	
	const map = readOnly ? readMap : writeMap;
	
	if(loaded){
		if(currentContractAddress !== contractAddress){
			setCurrentContractAddress(contractAddress);
			readMap.clear();
			writeMap.clear();
			map.clear();
			fetchContractAbi(contract.contract.abi, readMap, writeMap, payables);
		}
	} else {
		readMap.clear();
		writeMap.clear();
		map.clear();
	}
	// Array.from(map.keys()).map((name, index) => {
	// 	console.log(name);
	// 	console.log(map.get(name));
	// 	console.log(index);
	// });


	if (isConnected === "connected") {

		return (
			<>

				<div className="col-style">

					<h1 className="function-type">{methodType}</h1>

					{Array.from(map.keys()).map((name) => (

						<div key={name} className="row-style">

							{
								<ExecuteMethod
									key={name}
									userAddress={userAddress}
									contractAddress={currentContractAddress}
									contract={contract}
									methodName={name}
									methodParameters={map.get(name)}
									readOnly={readOnly}
									loaded={loaded}
									isConnected={isConnected}
									speed={speed}
									payables={payables}
								/>

							}
						</div>

					))}


				</div>
			</>
		);
	}
}

export default LoadedContract;



