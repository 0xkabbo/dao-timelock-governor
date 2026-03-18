const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  const minDelay = 172800; // 2 days in seconds
  const proposers = [deployer.address]; // In production, this would be the Governor contract
  const executors = [hre.ethers.ZeroAddress]; // Anyone can execute after delay
  const admin = deployer.address;

  const ProtocolTimelock = await hre.ethers.getContractFactory("ProtocolTimelock");
  const timelock = await ProtocolTimelock.deploy(
    minDelay,
    proposers,
    executors,
    admin
  );

  await timelock.waitForDeployment();
  console.log(`Timelock deployed to: ${await timelock.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
