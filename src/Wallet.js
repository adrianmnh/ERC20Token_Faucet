import { ConnectWallet } from "@thirdweb-dev/react";

import "./styles/Wallet.css";

// import { useMetamask } from "@thirdweb-dev/react";
// import { Goerli } from '@thirdweb-dev/chains';
import { useAddress, useChain, useConnectionStatus } from "@thirdweb-dev/react";



const Wallet = () => {

	return (
		<>


			<ConnectWallet

				// detailsBtn={() => {
				// 	return <button style="background:red"> Hi There </button>;
				// 	}}
				auth={{
					loginOptional: true,
					// loginOptional: false,
				}}

				dropdownPosition={{
					// side: 'top',
					side: 'bottom',
					// side: 'left',
					// side: 'right',
					// align: 'end',
					// align: 'start',
					align: "center",

				}}
				// theme = "light"
				// modalTitle="Adrian says choose wallet button"
				// btnTitle="Adrian Wallet"
				className="custom-wallet"

			/>


			{/* {address !== null && address !== undefined && (

				<div>My wallet address is </div>
			)
			}

			<div>
				<code> WalletComponent: </code> {status}
			</div> */}

		</>



	);
};

export default Wallet;