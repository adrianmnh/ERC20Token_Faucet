export function isValidAddress(input){
	if(input.length == 42 && input.substring(0,2) == "0x"){
			return true;
	}
	return false;
}