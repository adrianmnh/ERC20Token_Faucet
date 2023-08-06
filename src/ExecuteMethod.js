

import React, { useState } from 'react';


import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { SmartContract, BaseContract } from "@thirdweb-dev/react";
import contract_abi from "./contracts/ProjectToken.json"
import { useConnectionStatus } from "@thirdweb-dev/react";
import "./styles/App.css";
import { processFunctionOutput, processFunctionError } from './Utils';	
import ExecuteRead from './ExecuteRead';
import ExecuteWrite from './ExecuteWrite';



const ExecuteMethod = (props) => {

	// Do something with the data...
	// console.log(data.data);
	const [methodOutput, setMethodOutput] = useState(<code></code>);

	const contract = props.contract.contract;
	const methodName = props.methodName;
	const methodParameters = props.methodParameters;
	const readOnly = props.readOnly;
	const loaded = props.loaded;
	const contractAddress = props.contractAddress;
	const speed = props.speed;

	const [inputValues, setInputValues] = useState({});
	const [showResult, setShowResult] = useState(false);

	const outputDisplayDuration = speed * 1000;
	// const outputDisplayDuration = 5 * 1000;

	const handleChange = (e, paramName) => {
		setInputValues((prevInputValues) => ({
			...prevInputValues,
			[paramName]: e.target.value,
		}));
	};


	// Array.from(methodParameters).map((paramName, index) => {
	// 	// console.log(paramName);
	// 	// console.log(index);

	// });


	// const data = useContractRead(contract, name, params);


	// const data = null;
	// const { data: data, isLoading: isNameLoading, isSuccess: isSuccess, error: nameError } = useContractRead(contract, "name", []);

	// const data = contract.contract.call("name", []);


	const executeMethod = async (contract) => {
		try {
			// console.log(contract);
			const output = await contract.call(methodName, Object.values(inputValues));

			setMethodOutput(processFunctionOutput(output));

			// if (readOnly) {
			// 	// setMethodOutput(<ExecuteRead contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);
			// 	// setMethodOutput(output);
			// 	console.log(output);


			// }
			// else {
			// 	// setResult(<ExecuteWrite contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);

			// }

			setShowResult(true);

			// setTimeout(() => {
			// 	setShowResult(false);
			// }, 15000); // 30 seconds (in milliseconds)

		} catch (error) {
			
			const errorString = processFunctionError(error);
			setMethodOutput(errorString);
			setShowResult(true);
			// console.error(error);
			// console.log("error");
		}

	};

	if(showResult){
		setTimeout(() => {
			setShowResult(false);
		}, outputDisplayDuration); // 30 seconds (in milliseconds)
	}

	// const handleSubmit = () => {

	// 	setResult(<ExecuteMethod contract={contract} name={name} inputValues={inputValues} />);
	// };

	const status = useConnectionStatus();

	if (status === "connected") {

		return (
			<>
				<button onClick={() => executeMethod(contract)} className='function-button'>
					{methodName}
					{/* ({Array.from(params).join(', ')}) */}
				</button>

				{Array.from(methodParameters).map((paramName, index) => (
					<input
						className='function-input-field'
						key={index}
						type="text"
						placeholder={String(paramName).replace(",", " ").replace("uint256", "")  }
						value={inputValues[paramName] || ''}
						onChange={(e) => handleChange(e, paramName)}
					/>
				))}

				<code className={`function-output ${showResult ? 'show-result' : ''}`}>
					{methodOutput}
				</code>
				<p></p>
			</>
		)
	}
	// return (

	// 	<div >
	// 		<button onClick={() => executeMethod()}>
	// 			{name}					
	// 			{/* ({Array.from(params).join(', ')}) */}
	// 		</button>
	// 		{Array.from(params).map((key, index) => (
	// 			<input key={index} type="text" placeholder={key} />
	// 			))}
	// 		<code>
	// 			{result}
	// 		</code>
	// 			<p>not</p>
	// 	</div >
	// )
}
export default ExecuteMethod;