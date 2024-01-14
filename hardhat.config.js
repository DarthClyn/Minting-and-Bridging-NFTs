require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.8.9",
      },
    ],
  },
  networks: {
    mumbai: {
      url: 'https://rpc-mumbai.maticvigil.com',
      accounts: ["10a81850c7"],
    },
    goerli: {
      url: `https://rpc.ankr.com/eth_goerli`,
      accounts: ["10a8671250c7"],
    },
    sepolia: {
      url: 'https://ethereum-sepolia.blockpi.network/v1/rpc/public',
      accounts: ["10a84011207"],
    },
  },
};
