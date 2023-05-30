const hre = require("hardhat");

async function main() {
  const staking = await hre.ethers.getContractFactory("StakingRewards");
  const contract = await staking.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
