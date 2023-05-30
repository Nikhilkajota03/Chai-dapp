const hre = require("hardhat");

async function main() {
  const staking = await hre.ethers.getContractFactory("StakingRewards");
  const contract = await staking.deploy("0x37990bFab83e9c71E92EA410aB533B4Df910Bd1C","0x3a06982e84A9f58e98c7aea4a8e729eC59D2c218"); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//address of deployed contract
// 0x5d2519Fb5C18571F669277b3C796D3048aa552F7
