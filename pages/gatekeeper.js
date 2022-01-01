import React, { useState, useEffect } from "react";

export default function GateKeeper() {
  const [address, setAddress] = useState(false);
  const [ready, setReady] = useState(false);
  
  const submitAddress = () => {
    console.log(address)
    setReady(true);
  };

  useEffect(() => {
    if (ready) {
      // Navigate to {root_url}/access-pass-generator with the address as a query parameter
      window.location.href = `${window.location.origin}/access-pass-generator?address=${address}`;
    }
  }, [ready]);
    return (
      <div
          className={'matrix'}>
            <h1> GateKeeper </h1>
            <input type="text" onChange={(e) => setAddress(e.target.value)} placeholder="Enter metaverse address" />
            <div className="button" onClick={() => submitAddress()}>Teleport</div>
          </div>
    );
  }
  