import {useEffect, useState} from 'react';
import Web3 from 'web3';
import useGetAccounts from './useGetAccounts';

function useGetUserInfo({instance, accountAddress}){
    const [userType, setUserType] = useState('');

    useEffect(() => {
        if(instance && accountAddress) {
            instance.methods.checkIdentity()
                .call({from: accountAddress})
                .then((receipt) => {
                    setUserType(Web3.utils.hexToUtf8(receipt).split(' ')[0]);
                });
        }
    }, [accountAddress, instance]);
}

export default useGetUserInfo;