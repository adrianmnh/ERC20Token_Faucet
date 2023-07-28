import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import WalletConnect from './WalletConnect';

import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

function App() {  // they are equivalent, function can be hoisted(declared after usage) but not const
  // const App = () => {
    
    /* this behavior should not affect app since each component is independent and defined in its own file */

    return (
      <ThirdwebProvider desiredChainId={8001}>

        <WalletConnect  />

{/* 
      <ConnectWallet
        theme="dark"
        btnTitle="Connect Wallet"
      />
       */}


      <Navbar />

        <div className="App">
          <header className="App-header">





            <img src={logo} className="App-logo" alt="logo" />
            <p>
              DNS unresolved: <code>erc.adriannyc.dev</code> to url<code>adriannyc.dev/erc20-faucet</code>
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
              >
              Learn React
            </a>
          </header>
        </div>

    </ThirdwebProvider>
  );
}

export default App;


// const App = () => {
//   return (
//     <ThirdwebProvider desiredChainId={5}>
//       <YourApp />
//     </ThirdwebProvider>
//   );
// };