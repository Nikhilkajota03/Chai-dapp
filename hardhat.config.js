require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    mumbai: {
      url:"https://polygon-mumbai.g.alchemy.com/v2/7E25Ij0bVM02w5vViNlFSiBal9teKvcF",
      accounts: ["25feb674107bba57d56c12fe76222685719274350d17868d7facef78543be5e8"],
    },
  },
};
