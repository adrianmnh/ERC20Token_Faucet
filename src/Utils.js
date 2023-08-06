export function validateInputAddress(input) {
	if (input.length == 42 && input.substring(0, 2) == "0x") {
		return true;
	}
	return false;
}

export function fetchContractAbi(abi, read, write) {
	abi.forEach(element => {
		// console.log(element);
		if (element.type == "function") {
			if (element.stateMutability == "view") {
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
	console.log(output);

	if (typeof output === "object") {
		if(output.receipt != undefined) {
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
	const ownerAllowedOnlyPattern = /asdas/;

	if (invalidAdressPattern.test(error.message)) return "Invalid address";
	if (notEnoughArgumentsPattern.test(error.message)) return "Not enough arguments";
	if (invalidInputPattern.test(error.message)) return "Invalid input";
	if (userRejectedPattern.test(error.message)) return "Canceled";
	if (ownerNotAllowedPattern.test(error.message)) return "Contract owner not allowed";
	if (ownerAllowedOnlyPattern.test(error.message)) return "Not enough privileges";
	return "Another error";
}

// 12001090985