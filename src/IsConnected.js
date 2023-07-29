import { useAddress } from "@thirdweb-dev/react";
import { useChain, useConnectionStatus } from "@thirdweb-dev/react";
import React, { useState, useEffect } from 'react';
import { set } from "zod";



const IsConnected = () => {

    const [shouldRenderDelayed, setShouldRenderDelayed] = useState(false);

    const chain = useChain();
    const status = useConnectionStatus();
    const address = useAddress();

    useEffect(() => {

        const timer = setTimeout(() => {
            setShouldRenderDelayed(true);
        }, 10000);
    
        return () => clearTimeout(timer);

    } , []);

  
    if (status === "unknown") return <div> Loading... </div>;
    if (status === "disconnected") return <div> IsConnected disconnected </div>;
    if (status === "connecting") return (
    <div>
        <p> connecting... </p>
    </div>
    )
  
    if (chain) {
        <div>
            console.log('Connected to chain:', chain);
            <p> Connected to {chain.name} </p>
        </div>
    };


      
    
  
    return (
        <div>
            { shouldRenderDelayed && <p> User address is {address} </p> }
        </div>

    );
}

export default IsConnected;