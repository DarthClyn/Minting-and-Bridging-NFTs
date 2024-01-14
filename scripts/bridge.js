const hre = require("hardhat");
const tokenJSON = require("../artifacts/contracts/Darth.sol/Darth.json");
require('dotenv').config();

const tokenAddress = process.env.TARGET_ADDRESS; // Extract token address from .env
const tokenABI = tokenJSON.abi;
const walletAddress = "0x0E7757B898f8b2ED72d7A32341E8CA6e2B7f9018";

const fxRootContractABI = require("../fxRootContractABI.json");
const fxERC21RootAddress = "0xF9bc4a80464E48369303196645e876c8C7D972de";
 // place your public address for your wallet here

async function main() {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
;
  
    const fxContract = await hre.ethers.getContractAt(fxRootContractABI, fxERC21RootAddress);
    

    const approveTx = await token.setApprovalForAll(fxERC21RootAddress, true);
    await approveTx.wait();

    console.log("Approval confirmed");
    for (let i = 3; i < 8; i++) {
    //const rootTokenAddress = await fxContract.rootToChildTokens(contractAddress);
    const depositTx = await fxContract.deposit(tokenAddress,walletAddress, i,'0x6566');
    await depositTx.wait();

    }
    console.log("Tokens deposited");
    
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });