/* eslint-disable no-undef */
import React, { useState } from 'react';
import { Client } from "my-contract-client"; 
import { isConnected, getPublicKey } from "@stellar/freighter-api";

function App() {
  const [userAddress, setUserAddress] = useState("");
  const [status, setStatus] = useState("Ready");

  // This uses the network config from the index.ts you shared
  const client = new Client({
    ...Client.networks.testnet,
    rpcUrl: "https://soroban-testnet.stellar.org",
  });

  const connect = async () => {
    if (await isConnected()) {
      const pubKey = await getPublicKey();
      setUserAddress(pubKey);
    }
  };

  const handleFund = async () => {
    setStatus("Check Freighter...");
    try {
      // Calling the 'fund' method defined in your index.ts interface
      const tx = await client.fund({
        client: userAddress,
        amount: 100000000n, // 10 XLM
        token_id: "CDLZFC3SYJYDZT7K67VZ75YJFC7S7Y6Y7Y6Y7Y6Y7Y6Y7Y6Y7Y6Y7Y6Y" 
      });

      const { result } = await tx.signAndSend();
      setStatus("Success! Result: " + result);
    } catch (e) {
      setStatus("Error: " + e.message);
    }
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>WhiteCloak Escrow</h1>
      {!userAddress ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <div>
          <p>Connected: {userAddress}</p>
          <button onClick={handleFund} style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white' }}>
            Fund 10 XLM
          </button>
        </div>
      )}
      <p>Status: {status}</p>
    </div>
  );
}

export default App;