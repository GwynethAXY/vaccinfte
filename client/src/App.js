import React, { Component } from "react";
import PlatformContract from "./contracts/Platform.json";
import getWeb3 from "./getWeb3";

import { useGetWeb3 } from './hooks/useGetWeb3';
import useGetUserInfo from "./hooks/useGetUserInfo";
import useGetAccounts from "./hooks/useGetAccounts";
import useGetContractInstance from "./hooks/useGetContractInstance";

import Login from "./components/Login";

import "./App.css";

function App(){
  const web3 = useGetWeb3();
  // const web3 = getWeb3();
  const accounts = useGetAccounts({web3});
  console.log("accounts: " + accounts);
  const {instance} = useGetContractInstance({web3, contract: PlatformContract});
  const {userType} = useGetUserInfo({instance, accountAddress: accounts}); 
  
  return(
    <div>
      Hello

      {(userType === 'New User') && <Login instance={instance} accountAddress={accounts} />}
    </div>
  )
}

export default App;