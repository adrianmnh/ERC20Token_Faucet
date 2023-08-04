import { useAddress } from "@thirdweb-dev/react";
import { useChain, useConnectionStatus } from "@thirdweb-dev/react";
import React, { useState, useEffect } from 'react';
import "./styles/App.css";
import { set } from "zod";

const IsConnected = (props) => {
	const [shouldRenderDelayed, setShouldRenderDelayed] = useState(false);
	const [notLoaded, setNotLoaded] = useState(false);
	const [showUserData, setShowUserData] = useState("user-data");
	const [showContractAddress, setShowContractAddress] = useState("address-data");
	const chain = useChain();
	const userAddress = useAddress();
	let userShortAddress = "";
	let contractShortAddress = "";
	// let status = useConnectionStatus();
	const contract = props.contract;
	const status = props.status;

	const contractAddress = props.contractAddress;

	if (userAddress !== undefined) {

		userShortAddress = userAddress;
		// userShortAddress = userAddress.substring(0, 6) + "..." + userAddress.substring(userAddress.length - 4, userAddress.length);
	}

	if (contract !== undefined) {
		contractShortAddress = contractAddress;
		// contractShortAddress = contractAddress.substring(0, 6) + "..." + contractAddress.substring(contractAddress.length - 4, contractAddress.length);
	}

	// console.log(contract);

	useEffect(() => {
		if (status === "connected") {

			console.log(chain);

			setTimeout(() => {
				setShouldRenderDelayed(true);
				setNotLoaded(true);
				setTimeout(() => {
					setShowUserData("user-data-show");
				}
					, 100);

			}, 500);
		} else {
			setNotLoaded(false);
			setShouldRenderDelayed(false);
			setShowUserData("user-data");
		}
	}, [status]);

	useEffect(() => {
		if (contract.isSuccess) {

			setTimeout(() => {
				setTimeout(() => {
					setShowContractAddress("address-data-show");
				}
					, 50);

			}, 10);
		} else {
			setShowContractAddress("address-data");
		}
	}, [contract]);

	const contractLoaded = contract.isSuccess;

	return (
		<>
			{status === "unknown" && <div>Loading...</div>}
			{status === "disconnected" && (
				<div>
					<code>ConnectionStatus: </code> {status}
				</div>
			)}
			{status === "connecting" && (
				<div>
					<p>Connecting...</p>
				</div>
			)
			}

			{chain && (
				<div>
					{/* <code>IsConnectedComponent: </code> {status} */}
					{!notLoaded && showUserData == "user-data" && <p>Loading user address...</p>}
					{shouldRenderDelayed && (
						<div className={`user-data ${showUserData}`}>
							{contractLoaded && (
								<div className={`contractAddress ${showContractAddress}`}>
									<p></p>Contract Address is
									<code> {contractShortAddress}</code>
								</div>
							)}
							<p></p>User address is
							<code> {userShortAddress}</code>
							<p></p>Connected to
							{/* <code> {chain.name}</code> */}
							<code> {chain.title}</code>
						</div>

					)}
				</div>
			)}
		</>
	);
}

export default IsConnected;
