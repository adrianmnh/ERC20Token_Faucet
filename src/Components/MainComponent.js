import React, { useState } from 'react';

import WebButton from './WebButton.js';
import LoadedContract from './LoadedContract.js';
import { useContract, useChain } from '@thirdweb-dev/react-core';

const MainComponent = (props) => {

	const [loaded, setLoaded] = useState(false);
	const isConnected = props.isConnected;
	const isValidAddress = props.isValidAddress;
	const contractAddress = props.contractAddress;
	// const contract = props.contract;
	
	if(!isValidAddress && loaded){
		setLoaded(false);
	}
	
	const [speed, setSpeed] = useState(15);
	// const [speed, setSpeed] = useState(60000);

	const contract = useContract(contractAddress);

	const handleLoadContractButtonClick = () => {
		// Inside the event handler, use the setter function to update the state variable
		if (isValidAddress) {
			// setContractAddress(contractAddress);
			setLoaded(true);
			// console.log("load Contract button clicked");
		}
	};
	
	const handleSliderChange = (event) => {
		// const newSpeed = parseFloat(event.target.value);
		const newSpeed = parseInt(event.target.value);
		console.log("fade time set to: ", newSpeed, " seconds")
		if (newSpeed <= 60) {
			setSpeed(newSpeed);
		} else {
			setSpeed(60000);
		}
	};

	return (
		<div>

			{isValidAddress && contractAddress!="" && (

				<div>


					<div onClick={handleLoadContractButtonClick} style={{ cursor: 'pointer' }} >
						<WebButton loaded={loaded} contractAddress={contractAddress} contract={contract} />
					</div>

					<p></p>
					{/* {!loaded && ( */}
					{loaded && contractAddress != "" && (
						<div className="methods">
							<div className="speed-control">
								<label htmlFor="speedSlider">fade time:</label>
								<input
									type="range"
									id="speedSlider"
									min="5"
									max="65"
									step="5"
									value={speed}
									onChange={handleSliderChange}
								/>
								{/* <span>{speed.toFixed(1)} seconds</span> */}
								<span>{speed == 60000 ? " ∞ " : speed + "s"} </span>
							</div>
							<div className="methods-container">


								<div className="left">
									<LoadedContract contract={contract} readOnly={true} loaded={loaded} contractAddress={contractAddress} isConnected={isConnected} speed={speed} />
								</div>
								<div className="right">
									<LoadedContract contract={contract} readOnly={false} loaded={loaded} contractAddress={contractAddress} isConnected={isConnected} speed={speed} />
								</div>

							</div>
						</div>
					)
					}

					<p></p>
					<p></p>
				</div>

			)}




		</div>
	)
};

export default MainComponent;