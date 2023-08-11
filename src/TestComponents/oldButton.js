
import React, { useState } from 'react';
import { Web3Button } from "@thirdweb-dev/react";


const oldButton = () => {

    let result;
    
    const contractData = "0x5daD09E21db39F81c89B043c0Ff2633716B44b9a";
    const [buttonText, setButtonText] = useState('Reading name of ERC20 Token');

    const getName = async (contract) => {
        try {
          const success = await contract.call('_name');
          console.log('Name:', success.toString());
          return success;
        } catch (error) {
          console.error('Error calling _name:', error);
          return error;
        }
      };
      
      const getSupply = async (contract) => {
        try {
          const success = await contract.call('availableSupply');
          console.log('Supply:', success.toString());
          return success;
        } catch (error) {
          console.error('Error calling availableSupply:', error);
          return error;
        }
      };
      
      const getTokenData = async (contract) => {
        try {
        //   console.log(contract);
      
          const tokenSupply = await getSupply(contract);
          const tokenName = await getName(contract);
      
          const finalResult = [tokenSupply, tokenName];
        //   console.log(finalResult);
          return finalResult;
        } catch (error) {
          console.log(error);
          throw error;
        }
      };
      
    

    return (
        <Web3Button
        contractAddress= {contractData}
        className="name-button"
        action={(contract) => result = getTokenData(contract) }     
        onSuccess= { console.log("Success" ) }
        // onError= { console.log('ERROR:', result) }
        isDisabled={false}

        onSubmit={(action) => {

        }}
        theme="light"
      >
        <p id="name">{buttonText}</p>
      </Web3Button>


// const getTokenData = async (contract) => {
//     try {
//       const tokenSupply = await getSupply(contract);
//       const tokenName = await getName(contract);
  
//       const finalResult = [tokenSupply, tokenName];
//       console.log(finalResult);
//       return finalResult;
//     } catch (error) {
//       console.log(error);
//       throw error; // Re-throw the error to be caught by the onError prop
//     }
//   };
  
//   const oldButton = () => {
//     const [buttonText, setButtonText] = useState('Reading name of ERC20 Token');
  
//     const handleSuccess = async (result) => {
//       try {
//         console.log('Success:', result);
//         // Access the finalResult here if needed
//         const finalResult = await result;
//         console.log('Final Result:', finalResult);
  
//         // Perform additional logic or update state based on the result
//         // For example, update the button text with the token name
//         setButtonText(`Token Name: ${finalResult[1]}`);
//       } catch (error) {
//         console.log('Error in handleSuccess:', error);
//       }
//     };
  
//     const handleError = (error) => {
//       console.log('Error:', error);
//       // You can handle the error, update state, or show an error message to the user
//     };
  
//     return (
//       <Web3Button
//         contractAddress="0x5daD09E21db39F81c89B043c0Ff2633716B44b9a"
//         className="name-button"
//         action={(contract) => getTokenData(contract)}
//         onSuccess={handleSuccess}
//         onError={handleError}
//         isDisabled={false}
//         onSubmit={(action) => {
//           console.log('submitted');
//         }}
//         theme="light"
//       >
//         <p id="name">{buttonText}</p>
//       </Web3Button>
    );
  };
  
  export default oldButton;
  
