/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require('dotenv/config');
const ethers = require(`ethers`);

let mnemonic = process.env.MNEMONIC;
let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);

module.exports = {
  solidity: "0.8.24",

  settings: {
    optimizer: {
      enabled: true,
      runs: 1000,
    },
  },

  networks: {
    coverage: {
      url: 'http://localhost:5458',
    },
    local: {
      url: 'http://127.0.0.1:9514',
      accounts: [process.env.PRIVATE_KEY_WALLET],
    },
    hardhat: {
    },
    localhost: {
      url: 'http://localhost:8545',
    },
    localnet: {
      url: 'http://localhost:9500',
      chainId: 1666700000,
    },
    testnet: {
      url: 'https://api.s0.b.hmny.io',
      chainId: 1666700000,
    },
    mainnet: {
      url: 'https://api.s0.t.hmny.io',
      chainId: 1666600000,
    },
  }

};
