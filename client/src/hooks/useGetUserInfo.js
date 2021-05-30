import {useEffect, useState} from 'react';
import Web3 from 'web3';

function useGetUserInfo({instance, accountAddress}){
    const [userType, setUserType] = useState('');

    useEffect(() => {
        console.log("useGetUserInfo instance: " + instance);
        console.log("useGetUserInfo address: " + accountAddress);

        if(instance && accountAddress) {
            console.log("has instance and accountAddress");
            instance.methods.checkIdentity()
                .call({from: accountAddress})
                .then((receipt) => {
                    console.log("receipt recieved");
                    setUserType(Web3.utils.hexToUtf8(receipt).split(' ')[0]);
                });
        }
    }, [instance, accountAddress]);

    return {userType};
}

export default useGetUserInfo;