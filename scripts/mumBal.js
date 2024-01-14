const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Darth.sol/Darth.json");
require('dotenv').config();

const tokenAddress = "0x009dE2b448Bfc796A9c2E9039eF68513Fe5Cd8Bf"; // Extract token address from .env
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x0E7757B898f8b2ED72d7A32341E8CA6e2B7f9018";

 // Array to store minted token IDs

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);


    console.log("You now have: " + await token.balanceOf(walletAddress) + " tokens");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});


