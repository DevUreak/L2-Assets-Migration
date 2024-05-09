/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  UpgradeL1Bridge,
  UpgradeL1BridgeInterface,
} from "../../contracts/UpgradeL1Bridge";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20DepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ERC20WithdrawalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHDepositInitiated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "ETHWithdrawalFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "oldHashed",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newHashed",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "Edited",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    name: "ForceWithdraw",
    type: "event",
  },
  {
    inputs: [],
    name: "active",
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
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositERC20To",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_l2Gas",
        type: "uint32",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "depositETHTo",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "deposits",
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
    name: "donateETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_old",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_new",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
    ],
    name: "editMigration",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2Token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeERC20Withdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "finalizeETHWithdrawal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "forceActive",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "forceWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "token",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct UpgradeL1Bridge.ClaimParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "forceWithdrawAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_claimer",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "generateKey",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_l1messenger",
        type: "address",
      },
      {
        internalType: "address",
        name: "_l2TokenBridge",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "l2TokenBridge",
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
    name: "messenger",
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
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "registry",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam[]",
        name: "_params",
        type: "tuple[]",
      },
    ],
    name: "verifyRegistry",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "claimer",
            type: "address",
          },
          {
            internalType: "bytes32",
            name: "key",
            type: "bytes32",
          },
        ],
        internalType: "struct UpgradeL1Bridge.AssetsParam[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052341561000f57600080fd5b600080546001600160a01b03191690556004805460ff1916905561204e80610039608039806080f3fe6040608081526004361061042d576000803560e01c6302fb0c5e81146100ea576304432b4d811461013057631532ec348114610150576317971947811461017a57633cb747bf81146101ab5763485cc95581146101e357634ad837068114610207576357490b068114610224576358a997f6811461025757635f32902981146102835763838b252081146102a957638b4c40b081146102d757638f601f6681146102e0576391c49bf881146103635763952d8796811461039c57639a2ac6d581146103b95763a9f9e67581146103d75763b1a1a88281146103f95763e41e6c93811461040d5761042a565b34156100f4578182fd5b6100fd36610442565b60045460ff1615156080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b341561013a578182fd5b61014336610442565b61014b610943565b818351f35b341561015a578182fd5b610163366104c2565b6101708183858789611c29565b5050505050818351f35b3415610184578182fd5b61018d36610531565b6101978183610cba565b9150508351806101a783836105a6565b0381f35b34156101b5578182fd5b6101be36610442565b8154835173ffffffffffffffffffffffffffffffffffffffff90911680825290602081f35b34156101ed578182fd5b6101f63661060b565b61020081836114c2565b5050818351f35b3415610211578182fd5b61021a36610531565b6102008183610eda565b341561022e578182fd5b61023736610642565b610242818385610f23565b925050508351806101a7838390815260200190565b3415610261578182fd5b61026a36610681565b61027881838587898b611876565b505050505050818351f35b341561028d578182fd5b61029636610708565b6102a1818385610e04565b505050818351f35b34156102b3578182fd5b6102bc3661073d565b6102cb81838587898b8d611899565b50505050505050818351f35b61014b36610442565b34156102ea578182fd5b6102f33661060b565b61034e816103228473ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b73ffffffffffffffffffffffffffffffffffffffff821660005280602052505060006040600020905090565b549150508351806101a7838390815260200190565b341561036d578182fd5b61037636610442565b600154835173ffffffffffffffffffffffffffffffffffffffff90911680825290602081f35b34156103a6578182fd5b6103af366107d8565b6102008183611096565b6103c236610804565b6103ce8183858761173d565b50505050818351f35b34156103e1578182fd5b6103ea36610873565b6102cb81838587898b8d611d43565b610402366108e5565b6102a18183856116d6565b3415610417578182fd5b61042036610531565b61020081836109c6565b50505b503661043d5761043b6115d5565b005b600080fd5b60006003198201121561045457600080fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8116811461045457600080fd5b60008083601f84011261048b57600080fd5b50813567ffffffffffffffff8111156104a357600080fd5b6020830191508360208285010111156104bb57600080fd5b9250929050565b60008060008060006080600319870112156104dc57600080fd5b6004356104e881610457565b94506024356104f681610457565b9350604435925060643567ffffffffffffffff81111561051557600080fd5b6105228782600401610479565b96989597509395939492505050565b60008060206003198401121561054657600080fd5b60043567ffffffffffffffff8082111561055f57600080fd5b84602383011261056e57600080fd5b81600401358181111561058057600080fd5b8560248260061b850101111561059557600080fd5b602483019450809350505050915091565b602080825282518282018190526000919060409081850190868401855b828110156105fe578151805173ffffffffffffffffffffffffffffffffffffffff1685528601518685015292840192908501906001016105c3565b5091979650505050505050565b60008060406003198401121561062057600080fd5b60043561062c81610457565b915060243561063a81610457565b919391925050565b600080600060606003198501121561065957600080fd5b60043561066581610457565b925060243561067381610457565b929492935050604435919050565b60008060008060008060a06003198801121561069c57600080fd5b6004356106a881610457565b95506024356106b681610457565b9450604435935060643563ffffffff811681146106d257600080fd5b925060843567ffffffffffffffff8111156106ec57600080fd5b6106f98882600401610479565b97999698509496939592505050565b600080600060606003198501121561071f57600080fd5b6004359250602435915060443561073581610457565b929491935050565b600080600080600080600060c06003198901121561075a57600080fd5b60043561076681610457565b965060243561077481610457565b955060443561078281610457565b9450606435935060843563ffffffff8116811461079e57600080fd5b925060a43567ffffffffffffffff8111156107b857600080fd5b6107c58982600401610479565b989a979950959794969395949392505050565b6000806040600319840112156107ed57600080fd5b6004356107f981610457565b936024359350915050565b60008060008060606003198601121561081c57600080fd5b60043561082881610457565b935060243563ffffffff8116811461083f57600080fd5b925060443567ffffffffffffffff81111561085957600080fd5b6108668682600401610479565b9597949650949392505050565b600080600080600080600060c06003198901121561089057600080fd5b60043561089c81610457565b96506024356108aa81610457565b95506044356108b881610457565b94506064356108c681610457565b9350608435925060a43567ffffffffffffffff8111156107b857600080fd5b60008060006040600319850112156108fc57600080fd5b60043563ffffffff8116811461091157600080fd5b925060243567ffffffffffffffff81111561092b57600080fd5b6109388582600401610479565b949690955092505050565b33156109925760405162461bcd60e51b815260206004820152600b60248201527f4f6e6c7920436c6f7365720000000000000000000000000000000000000000006044820152606481fd5b0381fd5b60045460ff80821615167fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082161760045550565b3315610a115760405162461bcd60e51b815260206004820152600b60248201527f4f6e6c7920436c6f7365720000000000000000000000000000000000000000006044820152606481fd5b60005b82811015610ad657602080610a2a838686610b72565b01356000526003808252604073ffffffffffffffffffffffffffffffffffffffff816000205416610ac357610a60848787610b72565b35610a6a81610457565b83610a76868989610b72565b0135600090815283855282902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8316179055505b505050610acf81610b0a565b9050610a14565b505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610b3c57610b3c610adb565b5060010190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000828410610b8357610b83610b43565b8360061b820190509392505050565b60008135610b9f81610457565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6040810181811067ffffffffffffffff82111715610bf457610bf4610ba5565b60405250565b6020810181811067ffffffffffffffff82111715610bf457610bf4610ba5565b60a0810181811067ffffffffffffffff82111715610bf457610bf4610ba5565b601f19601f830116810181811067ffffffffffffffff82111715610c6057610c60610ba5565b6040525050565b604051610c7381610bd4565b90565b600067ffffffffffffffff821115610c9057610c90610ba5565b5060051b60200190565b600081518310610cac57610cac610b43565b5060059190911b0160200190565b6000610cc583610c76565b60408051610cd38382610c3a565b858152601f19610ce287610c76565b01925060005b83811015610d18578251610cfb81610bd4565b600080825260208083019190915283830181019190915201610ce8565b50600092505b85831015610dfb5760209150610d85610d6c610d5284610d3f878b8b610b72565b0135600090815260036020526040902090565b5473ffffffffffffffffffffffffffffffffffffffff1690565b73ffffffffffffffffffffffffffffffffffffffff1690565b610deb57610d9c610d97848888610b72565b610b92565b82610da8858989610b72565b0135610db2610c67565b73ffffffffffffffffffffffffffffffffffffffff83168152818582015280610ddb8786610c9a565b52505050610de98382610c9a565b505b610df483610b0a565b9250610d1e565b95945050505050565b3315610e4f5760405162461bcd60e51b815260206004820152600b60248201527f4f6e6c7920436c6f7365720000000000000000000000000000000000000000006044820152606481fd5b60008181526003602052604080822080547fffffffffffffffffffffffff00000000000000000000000000000000000000009081169091558483529120805490911673ffffffffffffffffffffffffffffffffffffffff85161790558282827fde14d4c8329ab9fcdd07a11f85ccfdaa383432f05a34140d43b20f5d93be089c6000604051a4505050565b60005b82811015610ad657610ef0818484610b72565b35610efa81610457565b610f126020610f0a848787610b72565b013582611096565b50610f1c81610b0a565b9050610edd565b604051606082811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602084019081529185901b16603483015260488083018690528252600091906068610f7a8184610c3a565b5090519020949350505050565b600067ffffffffffffffff821115610fa157610fa1610ba5565b50601f01601f191660200190565b60006040516020810181811067ffffffffffffffff82111715610fd457610fd4610ba5565b80604052600082528192506000368237505090565b60003d801561101e573d610ffc81610f87565b6040516110098282610c3a565b8281528094503d6000602083013e5050505090565b606091505090565b806104545760405162461bcd60e51b815260206004820152603460248201527f5472616e7366657248656c7065723a3a736166655472616e736665724554483a60448201527f20455448207472616e73666572206661696c65640000000000000000000000006064820152608481fd5b604051606082811b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000908116602084019081523390921b1660348301526048808301859052825260686110e98184610c3a565b509051902073ffffffffffffffffffffffffffffffffffffffff8061111c610d5284600090815260036020526040902090565b1633811480158061112b575081155b80156111785760405162461bcd60e51b815260206004820152600b60248201527f6e6f7420636c61696d657200000000000000000000000000000000000000000060448201529250606483fd5b505050600082815260036020526040902080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690558216801580156111e8576111c1610faf565b60008082516020840189335af190506111d8610fe9565b506111e281611026565b506111f3565b6111f3853384611248565b50506040805173ffffffffffffffffffffffffffffffffffffffff841681526020810185905290339083907f9570d360679f48443322a65d5cabe1ef5a81d7624db792a20c7a6f3eb5de36f59084a350505050565b6040517fa9059cbb00000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff831660248201526044808201859052815260646112a38183610c3a565b506112ae818361134d565b50505050565b6000602082840312156112c657600080fd5b815180151581146112d657600080fd5b9392505050565b806104545760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608481fd5b73ffffffffffffffffffffffffffffffffffffffff811660405161137081610bd4565b60208082527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481830152823b6113e45760405162461bcd60e51b8152816004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606481fd5b60008086518388016000875af19250611405826113ff610fe9565b8561147d565b92508251915081156114295761142961142482848601018386016112b4565b6112dd565b5050505050565b6000815180845260005b818110156114565760208185018101518683018201520161143a565b81811115611468576000602083870101525b50601f01601f19169290920160200192915050565b606081801561148f57839150506112d6565b8351158015906114a157845185602001fd5b60405162461bcd60e51b8152602060048201528061098e6024830189611430565b60005473ffffffffffffffffffffffffffffffffffffffff8082161561154d5760405162461bcd60e51b815260206004820152602660248201527f436f6e74726163742068617320616c7265616479206265656e20696e6974696160448201527f6c697a65642e00000000000000000000000000000000000000000000000000006064820152608481fd5b7fffffffffffffffffffffffff0000000000000000000000000000000000000000818416818416176000558185168160015416176001555050505050565b806104545760405162461bcd60e51b815260206004820152600f60248201527f4163636f756e74206e6f7420454f4100000000000000000000000000000000006044820152606481fd5b6115e0333b1561158b565b6040516115ec81610bfa565b600081526040517f662a633a0000000000000000000000000000000000000000000000000000000060208201526000602482015273deaddeaddeaddeaddeaddeaddeaddeaddead000060448201523360648201523360848201523460a482015260c060c48201528061166160e4830184611430565b03601f19810182526116738183610c3a565b5061169c8161169760015473ffffffffffffffffffffffffffffffffffffffff1690565b611eb1565b5060405133337f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f23836116cf863487611753565b0384a35050565b6116e1333b1561158b565b610ad66116ef3685856116f7565b823333611774565b600061170283610f87565b60405161170f8282610c3a565b80925084815285858501111561172457600080fd5b8484602083013760006020868301015250509392505050565b6112ae61174b3686866116f7565b838333611774565b81815260406020820152600061176c6040830185611430565b949350505050565b6040517f662a633a0000000000000000000000000000000000000000000000000000000060208201526000602482015273deaddeaddeaddeaddeaddeaddeaddeaddead0000604482015273ffffffffffffffffffffffffffffffffffffffff8281166064830152831660848201523460a482015260c060c4820152806117fd60e4820187611430565b03601f198101825261180f8183610c3a565b50611839818561183460015473ffffffffffffffffffffffffffffffffffffffff1690565b611f5c565b5060405182827f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f238361186c893487611753565b0384a35050505050565b611881333b1561158b565b6118918686868633338888611992565b505050505050565b6118a98787878787338888611992565b50505050505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff80841683528085166020840152808616604084015280871660608401525086608083015260c060a083015261192d60c083018a8a6118b2565b9998505050505050505050565b6000821982111561194d5761194d610adb565b500190565b73ffffffffffffffffffffffffffffffffffffffff821681528260208201526060604082015260006119886060830187876118b2565b9695505050505050565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff8085166024830152306044830152866064830152606482526119f182610c1a565b6119fd8282851661134d565b50506040517f662a633a00000000000000000000000000000000000000000000000000000000602082015280611a3c8a8a898989898960248a016118dd565b03601f1981018252611a4e8183610c3a565b50611a73818861183460015473ffffffffffffffffffffffffffffffffffffffff1690565b50611aad85611aa7846103228573ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b5461193a565b611adc836103228473ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b556040518383837f718594027abd4eaed59f95162563e0cc6d0e8d5b86b1c7be8b1b0ac3343d039684611b128e8e8d8d8a611952565b0385a4505050505050505050565b806104545760405162461bcd60e51b815260206004820152602e60248201527f4f564d5f58434841494e3a206d657373656e67657220636f6e7472616374207560448201527f6e61757468656e746963617465640000000000000000000000000000000000006064820152608481fd5b600060208284031215611ba257600080fd5b81516112d681610457565b6040513d6000823e3d81fd5b806104545760405162461bcd60e51b815260206004820152603060248201527f4f564d5f58434841494e3a2077726f6e672073656e646572206f662063726f7360448201527f732d646f6d61696e206d657373616765000000000000000000000000000000006064820152608481fd5b73ffffffffffffffffffffffffffffffffffffffff8060015416600082815416611c54813314611b20565b803b611c5e578182fd5b6040517f6e296e45000000000000000000000000000000000000000000000000000000008152602081600483855afa915081611c9c57611c9c611bad565b828215611cbc57611cad3d83610c3a565b611cb93d830183611b90565b90505b611cc98587831614611bb9565b505050611cd4610faf565b9250808184516020860189895af192505050611cee610fe9565b50611cf881611026565b506040518381526040602082015282827f2ac69ee804d9a7a0984249f508dfab7cb2534b465b6ce1580f99a38ba9c5e63183611d38604086018b8b6118b2565b0384a3505050505050565b73ffffffffffffffffffffffffffffffffffffffff8060015416600082815416611d6e813314611b20565b803b611d78578182fd5b6040517f6e296e45000000000000000000000000000000000000000000000000000000008152602081600483855afa915081611db657611db6611bad565b828215611dd657611dc73d83610c3a565b611dd33d830183611b90565b90505b611de38587831614611bb9565b50505091831680835260026020908152604080852073ffffffffffffffffffffffffffffffffffffffff881660009081529252902090929054915087821015611e2e57611e2e610adb565b8281526002602090815260409182902073ffffffffffffffffffffffffffffffffffffffff87166000908152915220908790039055611e6e868683611248565b506040518383837f3ceee06c1e37648fcbb6ed52e17b3e1f275a1f8c7b22a84b2b84732431e046b384611ea48d8d8d8d8a611952565b0385a45050505050505050565b73ffffffffffffffffffffffffffffffffffffffff600081815416803b611ed6578182fd5b6040517f3dbb202b000000000000000000000000000000000000000000000000000000008152838516600482015260606024820152611f186064820187611430565b935062030d40604482015282818286038386865af1935083611f3c57611f3c611bad565b831561189157611f4c3d82610c3a565b82813d8301031215611891578283fd5b73ffffffffffffffffffffffffffffffffffffffff600081815416803b611f81578182fd5b6040517f3dbb202b000000000000000000000000000000000000000000000000000000008152838516600482015260606024820152611fc36064820188611430565b935063ffffffff8616604482015282818286038386865af1935083611fea57611fea611bad565b83156118a957611ffa3d82610c3a565b82813d83010312156118a9578283fdfea364697066735822122043b0773b7f76ef6d6a1aecfb2c28dd9b106e2572d38e7dc1cf3962a21d8b13c06c6578706572696d656e74616cf564736f6c63430008090041";

type UpgradeL1BridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeL1BridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeL1Bridge__factory extends ContractFactory {
  constructor(...args: UpgradeL1BridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UpgradeL1Bridge> {
    return super.deploy(overrides || {}) as Promise<UpgradeL1Bridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UpgradeL1Bridge {
    return super.attach(address) as UpgradeL1Bridge;
  }
  override connect(signer: Signer): UpgradeL1Bridge__factory {
    return super.connect(signer) as UpgradeL1Bridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeL1BridgeInterface {
    return new utils.Interface(_abi) as UpgradeL1BridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeL1Bridge {
    return new Contract(address, _abi, signerOrProvider) as UpgradeL1Bridge;
  }
}
