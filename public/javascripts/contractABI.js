let products = [];
let sellerProducts = [];
var event = new Event("showCategory");
let trades = [];
let chats = [];
let myContract;
let ipfs;
const contractAddress = "0x7B844C9B50b07e1731b6BBE967f1b7b8b5Cd9DD2";
contractABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addressSeller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "talId",
        type: "string",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addressBuyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "divided",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "countAgree",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "balanceOf",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "tradeId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "useReport",
        type: "string",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
      {
        indexed: false,
        internalType: "string",
        name: "productCid",
        type: "string",
      },
    ],
    name: "InfoTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "trId",
        type: "uint256",
      },
    ],
    name: "NewTrade",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "useReport",
        type: "string",
      },
    ],
    name: "NewUseReport",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addressSeller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addressBuyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
    ],
    name: "RespondAgree",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addressSeller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "addressBuyer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isFinished",
        type: "bool",
      },
    ],
    name: "RespondCancel",
    type: "event",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_idx",
        type: "uint256",
      },
    ],
    name: "getCategoryRoot",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256",
      },
    ],
    name: "getChat",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_sellerIdx",
        type: "uint256",
      },
    ],
    name: "getSeller",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_sellerID",
        type: "uint256",
      },
    ],
    name: "getSellerTrade",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "addressSeller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "talentId",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "addressBuyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "divided",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "countAgree",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balanceOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cancelStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
          {
            internalType: "string",
            name: "useReport",
            type: "string",
          },
          {
            internalType: "string[5]",
            name: "msgData",
            type: "string[5]",
          },
          {
            internalType: "string",
            name: "productCid",
            type: "string",
          },
        ],
        internalType: "struct TalentData.Trade[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getTest",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "typeName",
            type: "string",
          },
          {
            internalType: "string",
            name: "file",
            type: "string",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "trId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "userIdx",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "sellerIdx",
            type: "uint256",
          },
        ],
        internalType: "struct TalentData.Test",
        name: "",
        type: "tuple",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
    ],
    name: "getTrade",
    outputs: [
      {
        components: [
          {
            internalType: "address payable",
            name: "addressSeller",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "talentId",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "addressBuyer",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "divided",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "countAgree",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "balanceOf",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "tradeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "cancelStep",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isFinished",
            type: "bool",
          },
          {
            internalType: "string",
            name: "useReport",
            type: "string",
          },
          {
            internalType: "string[5]",
            name: "msgData",
            type: "string[5]",
          },
          {
            internalType: "string",
            name: "productCid",
            type: "string",
          },
        ],
        internalType: "struct TalentData.Trade[]",
        name: "",
        type: "tuple[]",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
    ],
    name: "getUseReport",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
    ],
    name: "respondAgree",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cancelStep",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
    ],
    name: "respondCancel",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_tradeId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "setChat",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_categoryIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_sellerIdx",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_cid",
        type: "string",
      },
    ],
    name: "setSetting",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "string",
        name: "typeName",
        type: "string",
      },
      {
        internalType: "string",
        name: "file",
        type: "string",
      },
      {
        internalType: "string",
        name: "message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "userIdx",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sellerIdx",
        type: "uint256",
      },
    ],
    name: "setTest",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "address payable",
        name: "_addressSeller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_talID",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "_addressBuyer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_divded",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_productCid",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_sellerID",
        type: "uint256",
      },
    ],
    name: "setTrade",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_useReport",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_userID",
        type: "uint256",
      },
    ],
    name: "setUseReport",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
