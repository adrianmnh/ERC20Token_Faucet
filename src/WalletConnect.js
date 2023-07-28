import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";

const WalletConnect = () => {
    return (
        <ThirdwebProvider 
        desiredChainId={8001}>
            <ConnectWallet
                theme="light"
                btnTitle="Connect Wallet"   
            />
        </ThirdwebProvider>
    );
};

export default WalletConnect;
