import React, { useState } from 'react';
import { Web3Button } from '@thirdweb-dev/react';

const contractData = '0x5daD09E21db39F81c89B043c0Ff2633716B44b9a';

const getName = async (contract) => {
  try {
    const success = await contract.call('_name');
    return success;
  } catch (error) {
    console.error('Error calling _name:', error);
    throw error;
  }
};

const getSupply = async (contract) => {
  try {
    const success = await contract.call('availableSupply');
    return success;
  } catch (error) {
    console.error('Error calling availableSupply:', error);
    throw error;
  }
};

const getTokenData = async (contract) => {
  try {
    const tokenSupply = await getSupply(contract);
    const tokenName = await getName(contract);

    const finalResult = [tokenName, tokenSupply];
    return finalResult;
  } catch (error) {
    console.log('Error in getTokenData:', error);
    throw error;
  }
};

const WebButton = (props) => {
  const [buttonText, setButtonText] = useState('Reading name of ERC20 Token');
  const [isDisabled, setIsDisabled] = useState(false);
  const [supplyText, setSupplyText] = useState('Available Token Supply');

  const handleSuccess = async (result) => {
    try {
      console.log('Success:', result);

      // Update the button text with the token name
      setButtonText(`Token Name: ${result[0].toString()}`);

      // Update the supply text with the token supply
      setSupplyText(result[1].toString());

      // Disable the button after successful action
      setIsDisabled(true);



    } catch (error) {
      console.log('Error in handleSuccess:', error);
    }
  };

  const handleError = (error) => {
    console.log('Error:', error);
    // You can handle the error, update state, or show an error message to the user
  };

  return (

    <>
    {props.isLoggedIn && <Web3Button
        contractAddress={contractData}
        className="name-button"
        action={(contract) => getTokenData(contract)}
        onSuccess={handleSuccess}
        onError={handleError}
        isDisabled={isDisabled}
        onSubmit={(action) => {
          console.log('submitted');
        }}
        theme="light"
      >
        <p id="name">{buttonText}</p>
      </Web3Button>
    }

      {/* <div>Supply: {supplyText}</div>

      <div>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>logged in? {props.isLoggedIn.toString()}</p>
      </div> */}

    </>
  );
};

export default WebButton;
