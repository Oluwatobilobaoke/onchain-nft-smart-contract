import { ethers } from "hardhat";

async function main() {
  const OnChainNft = await ethers.deployContract("ChainBattles");

  await OnChainNft.waitForDeployment();

  console.log(`OnChainNft contract deployed to ${OnChainNft.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// npx hardhat run scripts/deploy.ts --network sepolia