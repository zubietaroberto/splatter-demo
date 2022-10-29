/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CollectNFT, CollectNFTInterface } from "../CollectNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InitParamsInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidParameter",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProfileOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSourcePublicationPointer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "salePrice",
        type: "uint256",
      },
    ],
    name: "royaltyInfo",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "royaltyBasisPoints",
        type: "uint256",
      },
    ],
    name: "setRoyalty",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620027413803806200274183398101604081905262000034916200007b565b6001600160a01b0381166200005c576040516348be0eb360e01b815260040160405180910390fd5b6001600160a01b0316608052600e805460ff19166001179055620000ad565b6000602082840312156200008e57600080fd5b81516001600160a01b0381168114620000a657600080fd5b9392505050565b608051612655620000ec600039600081816103f0015281816107850152818161097501528181610c4b0152818161107d0152611a0801526126556000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c806350ddf35c1161010f578063a4c52b86116100a2578063dd69cdb111610071578063dd69cdb114610478578063e985e9c51461048b578063ed24911d146104c7578063f990ccd7146104cf57600080fd5b8063a4c52b86146103eb578063b88d4fde14610412578063c0da9bcd14610425578063c87b56dd1461046557600080fd5b80637ef67f99116100de5780637ef67f99146103aa57806389028a13146103bd57806395d89b41146103d0578063a22cb465146103d857600080fd5b806350ddf35c1461035e5780636352211e146103715780636a6278421461038457806370a082311461039757600080fd5b80632f745c591161018757806342842e0e1161015657806342842e0e1461031257806342966c68146103255780634f558e79146103385780634f6ccce71461034b57600080fd5b80632f745c59146102be5780633a755ed1146102d15780633fa78c0a146102ec5780634209a2e1146102ff57600080fd5b8063095ea7b3116101c3578063095ea7b31461025257806318160ddd1461026757806323b872dd146102795780632a55205a1461028c57600080fd5b806301ffc9a7146101ea57806306fdde0314610212578063081812fc14610227575b600080fd5b6101fd6101f8366004611e7e565b6104ef565b60405190151581526020015b60405180910390f35b61021a61051a565b6040516102099190611efa565b61023a610235366004611f0d565b6105ac565b6040516001600160a01b039091168152602001610209565b610265610260366004611f3b565b610639565b005b6008545b604051908152602001610209565b610265610287366004611f67565b61074f565b61029f61029a366004611fa8565b610780565b604080516001600160a01b039093168352602083019190915201610209565b61026b6102cc366004611f3b565b61083b565b600b54600c5460408051928352602083019190915201610209565b6102656102fa36600461200c565b6108d1565b61026561030d366004611f0d565b610961565b610265610320366004611f67565b610a48565b610265610333366004611f0d565b610a63565b6101fd610346366004611f0d565b610a93565b61026b610359366004611f0d565b610a9e565b61026b61036c366004611f0d565b610b31565b61023a61037f366004611f0d565b610bc7565b61026b61039236600461208f565b610c3e565b61026b6103a536600461208f565b610c9e565b6102656103b83660046120c4565b610d25565b6102656103cb366004612118565b610e0b565b61021a610ed0565b6102656103e6366004612171565b610edf565b61023a7f000000000000000000000000000000000000000000000000000000000000000081565b610265610420366004612215565b610f47565b610438610433366004611f0d565b610f79565b6040805182516001600160a01b031681526020928301516001600160601b03169281019290925201610209565b61021a610473366004611f0d565b611038565b6102656104863660046122c4565b6110fe565b6101fd6104993660046122e8565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61026b61118c565b61026b6104dd36600461208f565b600a6020526000908152604090205481565b60006001600160e01b0319821663152a902d60e11b148061051457506105148261119b565b92915050565b60606000805461052990612321565b80601f016020809104026020016040519081016040528092919081815260200182805461055590612321565b80156105a25780601f10610577576101008083540402835291602001916105a2565b820191906000526020600020905b81548152906001019060200180831161058557829003601f168201915b5050505050905090565b60006105b7826111c0565b61061d5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061064482610bc7565b9050806001600160a01b0316836001600160a01b031614156106b25760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610614565b336001600160a01b03821614806106ce57506106ce8133610499565b6107405760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c00000000000000006064820152608401610614565b61074a83836111dd565b505050565b610759338261124b565b6107755760405162461bcd60e51b815260040161061490612356565b61074a838383611335565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316636352211e600b546040518263ffffffff1660e01b81526004016107d391815260200190565b602060405180830381865afa1580156107f0573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061081491906123a7565b600f546127109061082590866123da565b61082f91906123f9565b915091505b9250929050565b600061084683610c9e565b82106108a85760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610614565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600e5460ff16156108f5576040516302ed543d60e51b815260040160405180910390fd5b600e805460ff191660011790556103e8600f55600b869055600c85905561091e848484846114e0565b84867f898a2dec95856255977a0fb48cebc30051d50c0d8d33f93dea1e3ddb2e3424424260405161095191815260200190565b60405180910390a3505050505050565b600b546040516331a9108f60e11b815233917f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031691636352211e916109b49160040190815260200190565b602060405180830381865afa1580156109d1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f591906123a7565b6001600160a01b03161415610a2c57612710811115610a2757604051630309cb8760e51b815260040160405180910390fd5b600f55565b60405163f194fae560e01b815260040160405180910390fd5b50565b61074a83838360405180602001604052806000815250610f47565b610a6d338261124b565b610a8a57604051636d8a29e760e11b815260040160405180910390fd5b610a4581611531565b6000610514826111c0565b6000610aa960085490565b8210610b0c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610614565b60088281548110610b1f57610b1f61241b565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b031680610bb85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b6064820152608401610614565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b0316806105145760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610614565b6000336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610c89576040516313bd2e8360e31b815260040160405180910390fd5b600d80546001019081905561051483826115cd565b60006001600160a01b038216610d095760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610614565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610d4c576040516307eb16dd60e21b815260040160405180910390fd5b6000610d5783610bc7565b6001600160a01b038181166000908152600a602090815260409182902080546001810190915582517f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad9281019290925292881691810191909152606080820187905260808201929092529084013560a0820152909150610dfb90610df49060c0015b6040516020818303038152906040528051906020012061170f565b8284611759565b610e0584846111dd565b50505050565b6001600160a01b038316610e32576040516307eb16dd60e21b815260040160405180910390fd5b6001600160a01b038481166000818152600a602090815260409182902080546001810190915582517f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9281019290925291810192909252918516606080830191909152841515608083015260a08201929092529082013560c0820152610ec590610ebe9060e001610dd9565b8583611759565b610e05848484611837565b60606001805461052990612321565b6001600160a01b038216331415610f385760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c6572000000000000006044820152606401610614565b610f43338383611837565b5050565b610f51338361124b565b610f6d5760405162461bcd60e51b815260040161061490612356565b610e05848484846118a4565b6040805180820190915260008082526020820152610f96826111c0565b610ff95760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b6064820152608401610614565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6060611043826111c0565b6110605760405163677510db60e11b815260040160405180910390fd5b600b54600c54604051635ad18a4b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263b5a31496926110b992600401918252602082015260400190565b600060405180830381865afa1580156110d6573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526105149190810190612431565b600061110983610bc7565b6001600160a01b0381166000908152600a602090815260409182902080546001810190915582517f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a9281019290925291810186905260608082019290925290840135608082015290915061118390610df49060a001610dd9565b61074a83611531565b60006111966118d7565b905090565b60006001600160e01b0319821663780e9d6360e01b148061051457506105148261196c565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061121282610bc7565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000611256826111c0565b6112b75760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610614565b60006112c283610bc7565b9050806001600160a01b0316846001600160a01b031614806112fd5750836001600160a01b03166112f2846105ac565b6001600160a01b0316145b8061132d57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661134882610bc7565b6001600160a01b0316146113b05760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610614565b6001600160a01b0382166114125760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610614565b61141d8383836119bc565b6114286000826111dd565b6001600160a01b03831660009081526003602052604081208054600192906114519084906124a8565b90915550506001600160a01b038216600090815260036020526040812080546001929061147f9084906124bf565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6114ec84848484611a69565b7f414cd0b34676984f09a5f76ce9718d4062e50283abe0e7e274a9a5b4e0c99c308484848442604051611523959493929190612500565b60405180910390a150505050565b600061153c82610bc7565b905061154a816000846119bc565b6115556000836111dd565b6001600160a01b038116600090815260036020526040812080546001929061157e9084906124a8565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b0382166116235760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610614565b61162c816111c0565b156116795760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e746564000000006044820152606401610614565b611685600083836119bc565b6001600160a01b03821660009081526003602052604081208054600192906116ae9084906124bf565b90915550506000818152600260205260408082206001600160a01b038516600160a01b426001600160601b031602811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008061171a6118d7565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600135101561177e57604051630819bdcd60e01b815260040160405180910390fd5b6000600184611790602085018561253a565b604080516000815260208181018084529490945260ff9092168282015291850135606082015290840135608082015260a0016020604051602081039080840390855afa1580156117e4573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806118195750826001600160a01b0316816001600160a01b031614155b15610e05576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6118af848484611335565b6118bb84848484611a89565b610e055760405162461bcd60e51b81526004016106149061255d565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61190261051a565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b60006001600160e01b031982166380ac58cd60e01b148061199d57506001600160e01b03198216635b5e139f60e01b145b8061051457506301ffc9a760e01b6001600160e01b0319831614610514565b6119c7838383611b87565b600b54600c546040516386e2947b60e01b815260048101929092526024820152604481018290526001600160a01b03848116606483015283811660848301527f000000000000000000000000000000000000000000000000000000000000000016906386e2947b9060a401600060405180830381600087803b158015611a4c57600080fd5b505af1158015611a60573d6000803e3d6000fd5b50505050505050565b611a7560008585611dcf565b50611a8260018383611dcf565b5050505050565b60006001600160a01b0384163b15611b7c57604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611acd9033908990889088906004016125af565b6020604051808303816000875af1925050508015611b08575060408051601f3d908101601f19168201909252611b05918101906125ec565b60015b611b62573d808015611b36576040519150601f19603f3d011682016040523d82523d6000602084013e611b3b565b606091505b508051611b5a5760405162461bcd60e51b81526004016106149061255d565b805181602001fd5b6001600160e01b031916630a85bd0160e11b14905061132d565b506001949350505050565b6001600160a01b038316611be257611bdd81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611c05565b816001600160a01b0316836001600160a01b031614611c0557611c058382611c3f565b6001600160a01b038216611c1c5761074a81611cdc565b826001600160a01b0316826001600160a01b03161461074a5761074a8282611d8b565b60006001611c4c84610c9e565b611c5691906124a8565b600083815260076020526040902054909150808214611ca9576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611cee906001906124a8565b60008381526009602052604081205460088054939450909284908110611d1657611d1661241b565b906000526020600020015490508060088381548110611d3757611d3761241b565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611d6f57611d6f612609565b6001900381819060005260206000200160009055905550505050565b6000611d9683610c9e565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b828054611ddb90612321565b90600052602060002090601f016020900481019282611dfd5760008555611e43565b82601f10611e165782800160ff19823516178555611e43565b82800160010185558215611e43579182015b82811115611e43578235825591602001919060010190611e28565b50611e4f929150611e53565b5090565b5b80821115611e4f5760008155600101611e54565b6001600160e01b031981168114610a4557600080fd5b600060208284031215611e9057600080fd5b8135611e9b81611e68565b9392505050565b60005b83811015611ebd578181015183820152602001611ea5565b83811115610e055750506000910152565b60008151808452611ee6816020860160208601611ea2565b601f01601f19169290920160200192915050565b602081526000611e9b6020830184611ece565b600060208284031215611f1f57600080fd5b5035919050565b6001600160a01b0381168114610a4557600080fd5b60008060408385031215611f4e57600080fd5b8235611f5981611f26565b946020939093013593505050565b600080600060608486031215611f7c57600080fd5b8335611f8781611f26565b92506020840135611f9781611f26565b929592945050506040919091013590565b60008060408385031215611fbb57600080fd5b50508035926020909101359150565b60008083601f840112611fdc57600080fd5b50813567ffffffffffffffff811115611ff457600080fd5b60208301915083602082850101111561083457600080fd5b6000806000806000806080878903121561202557600080fd5b8635955060208701359450604087013567ffffffffffffffff8082111561204b57600080fd5b6120578a838b01611fca565b9096509450606089013591508082111561207057600080fd5b5061207d89828a01611fca565b979a9699509497509295939492505050565b6000602082840312156120a157600080fd5b8135611e9b81611f26565b6000608082840312156120be57600080fd5b50919050565b600080600060c084860312156120d957600080fd5b83356120e481611f26565b9250602084013591506120fa85604086016120ac565b90509250925092565b8035801515811461211357600080fd5b919050565b60008060008060e0858703121561212e57600080fd5b843561213981611f26565b9350602085013561214981611f26565b925061215760408601612103565b915061216686606087016120ac565b905092959194509250565b6000806040838503121561218457600080fd5b823561218f81611f26565b915061219d60208401612103565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156121e5576121e56121a6565b604052919050565b600067ffffffffffffffff821115612207576122076121a6565b50601f01601f191660200190565b6000806000806080858703121561222b57600080fd5b843561223681611f26565b9350602085013561224681611f26565b925060408501359150606085013567ffffffffffffffff81111561226957600080fd5b8501601f8101871361227a57600080fd5b803561228d612288826121ed565b6121bc565b8181528860208385010111156122a257600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060a083850312156122d757600080fd5b8235915061219d84602085016120ac565b600080604083850312156122fb57600080fd5b823561230681611f26565b9150602083013561231681611f26565b809150509250929050565b600181811c9082168061233557607f821691505b602082108114156120be57634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b6000602082840312156123b957600080fd5b8151611e9b81611f26565b634e487b7160e01b600052601160045260246000fd5b60008160001904831182151516156123f4576123f46123c4565b500290565b60008261241657634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052603260045260246000fd5b60006020828403121561244357600080fd5b815167ffffffffffffffff81111561245a57600080fd5b8201601f8101841361246b57600080fd5b8051612479612288826121ed565b81815285602083850101111561248e57600080fd5b61249f826020830160208601611ea2565b95945050505050565b6000828210156124ba576124ba6123c4565b500390565b600082198211156124d2576124d26123c4565b500190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6060815260006125146060830187896124d7565b82810360208401526125278186886124d7565b9150508260408301529695505050505050565b60006020828403121561254c57600080fd5b813560ff81168114611e9b57600080fd5b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906125e290830184611ece565b9695505050505050565b6000602082840312156125fe57600080fd5b8151611e9b81611e68565b634e487b7160e01b600052603160045260246000fdfea264697066735822122094a7d1151b24718d2ef2efd4c223f2cbdf037bb98814de5700e1e57467e05aba64736f6c634300080a0033";

type CollectNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollectNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollectNFT__factory extends ContractFactory {
  constructor(...args: CollectNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollectNFT> {
    return super.deploy(hub, overrides || {}) as Promise<CollectNFT>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): CollectNFT {
    return super.attach(address) as CollectNFT;
  }
  connect(signer: Signer): CollectNFT__factory {
    return super.connect(signer) as CollectNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectNFTInterface {
    return new utils.Interface(_abi) as CollectNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollectNFT {
    return new Contract(address, _abi, signerOrProvider) as CollectNFT;
  }
}
