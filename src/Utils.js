export function validateInputAddress(input) {
	if (input.length === 42 && input.substring(0, 2) === "0x") {
		return true;
	}
	return false;
}

export function fetchContractAbi(abi, read, write, payables) {
	// console.log(abi);
	abi.forEach(element => {
		// console.log(element);
		if (element.type === "function") {
			if(element.stateMutability === "payable"){
				payables.add(element.name);
			}
			if (element.stateMutability === "view") {
				read.set(element.name, new Map());
				element.inputs.forEach(input => {
					read.get(element.name).set(input.name, input.type);
				});
			} else {
				write.set(element.name, new Map());
				element.inputs.forEach(input => {
					write.get(element.name).set(input.name, input.type);
				});
			}

		}
	});
}

export function processFunctionOutput(output) {
	// console.log(output);

	if (typeof output === "object") {
		if(output.receipt !== undefined) {
			return "Transaction sent";
		}
		return output.toString();
	}
	return output;
}

export function processFunctionError(error) {
	// console.log(error);
	console.log(error.message);
	const notEnoughArgumentsPattern = /requires \d+ arguments/;
	const invalidInputPattern = /INVALID_ARGUMENT/;
	const invalidAdressPattern = /UNSUPPORTED_OPERATION/;
	const userRejectedPattern = /user rejected transaction/;
	const ownerNotAllowedPattern = /Owner not allowed to/;
	const ownerAllowedOnlyPattern = /Owner only/;
	const notEnoughPrivilegesPattern = /privileges/;
	const amountCannotBeZero = /cannot be 0/;

	if (invalidAdressPattern.test(error.message)) return "Invalid address";
	if (notEnoughArgumentsPattern.test(error.message)) return "Not enough arguments";
	if (invalidInputPattern.test(error.message)) return "Invalid input";
	if (userRejectedPattern.test(error.message)) return "Canceled";
	if (ownerNotAllowedPattern.test(error.message)) return "Contract owner not allowed";
	if (ownerAllowedOnlyPattern.test(error.message) || notEnoughPrivilegesPattern.test(error.message)) return "Not enough privileges";
	if (amountCannotBeZero.test(error.message)) return "Invalid amount or 0";
	return "Another error";
}

// 12001090985


export function processParameterPlaceHolder(payables, methodName, paramName){
	if(!payables.has(methodName)){
		return String(paramName).replace("," , " ").replace("uint256", "");
	}
	if(String(paramName).includes("uint256") || String(paramName).includes("uint")){
		// return String(paramName).replace(",", " ").replace("uint256", "(msg.value)");
		return "payable amount";
	}
	return String(paramName).replace("," , " ").replace("uint256", "");

}

export function validate(paramName, value){

	const address = /^0x[a-fA-F0-9]{40}$/
	const uint = /^\d+$/
	const uint256 = /^\d+$/

	if(paramName[1]=="payable-amount" && !uint.test(value)){
		return false;
	}

	// if(paramName[1]=="address" || paramName[1].includes("uint") ){
		if(paramName[1]=="address" && !address.test(value)){
			return false;
		}
		if(paramName[1].includes("uint") && !uint.test(value) ){
			return false;
		}
	// }
	console.log("validated");
	return true;
}

export function paramProcess(paramName){

	return paramName[0]+":"+paramName[1];
}