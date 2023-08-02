

import React, { useState } from 'react';


import { useContract, useContractRead, useContractWrite } from "@thirdweb-dev/react";
import { SmartContract, BaseContract } from "@thirdweb-dev/react";
import contract_abi from "./contracts/ProjectToken.json"
import { useConnectionStatus } from "@thirdweb-dev/react";
import "./styles/App.css";
import ExecuteRead from './ExecuteRead';
import ExecuteWrite from './ExecuteWrite';



const Methods = (props) => {

	// Do something with the data...
	// console.log(data.data);
	const [result, setResult] = useState(<code></code>);

	const contract = props.contract;
	const name = props.name;
	const params = props.params;
	const readOnly = props.readOnly;
	const loaded = props.loaded;
	const contract_data = props.contract_data;


	const [inputValues, setInputValues] = useState({});
	const [showResult, setShowResult] = useState(false);

	const handleChange = (e, paramName) => {
		setInputValues((prevInputValues) => ({
			...prevInputValues,
			[paramName]: e.target.value,
		}));
	};


	// const data = useContractRead(contract, name, params);


	// const data = null;
	// const { data: data, isLoading: isNameLoading, isSuccess: isSuccess, error: nameError } = useContractRead(contract, "name", []);

	const executeMethod = () => {

		if (readOnly) {
			setResult(<ExecuteRead contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);


		}
		else
			setResult(<ExecuteWrite contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);

		setShowResult(true);

		setTimeout(() => {
			setShowResult(false);
		}, 5000); // 30 seconds (in milliseconds)
	};

	// const handleSubmit = () => {

	// 	setResult(<ExecuteMethod contract={contract} name={name} inputValues={inputValues} />);
	// };

	const status = useConnectionStatus();




	if (status === "connected") {




		return (
			<>
				<button onClick={() => executeMethod()} className='function-button'>
					{name}
					{/* ({Array.from(params).join(', ')}) */}
				</button>

				{Array.from(params).map((paramName, index) => (
					<input
						className='input-field'
						key={index}
						type="text"
						placeholder={paramName}
						value={inputValues[paramName] || ''}
						onChange={(e) => handleChange(e, paramName)}
					/>
				))}

				<code className={`function-output ${showResult ? 'show-result' : ''}`}>
					{result}
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
export default Methods;