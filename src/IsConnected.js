import { useAddress } from "@thirdweb-dev/react";
import { useChain, useConnectionStatus } from "@thirdweb-dev/react";
import React, { useState, useEffect } from 'react';
import "./styles/App.css";
import { set } from "zod";

const IsConnected = (props) => {
	const [shouldRenderDelayed, setShouldRenderDelayed] = useState(false);
	const [notLoaded, setNotLoaded] = useState(false);
	const [showUserData, setShowUserData] = useState("user-data");
	const chain = useChain();
	const address = useAddress();
	let shortAddress = "";
	let status = useConnectionStatus();
	const contract_data = props.contract_data;

	if (address !== undefined) {

		shortAddress = address;
		// shortAddress = address.substring(0, 6) + "..." + address.substring(address.length - 4, address.length);
	}

	useEffect(() => {
		if (status === "connected") {
			// setShowUserData("user-data-show");
			
			setTimeout(() => {
				setShouldRenderDelayed(true);
				setNotLoaded(true);
				setTimeout(() => {
					setShowUserData("user-data-show");
				}
					, 100);

			}, 3000);
		} else {
			setNotLoaded(false);
			setShouldRenderDelayed(false);
			setShowUserData("user-data");
		}
	}, [status]);



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
					{!notLoaded && showUserData=="user-data" && <p>Loading user address...</p>}
					{ shouldRenderDelayed && (
					<div className={`user-data ${showUserData}`}>
						<p></p>User address is <code>{shortAddress}</code>
						<p></p>Connected to <code>{chain.name}</code>
						{contract_data != "" && (<div><p></p>Contract Address is <code>{contract_data}</code></div>)

						}
					</div>

					)}
				</div>
			)}
		</>
	);
}

export default IsConnected;
