

import { ConnectWallet } from "@thirdweb-dev/react";

import React, { useState } from 'react';


import { useMetamask } from "@thirdweb-dev/react";
import { Goerli } from '@thirdweb-dev/chains';
import { useAddress } from "@thirdweb-dev/react";
import { useChain, useConnectionStatus } from "@thirdweb-dev/react";


const Wallet = (props) => {

    // const connectWithMetamask = useMetamask();

    // const handleOnConnected = async (wallet) => {

    //     try{
    //         console.log('Connected with wallet:', wallet);
    //         props.setIsLoggedIn(true);
    //     } catch(error){
    //         console.error("Error connecting wallet:", error.message);
    //     }

    // };

    const chain = useChain();

  const status = useConnectionStatus();

//   let [statusString, setStatusString] = useState("not knowsn");

  const address = useAddress();

  




    const handleConnect = () => {
        // ... Logic to connect the wallet ...
        const connectedWallet = { name: "MetaMask" }; // Replace with the actual connected wallet object
        props.onConnected(connectedWallet); // Trigger the onConnected prop
        console.log('Connected with wallet:', connectedWallet);
      };
  


    //   if (!address) return <div>No wallet connected</div>;

    return (
        <>
  {/* { (chain) => {
    <p> Connected to {chain.name} </p>;
    }  
  } */}

        
        
    <ConnectWallet
        auth={{
            loginOptional: false,
        }}
        dropdownPosition={{
            side: 'bottom',
            align: 'center',
        }}
        theme={props.theme}
        btnTitle="Connect Wallet"

        />
            
            { address !== null && address !== undefined &&(

              <div>My wallet address is </div> 
              )
            }

            <div> 
              <code> WalletComponent: </code> {status}
            </div>
            
            </>
            
            
            
            );
        };
        
        export default Wallet;
        
        // onConnected={
        //     // () => props.setIsLoggedIn(true)
        //     // (wallet) => {
        //         // console.log('Connected with wallet:', wallet);
        //         // props.setIsLoggedIn(true);
        //         // }
        //         (result) => {
        //             console.log('Connected with wallet:', result);
        //             handleConnect();
        //         }
        //     }
        // <ThirdwebProvider activechain={activeChain} clientId="23791635ed1c38db280bf3c0c0f04b68"  >
        
        //             <Web3Button activechain="goerli"
        
        //       contractAddress= { contract }// Your smart contract address
        //       action={async (contract) => {
            //         await someAction(contract);
            //       }}
            //     >
            //       Execute Action
            //     </Web3Button>
            //         connect
            
            
            // return <div> ... </div>;
        //     </ThirdwebProvider>

// import { Goerli } from "@thirdweb-dev/chains";
// import { useSafe, useWallet, useMetamask } from "@thirdweb-dev/react";
// import { SafeWallet } from "@thirdweb-dev/wallets";

// const Wallet = () => {
//   const connectToSafe = useSafe();
//   const wallet = useWallet();
//   const connectToMetamask = useMetamask(); // using metamask as personal wallet
  
//   if (!wallet) {
//     return (
//       <button
//       onClick={() => {
//           connectToMetamask({
//               chainId: 5,
//             });
//         }}
//         >
//         Connect personal wallet
//       </button>
//     );
// }

// if (wallet instanceof SafeWallet) {
//     return <div>Safe wallet is connected</div>;
// }

// return (
//     <button
//     onClick={async () =>
//         await connectToSafe({
//             safeAddress: "0x...", // Smart contract address of the Safe wallet
//             chain: Goerli, // Chain the Safe wallet is deployed to
//             personalWallet: wallet,
//         })
//     }
//     >
//       Connect Safe
//     </button>
//   );
// };
