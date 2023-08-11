/* global BigInt */

import React, { useState } from 'react';

import { processFunctionOutput, processFunctionError, processParameterPlaceHolder, validate, paramProcess} from '../Utils';
import "../styles/App.css";

// import { useContract, useContractRead, useContractWrite, useBalance} from "@thirdweb-dev/react";
import { useConnectionStatus, useAddress } from "@thirdweb-dev/react";


const ExecuteMethod = (props) => {

	// Do something with the data...
	// console.log(data.data);

	const contract = props.contract.contract;
	const methodName = props.methodName;
	const methodParameters = props.methodParameters;
	const readOnly = props.readOnly;
	const loaded = props.loaded;
	const contractAddress = props.contractAddress;
	const speed = props.speed;
	const payables = props.payables;

	const [inputValues, setInputValues] = useState({});
	const [showResult, setShowResult] = useState(false);
	const [methodOutput, setMethodOutput] = useState(<code></code>);

	const [loadPayable, setLoadPayable] = useState(false);
	const [functionButtonPayable, setFunctionButtonPayable] = useState('function-button');
	const [isPayable, setIsPayable] = useState(false);

	const [payableValue, setPayableValue] = useState(0);
	const [payableValueConfirmed, setPayableValueConfirmed] = useState(0);
	const [payableMatch, setPayableMatch] = useState(false);
	const [payableFinalConfirmation, setPayableFinalConfirmation] = useState(false);
	const [requestConfirmation, setRequestConfirmation] = useState(false);

	const userAddress = props.userAddress;
	
	const [currentUserAddress, setCurrentUserAddress] = useState(userAddress);
	
	const [functionOverrides, setFunctionOverrides] = useState({ from: userAddress });
	
	if(currentUserAddress != userAddress){
		setCurrentUserAddress(userAddress);
		setInputValues({});
		setFunctionOverrides({ from: userAddress });
	}
	
	const outputDisplayDuration = speed * 1000;
	
	
	
	
	if (payables.has(methodName) && !loadPayable) {
		setIsPayable(true);
		setLoadPayable(true);
		setFunctionButtonPayable('function-button-payable');
	}
	
	// const { data, isLoading } = useBalance(contractAddress);
	// let num =0;
	// if(data && num == 0){
	// 	num+=1;
	// 	console.log(data);
	// 	console.log(data.value.toString());
	// }
	
	
	
	const handleInputFieldChange = (e, paramName) => {
		
		/* 
		what to expect from original paramName:
		console.log(paramName) // -> Array [ "amount", "uint256" ]
		after paramProcess(paramName):
		console.log(paramName) // -> amount:uint256
		*/
		const processed = paramProcess(paramName);
		const name = processed.substring(0, processed.indexOf(":"));
		const type = processed.substring(processed.indexOf(":") + 1, processed.length);
		
		if(name == "payable" && type == "value" ){
			console.log("input handler for payable value: " + e.target.value);
			setPayableValueConfirmed(e.target.value);
			
			if(payableValue == e.target.value){
				setPayableMatch(true);
				setFunctionOverrides({ from: userAddress, value: payableValue });
				// setPayableFinalConfirmation(true);
			} else {
				setPayableMatch(false);
			}
			return;
		}
			
		if(isPayable){
			if(type.includes("uint")){
				console.log("setting initial payable value to: " + e.target.value);
				setPayableValue(e.target.value);
				setShowResult(false);
				setPayableMatch(false);
				setPayableFinalConfirmation(false);
				setRequestConfirmation(false);
				setPayableValueConfirmed('');
				setFunctionOverrides({ from: userAddress });
			}
		}		

		setInputValues((prevInputValues) => ({
			...prevInputValues,
			[processed] : e.target.value,
		}));

	};


	// Array.from(methodParameters).map((paramName, index) => {
	// 	// console.log(paramName);
	// 	// console.log(index);
	// });



	const handleShowResult = (showResult) => {

		if (showResult) {
			setTimeout(() => {
				setShowResult(false);
			}, speed * 1000); // 30 seconds (in milliseconds)
		}
	}
	
	
	const executeMethod = async (contract) => {
		// console.log(speed);
		// console.log(functionOverrides);
		// console.log(payableMatch);
		
		/* Validation done at the push of button, not on input field change, 
		**** with the exception of: payable confirmation, that validation is for equality */
		// if(isPayable && payableMatch){

		// }

		if(isPayable){ //requestConfirmation ){
			if(!requestConfirmation){
				if(payableValue == '' || payableValue == 0){
					console.log(payableValue);
					console.log(payableValueConfirmed);
					payableValue == '' ? setMethodOutput(processFunctionError({message:"requires 1 arguments"})) :
					setMethodOutput(processFunctionError({message:"cannot be 0"}));
					setShowResult(true);
					handleShowResult(showResult);
					return;
				} else if (payableValue > 0){
					setRequestConfirmation(true);
					return;
				}

			} else {
				if(!payableMatch){
					setMethodOutput("values do not match");
					setShowResult(true);
					handleShowResult(showResult);
					return;
				} else {
					// setPayableFinalConfirmation(true);
					// setFunctionOverrides({ from: userAddress, value: payableValueConfirmed });
				}
			}
		}

		if (!isPayable || (isPayable && payableMatch )) {
			try {
				// console.log(functionOverrides);
				// PLease remeber to validate here
				// inputValues.forEach((value, key) => {
				// 	if()

				const output = await contract.call(methodName, Object.values(inputValues), functionOverrides);
				setMethodOutput(processFunctionOutput(output));
				setShowResult(true);

				// if (readOnly) {
				// 	// setMethodOutput(<ExecuteRead contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);
				// 	// setMethodOutput(output);
				// 	console.log(output);


				// }
				// else {
				// 	// setResult(<ExecuteWrite contract={contract} name={name} inputValues={inputValues} readOnly={readOnly} />);

				// }


				// setTimeout(() => {
				// 	setShowResult(false);
				// }, 15000); // 30 seconds (in milliseconds)

			} catch (error) {

				const errorString = processFunctionError(error);
				setMethodOutput(errorString);
				setShowResult(true);

			}

		};

		// if (showResult) {
		// 	setTimeout(() => {
		// 		setShowResult(false);
		// 	}, speed * 1000); // 30 seconds (in milliseconds)
		// }
		// handleShowResult(showResult);

	}

	if (showResult) {
		setTimeout(() => {
			setShowResult(false);
		}, speed * 1000); // 30 seconds (in milliseconds)
	}


	// const handleSubmit = () => {

	// 	setResult(<ExecuteMethod contract={contract} name={name} inputValues={inputValues} />);
	// };

	const status = useConnectionStatus();

	if (status === "connected") {

		return (
			<>

				<button onClick={() => executeMethod(contract)} className={`function-button ${functionButtonPayable}`}>
					{methodName}
					{/* ({Array.from(params).join(', ')}) */}
				</button>

				{Array.from(methodParameters).map((paramName, index) => (
					<input
						className='function-input-field'
						key={index}
						type="text"
						placeholder={processParameterPlaceHolder(payables, methodName, paramName)}
						value={inputValues[paramProcess(paramName)] || ''}
						onChange={(e) => handleInputFieldChange(e, paramName)}
					/>

				))
				}
				{isPayable && requestConfirmation &&
					<input className="function-input-filed-payable"
						key={`${methodName}-payable`}
						type="text"
						// type="time"
						placeholder="confirmation amount"
						value={payableValueConfirmed || ''}
						onChange={(e) => handleInputFieldChange(e, ["payable","value"])}
					/>
				}



				<code className={`function-output ${showResult ? 'show-result' : ''}`}>
					{methodOutput}
				</code>
				<p></p>
			</>
		)
	}
}
export default ExecuteMethod;
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











			// if (payables.has(methodName)) {
				// 	// console.log("payable");
				// 	// console.log(methodName);
				// 	console.log(paramName);
				// 	paramName.forEach(parameter => {
					// 		if (parameter.includes("uint256") || parameter.includes("uint")) {
						// 			// setUsePayableValue(true);
		// 			const messageValue = e.target.value;
		// 			// setFunctionOverrides(functionOverrides => ({ ...functionOverrides, value: messageValue }));
		
		// 			setInputValues((prevInputValues) => ({
			// 				...prevInputValues,
			// 				[paramName]: e.target.value,
			// 			}));
			
			// 		}
			// 	}
			// 	);
			
			// }
			// else 