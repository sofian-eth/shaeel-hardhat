require("@nomicfoundation/hardhat-toolbox");
require("@chainlink/hardhat-chainlink");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
    },
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/Cj7d-e15a1nIO2vGzfPciI9S1PRZs_zM",
      accounts: [""]
    }
  }
};
