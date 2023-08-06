import React, { useEffect, useState } from 'react';
import { useContract, useContractRead } from "@thirdweb-dev/react";
import MiscTestChain from "./MiscTestChain.js";

const getTokenData = async (contract) => {
	try {
		// const tokenName = await contract.call('name');
		const tokenName = await contract.call("name", []);
		// You can add more contract call statements here if needed.
		return { tokenName }; // You can return an object with multiple properties if needed.
	} catch (error) {
		throw error;
	}
};

const handleClick = async (contract) => {
	try {
		const tokenData = await getTokenData(contract);
		console.log(tokenData);
	} catch (error) {
		console.error('Error in handleClick:', error);
	}
};
// console.log(handleClick);
// const res2 = useContractRead(contract, 'name', []);

const handleClick2 = async (contract) => {
	try {
		console.log(contract);
	} catch (error) {
		console.error('Error in handleClick:', error);
	}
};


var id = 0;

const MiscTest = (props) => {

	const contractAddress = props.contractAddress;

	const { contract, isSuccess, error } = useContract(contractAddress);


	const [tokenData, setTokenData] = useState(null);

	const [elements, setElements] = useState([]);

	const handleAddElement = () => {
		id+=1;
		const newElement = <div className="added-element show" key = {id}>New Element{id}</div>;
		setElements(prevElements => [...prevElements, newElement]);
	};

	// console.log(contractAddress);
	if (isSuccess) {

		return (
			<div>

				<div>
					<button onClick={handleAddElement}>Add Element</button>
					<div className="container">
						{elements}
					</div>
				</div>

				<button onClick={() => handleClick(contract)}>contract.call(burn(1))</button>
				{/* <button onClick={() => handleClick2(contract)}>contract.call(burn(1))</button> */}
				<MiscTestChain contract={contract} />
			</div>
		)
	}



	// const contractHook = useContractRead(contract, 'burn', [1]);
	// if(contractHook.isSuccess){
	// 	console.log(contractHook);
	// }




	// 	useEffect(() => {
	// 		if(isSuccess){

	// 			getTokenData(contract)
	// 				.then((data) => {
	// 					setTokenData(data);
	// 				})
	// 				.catch((error) => {
	// 					console.error('Error in MiscTest:', error);
	// 				});
	// 		}
	// 	}, [contract]);

	// 	if (isSuccess) {
	// 		if (!tokenData) {
	// 			return <div>Loading...</div>;
	// 		}
	// 		console.log(tokenData);
	// 		console.log(tokenData.receipt);

	// 		return (
	// 			<div>
	// 				Success. now do something with the data.
	// 			</div>
	// 		);
	// 	} else {
	// 		return (
	// 			<div>
	// 				{error}
	// 			</div>
	// 		);
	// 	}

	return (
		<div>
			Not loaded yet
			{/* <button onClick={() => handleClick(contract)}>contract.call(burn(1))</button> */}
			{/* <button onClick={() => handleClick2(contract)}>contract.call(burn(1))</button> */}
		</div>
	)

};



export default MiscTest;


// 7: Object { type: "function", name: "burn", stateMutability: "nonpayable", … }
//
// inputs: Array [ {…} ]
//
// 0: Object { type: "uint256", name: "amount", internalType: "uint256" }
//
// length: 1
//
// <prototype>: Array []
//
// name: "burn"
//
// outputs: Array [ {…} ]
//
// 0: Object { type: "bool", name: "", internalType: "bool" }
//
// length: 1
//
// <prototype>: Array []
//
// stateMutability: "nonpayable"
//
// type: "function"
//
// <prototype>: Object { … }




// const myValue = await contract.call("myReadFunction");
// console.log(myValue);

// // write functions will return the transaction receipt
// const tx = await contract.call("myWriteFunction", [arg1, arg2]);
// const receipt = tx.receipt;

// // Optionally override transaction options
// await contract.call("myWriteFunction", [arg1, arg2], {
//  gasLimit: 1000000, // override default gas limit
//  value: ethers.utils.parseEther("0.1"), // send 0.1 ether with the contract call
// };