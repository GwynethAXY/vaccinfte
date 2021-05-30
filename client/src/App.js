import React, { Component } from "react";
import PlatformContract from "./contracts/Platform.json";
import getWeb3 from "./getWeb3";

import useGetUserInfo from "./hooks/useGetUserInfo";
import useGetAccounts from "./hooks/useGetAccounts";
import useGetContractInstance from "./hooks/useGetContractInstance";

import "./App.css";

function App(){
  const web3 = getWeb3();
  const accounts = useGetAccounts({web3});
  console.log("accounts: " + accounts)
  const {instance} = useGetContractInstance({web3, contract: PlatformContract});
  // const {userType} = useGetUserInfo({instance, accountAddress: accounts[0]});

  return(
    <div>
      Hello
    </div>
  )
}

export default App;
