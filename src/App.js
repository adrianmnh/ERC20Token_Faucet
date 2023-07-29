
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Wallet from './Wallet';
import WebButton from './WebButton';
import MiscTest from './MiscTest';
import IsConnected from './IsConnected';

import { ThirdwebProvider, Web3Button } from "@thirdweb-dev/react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

import { useConnect } from "@thirdweb-dev/react";
import { metamaskWallet } from "@thirdweb-dev/react";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onConnected = (wallet) => {
    console.log(`Wallet connected successfully: ${wallet.name}`);
    // You can perform any actions you need when the wallet is connected here
  };


//   const connect = useConnect();

//   const handleConnect = async () => {
//     try {
//       await connect(walletConnectConfig, { chainId: "YOUR_CHAIN_ID" });
//     } catch (error) {
//       console.error("Error connecting wallet:", error);
//     }
//   };

//   return (
//     <ThirdwebProvider supportedWallets={[walletConnectConfig]} clientId="your-client-id">
//       <div>
//         {/* Your app content */}
//         <button onClick={handleConnect}>Connect Wallet</button>
//       </div>
//     </ThirdwebProvider>
//   );
// }



    


    return (

      
      <ThirdwebProvider activeChain="goerli" clientId="23791635ed1c38db280bf3c0c0f04b68">
  
  
  
        <div className="App">
          <header className="App-header">
  

        <Wallet
        onConnected={onConnected}
        theme="light" 
      />

      <IsConnected />
  
    
        { <WebButton name={"hello"} isLoggedIn={isLoggedIn} /> }
        { <WebButton isConnected={false} isLoggedIn={isLoggedIn} /> }
  
            <img src={logo} className="App-logo" alt="logo" />
            <p> "https://erc.adriannyc.dev" </p>
  
          </header>
        </div>
  
       </ThirdwebProvider>
    );
  }
  export default App;