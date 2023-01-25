require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();
/** @type import('hardhat/config').HardhatUserConfig */

const GOERLI_URL = process.env.GOERLI_URL;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url:"https://eth-goerli.g.alchemy.com/v2/32YKYyMjTGgfzGPFxA-QjGRUsorsDeKT",
      accounts: ["5352502dcec2a2444888b183aed70cb1be056864155205a7bbd3220ea822b6b4"],
    },
  },
};
