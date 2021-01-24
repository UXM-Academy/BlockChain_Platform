contractABI = [
  {
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
    ],
    name: "getTrade",
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
        name: "_trId",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
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
    constant: false,
    inputs: [
      {
        internalType: "uint256",
        name: "_trId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cancelStep",
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
    constant: false,
    inputs: [
      {
        internalType: "address payable",
        name: "_addressSeller",
        type: "address",
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
    ],
    name: "setUseReport",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
