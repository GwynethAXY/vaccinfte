import {useEffect, useState} from 'react';

function useGetAccounts({web3}) {
    const [accounts, setAccounts] = useState(null);
    useEffect(() => {
        if (web3) {
          web3.eth.getAccounts().then((accounts) => { setAccounts(accounts); });
        }
      }, [web3]);

    return accounts;
}

export default useGetAccounts;