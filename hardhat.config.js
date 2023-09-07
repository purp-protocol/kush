require('hardhat-deploy');
require('hardhat-deploy-ethers');
const ETHEREUM_RPC = "https://mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2";

const ETHERSCAN_API_KEYS = {
  ARBITRUM: "7PW6SPNBFYV1EM5E5NT36JW7ARMS1FB4HW",
  MATIC: "I13U9EN9YQ9931GYK9CJYQS9ZF51D5Z1F9",
  ETHEREUM: "34W9GX5VZDJKJKVV6YEAMQ3TDP7R8SR633",
};
const MATIC_RPC = "https://polygon-mainnet.infura.io/v3/816df2901a454b18b7df259e61f92cd2";
const wallet = process.env.WALLET;
const accounts = [
  wallet || ethers.Wallet.createRandom().privateKey
];
module.exports = {
  solidity: '0.7.6',
  networks: {
    mainnet: {
      url: ETHEREUM_RPC,
      accounts,
      chainId: 1,
    },
    matic: {
      url: MATIC_RPC,
      accounts,
      chainId: 137,
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEYS.ETHEREUM,
  },
};
