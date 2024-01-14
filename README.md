
# Project: Building with Polygon Bridge

## Description

Imagine that you are working on a large NFT project. Your team decided to move your project to Polygon to increase demand and save on gas. Now it's your job to make this happen!

For this project, you will deploy an NFT collection on the Ethereum blockchain, Map the collection to Polygon, and Transfer assets over via the Polygon Bridge. To put a twist on the project, use an image generation tool - like DALLE 2 or Midjourney - to the images for your NFTs.


### Tools Used
Hardhat
Foundry (optionally)


### Objective
  
  To successfully complete the Final Challenge, your project should:

    Generate a 5-item collection using DALLE 2 or Midjourney
    
    Store items on IPFS using pinata.cloud
    
    Deploy an ERC721 or ERC1155 to the Goerli Ethereum Testnet
    
    You should have a promptDescription function on the contract that returns the prompt you used to generate the images
    
    Map Your NFT Collection using Polygon network token mapper. Note: this isn’t necessary but helpful for visualization.
    
    Write a hardhat script to batch mint all NFTs. Hint: ERC721A is optimal here.
    
    Write a hardhat script to batch transfer all NFTs from Ethereum to Polygon Mumbai using the FxPortal Bridge
        Approve the NFTs to be transferred
        Deposit the NFTs to the Bridge
        Test balanceOf on Mumbai

        
### How to run
1. Clone this repository
2. Create NFTs using any AI image generation tool
3. Upload your nfts on IPFS
4. In hardhat config add ur networks & pvt key of ur wallet
5. In terminal run
  ```npm i```
6. Create a Smart contract (using erc 721),Add prompt description function, Add it in contract
  ```npx hardhat compile```
7. To deploy the smart contract run deploy.js
  ```npx hardhat run scripts/deploy.js --network goerli```
8. To call prompt description run prompt.js
  ```npx hardhat run scripts/prompt.js --network goerli```
9. To mint 5 NFts together run batchmint.js
  ```npx hardhat run scripts/batchmint.js --network goerli```
10. To transfer NFTs to bridge than to mumbai network run bridge.js
  ```npx hardhat run scripts/bridge.js --network goerli```
11. Run mumBal.js to check nft balnce on mumbai netwrok
  ```npx hardhat run scripts/mumBal.js --network mumbai```
Notw: Ensure that you have enough balance of both mumbai & goerli network to pay the gas fees.          

## Authors

harshitsani2002@gmail.com


## License

This project is licensed under the Harshit License - see the LICENSE.md file for details





