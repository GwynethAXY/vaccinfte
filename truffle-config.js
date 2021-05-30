const path = require("path");

// const HDWalletProvider = require("@truffle/hdwallet-provider");

// const fs = require("fs");
// const mnemonic = fs.readFileSync(".secret").toString().trim();
// const infuraKey = fs.readFileSync(".infura.key").toString().trim();

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    // ropsten: {
    //   provider: () =>
    //   new HDWalletProvider(
    //     mnemonic,
    //     "https://ropsten.infura.io/v3/33f36ef0eec94c6c9472bd15fa520800"
    //   ),
    // network_id: 3, // Ropsten's id
    // gas: 5500000, // Ropsten has a lower block limit than mainnet
    // confirmations: 2, // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    // },
    develop: {
      port: 8545
    }
  }, compilers: {
    solc: {
      version: "0.8.0"
    }
  }
};



