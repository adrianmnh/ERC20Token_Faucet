
import logo from './logo.svg';
import "./styles/App.css";
import Wallet from './Wallet';
import WebButton from './WebButton';
import IsConnected from './IsConnected';
import Methods from './Methods';

import { useConnectionStatus } from "@thirdweb-dev/react";
import MiscTest from './MiscTest';
import Contracts from './Contract';
import { useStorageUpload } from "@thirdweb-dev/react";

import React, { useState } from 'react';







function App(props) {
	// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
	// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
	// console.log("vw: ", vw);
	// console.log("vh: ", vh);
	const [loaded, setLoaded] = useState(false);
	// const [topRight, setTopRight] = useState('');
	let topRight = '';
	// let loaded = false

	const { mutateAsync: upload } = useStorageUpload();

	// const contract_data = props.contract_data;

	const [contract_data, setContract_data] = useState('');
	// const [contract_data, setContract_data] = useState('0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8');

	const uploadData = () => {
		// Get any data that you want to upload
		const dataToUpload = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

		// And upload the data with the upload function
		const uris = upload({ data: dataToUpload });
	}

	const handleButtonClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		setLoaded(true);
		console.log("button clicked");
	};
	const status = useConnectionStatus();

	if (status == "connected") {
		topRight = 'top-right';
	}
	else if (status == "disconnected") {
		topRight = '';
		// loaded = false;
		if (loaded) setLoaded(false);
	}

	const handleInputChange = (event) => {
		setContract_data(event.target.value);
	};

	return (


		<div>




			<div className="App">
				<header className="App-header">

					<p></p>
					<p></p>
					<p></p>
					My ERC-20 Token contract: <code> 0x5AfFc17a4cdAd48CB0162EAa3ED38468eB7147f8 </code>
					<p></p>
					<input className="contract-input-box" type="text" value={contract_data} onChange={handleInputChange} placeholder="Enter contract address" />
					<p></p>
					<p></p>

					<code className="site-url" > https://erc.adriannyc.dev </code>
					<p></p>

					<IsConnected contract_data={contract_data} />

					<MiscTest />

					<p></p>



					<div className={`wallet-container ${topRight}`}>
						<p></p>
						<Wallet />
						<p></p>
					</div>


					<img src={logo} className="App-logo" alt="logo" />

					<p></p>


					{contract_data != "" && (

						<div>


							< div onClick={handleButtonClick} style={{ cursor: 'pointer' }} >
								<WebButton contract_data={contract_data} />
							</div>

							<p></p>
							{loaded && (
								<div className="methods-container">

									<div className="left">
										<Contracts type="Read only" setter={true} loaded={loaded} contract_data={contract_data} />
									</div>
									<div className="right">
										<Contracts type="Write Methods" setter={false} loaded={loaded} contract_data={contract_data} />
									</div>

								</div>
							)
							}

							<p></p>
							<p></p>
						</div>

					)}



					<p></p>
					<p></p>
				</header>
			</div >

		</div >

	);
}
export default App;