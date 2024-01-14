// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract Darth is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    constructor() ERC721("Darths", "DRT") {}

    string[] uri = [
        "https://gateway.pinata.cloud/ipfs/QmfPXNNnuYrLQ8jKczMy4x49wDE1xmr5nfVLPLBecRVS76",
        "https://gateway.pinata.cloud/ipfs/QmQ1LNz1Vt1hTwhTAus4NePAjxxGdXwuj5iRvj1z4XNnaX",
        "https://gateway.pinata.cloud/ipfs/Qmd1TYzdxiHANfx2NYWrSnQm5bo2hJb7QTo33qTau7kyuV",
        "https://gateway.pinata.cloud/ipfs/QmdsFkiUwyrLPZoN8pxar4tiNS55fiAvxQnS3K7EvqWXDY",
        "https://gateway.pinata.cloud/ipfs/QmUEESpTMTuvakDtyEqVgfNAv3kgnJ8Ao91ckwmuUAU1iX"
    ];

    string[] prompt = [    
        "A detailed image of a realistic robot transformer",
        "A villainous looking majestic human figure with a red lightsaber",
        "Golden robot warrior with a flamethrower arm",
        "Dark Sith lord resembling Darth Raven",
        "Huge bulked fighting robot"
    ];

    function safeMint(address to) public onlyOwner returns(uint256 ){
                _tokenIds.increment();

        uint256 tokenId = _tokenIds.current();
 
            _safeMint(to, tokenId);
            _setTokenURI(tokenId, uri[0]); // You can set the token URI if needed
            return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function promptDescription(uint256 tokenID) external view returns (string memory) {
        return prompt[tokenID];
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
