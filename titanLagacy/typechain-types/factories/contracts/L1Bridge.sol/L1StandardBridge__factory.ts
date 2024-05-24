/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  L1StandardBridge,
  L1StandardBridgeInterface,
} from "../../../contracts/L1Bridge.sol/L1StandardBridge";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x6080604052341561000f57600080fd5b600080546001600160a01b03191690556003805460ff191660011790556117a38061003c608039806080f3fe604060808152600436106102f0576000803560e01c6302fb0c5e811461009d57631532ec3481146100e357633cb747bf811461010d5763485cc9558114610149576358a997f6811461016d5763838b2520811461019957638b4c40b081146101c757638f601f6681146101d5576391c49bf8811461025857639a2ac6d581146102915763a9f9e67581146102af5763b1a1a88281146102d1576102ed565b34156100a7578182fd5b6100b036610305565b60035460ff1615156080527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8060a0016080f35b34156100ed578182fd5b6100f636610385565b61010381838587896112a6565b5050505050818351f35b3415610117578182fd5b61012036610305565b8154835173ffffffffffffffffffffffffffffffffffffffff90911680825290602081f35b0381f35b3415610153578182fd5b61015c366103f4565b610166818361068c565b5050818351f35b3415610177578182fd5b6101803661042b565b61018e81838587898b610c26565b505050505050818351f35b34156101a3578182fd5b6101ac366104b2565b6101bb81838587898b8d610c99565b50505050505050818351f35b6101d036610305565b818351f35b34156101df578182fd5b6101e8366103f4565b610243816102178473ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b73ffffffffffffffffffffffffffffffffffffffff821660005280602052505060006040600020905090565b54915050835180610145838390815260200190565b3415610262578182fd5b61026b36610305565b600154835173ffffffffffffffffffffffffffffffffffffffff90911680825290602081f35b61029a3661054d565b6102a681838587610a4a565b50505050818351f35b34156102b9578182fd5b6102c2366105bc565b6101bb81838587898b8d611435565b6102da3661062e565b6102e581838561098a565b505050818351f35b50505b5036610300576102fe61079f565b005b600080fd5b60006003198201121561031757600080fd5b50565b73ffffffffffffffffffffffffffffffffffffffff8116811461031757600080fd5b60008083601f84011261034e57600080fd5b50813567ffffffffffffffff81111561036657600080fd5b60208301915083602082850101111561037e57600080fd5b9250929050565b600080600080600060806003198701121561039f57600080fd5b6004356103ab8161031a565b94506024356103b98161031a565b9350604435925060643567ffffffffffffffff8111156103d857600080fd5b6103e5878260040161033c565b96989597509395939492505050565b60008060406003198401121561040957600080fd5b6004356104158161031a565b91506024356104238161031a565b919391925050565b60008060008060008060a06003198801121561044657600080fd5b6004356104528161031a565b95506024356104608161031a565b9450604435935060643563ffffffff8116811461047c57600080fd5b925060843567ffffffffffffffff81111561049657600080fd5b6104a3888260040161033c565b97999698509496939592505050565b600080600080600080600060c0600319890112156104cf57600080fd5b6004356104db8161031a565b96506024356104e98161031a565b95506044356104f78161031a565b9450606435935060843563ffffffff8116811461051357600080fd5b925060a43567ffffffffffffffff81111561052d57600080fd5b61053a898260040161033c565b989a979950959794969395949392505050565b60008060008060606003198601121561056557600080fd5b6004356105718161031a565b935060243563ffffffff8116811461058857600080fd5b925060443567ffffffffffffffff8111156105a257600080fd5b6105af868260040161033c565b9597949650949392505050565b600080600080600080600060c0600319890112156105d957600080fd5b6004356105e58161031a565b96506024356105f38161031a565b95506044356106018161031a565b945060643561060f8161031a565b9350608435925060a43567ffffffffffffffff81111561052d57600080fd5b600080600060406003198501121561064557600080fd5b60043563ffffffff8116811461065a57600080fd5b925060243567ffffffffffffffff81111561067457600080fd5b610681858260040161033c565b949690955092505050565b60005473ffffffffffffffffffffffffffffffffffffffff808216156107175760405162461bcd60e51b815260206004820152602660248201527f436f6e74726163742068617320616c7265616479206265656e20696e6974696160448201527f6c697a65642e00000000000000000000000000000000000000000000000000006064820152608481fd5b7fffffffffffffffffffffffff0000000000000000000000000000000000000000818416818416176000558185168160015416176001555050505050565b806103175760405162461bcd60e51b815260206004820152600f60248201527f4163636f756e74206e6f7420454f4100000000000000000000000000000000006044820152606481fd5b6107aa333b15610755565b6040516107b6816108cf565b600081526040517f662a633a0000000000000000000000000000000000000000000000000000000060208201526000602482015273deaddeaddeaddeaddeaddeaddeaddeaddead000060448201523360648201523360848201523460a482015260c060c48201528061082b60e4830184610ab6565b03601f198101825261083d8183610935565b506108668161086160015473ffffffffffffffffffffffffffffffffffffffff1690565b611606565b5060405133337f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f2383610899863487610b03565b0384a35050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6020810181811067ffffffffffffffff821117156108ef576108ef6108a0565b60405250565b60a0810181811067ffffffffffffffff821117156108ef576108ef6108a0565b6040810181811067ffffffffffffffff821117156108ef576108ef6108a0565b601f19601f830116810181811067ffffffffffffffff8211171561095b5761095b6108a0565b6040525050565b600067ffffffffffffffff82111561097c5761097c6108a0565b50601f01601f191660200190565b610995333b15610755565b60ff60035416156109e95760405162461bcd60e51b815260206004820152601760248201527f506175736564204c315374616e646172644272696467650000000000000000006044820152606481fd5b0381fd5b6109ff6109f7368585610a04565b823333610b24565b505050565b6000610a0f83610962565b604051610a1c8282610935565b809250848152858585011115610a3157600080fd5b8484602083013760006020868301015250509392505050565b60ff6003541615610a9a5760405162461bcd60e51b815260206004820152601760248201527f506175736564204c315374616e646172644272696467650000000000000000006044820152606481fd5b610ab0610aa8368686610a04565b838333610b24565b50505050565b6000815180845260005b81811015610adc57602081850181015186830182015201610ac0565b81811115610aee576000602083870101525b50601f01601f19169290920160200192915050565b818152604060208201526000610b1c6040830185610ab6565b949350505050565b6040517f662a633a0000000000000000000000000000000000000000000000000000000060208201526000602482015273deaddeaddeaddeaddeaddeaddeaddeaddead0000604482015273ffffffffffffffffffffffffffffffffffffffff8281166064830152831660848201523460a482015260c060c482015280610bad60e4820187610ab6565b03601f1981018252610bbf8183610935565b50610be98185610be460015473ffffffffffffffffffffffffffffffffffffffff1690565b6116b1565b5060405182827f35d79ab81f2b2017e19afb5c5571778877782d7a8786f5907f93b0f4702f4f2383610c1c893487610b03565b0384a35050505050565b610c31333b15610755565b60ff6003541615610c815760405162461bcd60e51b815260206004820152601760248201527f506175736564204c315374616e646172644272696467650000000000000000006044820152606481fd5b610c918686868633338888610e11565b505050505050565b60ff6003541615610ce95760405162461bcd60e51b815260206004820152601760248201527f506175736564204c315374616e646172644272696467650000000000000000006044820152606481fd5b610cf98787878787338888610e11565b50505050505050565b818352818160208501375060006020828401015260006020601f19601f840116840101905092915050565b600073ffffffffffffffffffffffffffffffffffffffff80841683528085166020840152808616604084015280871660608401525086608083015260c060a0830152610d7d60c083018a8a610d02565b9998505050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60008219821115610dcc57610dcc610d8a565b500190565b73ffffffffffffffffffffffffffffffffffffffff82168152826020820152606060408201526000610e07606083018787610d02565b9695505050505050565b6040517f23b872dd00000000000000000000000000000000000000000000000000000000602082015273ffffffffffffffffffffffffffffffffffffffff808516602483015230604483015286606483015260648252610e70826108f5565b610e7c82828516611038565b50506040517f662a633a00000000000000000000000000000000000000000000000000000000602082015280610ebb8a8a898989898960248a01610d2d565b03601f1981018252610ecd8183610935565b50610ef28188610be460015473ffffffffffffffffffffffffffffffffffffffff1690565b50610f2c85610f26846102178573ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b54610db9565b610f5b836102178473ffffffffffffffffffffffffffffffffffffffff16600090815260026020526040902090565b556040518383837f718594027abd4eaed59f95162563e0cc6d0e8d5b86b1c7be8b1b0ac3343d039684610f918e8e8d8d8a610dd1565b0385a4505050505050505050565b600060208284031215610fb157600080fd5b81518015158114610fc157600080fd5b9392505050565b806103175760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608481fd5b73ffffffffffffffffffffffffffffffffffffffff811660405161105b81610915565b60208082527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c656481830152823b6110cf5760405162461bcd60e51b8152816004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606481fd5b60008086518388016000875af192506110f0826110ea61111b565b85611158565b92508251915081156111145761111461110f8284860101838601610f9f565b610fc8565b5050505050565b60003d8015611150573d61112e81610962565b60405161113b8282610935565b8281528094503d6000602083013e5050505090565b606091505090565b606081801561116a5783915050610fc1565b83511580159061117c57845185602001fd5b60405162461bcd60e51b815260206004820152806109e56024830189610ab6565b806103175760405162461bcd60e51b815260206004820152602e60248201527f4f564d5f58434841494e3a206d657373656e67657220636f6e7472616374207560448201527f6e61757468656e746963617465640000000000000000000000000000000000006064820152608481fd5b60006020828403121561121f57600080fd5b8151610fc18161031a565b6040513d6000823e3d81fd5b806103175760405162461bcd60e51b815260206004820152603060248201527f4f564d5f58434841494e3a2077726f6e672073656e646572206f662063726f7360448201527f732d646f6d61696e206d657373616765000000000000000000000000000000006064820152608481fd5b73ffffffffffffffffffffffffffffffffffffffff80600154166000828154166112d181331461119d565b803b6112db578182fd5b604080517f6e296e45000000000000000000000000000000000000000000000000000000008152602081600483865afa92508261131a5761131a61122a565b83831561133a5761132b3d83610935565b6113373d83018361120d565b90505b6113478688831614611236565b505080519450611356856108cf565b8285526020850193508236853782838651868b8b5af1945061137661111b565b50846113e8578051935062461bcd60e51b845260206004850152603460248501527f5472616e7366657248656c7065723a3a736166655472616e736665724554483a60448501527f20455448207472616e73666572206661696c65640000000000000000000000006064850152608484fd5b8051945087855280602086015286867f2ac69ee804d9a7a0984249f508dfab7cb2534b465b6ce1580f99a38ba9c5e63187611426858a018f8f610d02565b0388a350505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff806001541660008281541661146081331461119d565b803b61146a578182fd5b604080517f6e296e45000000000000000000000000000000000000000000000000000000008152602081600483865afa9250826114a9576114a961122a565b8383156114c9576114ba3d83610935565b6114c63d83018361120d565b90505b6114d68688831614611236565b50508585168084526002602090815282852073ffffffffffffffffffffffffffffffffffffffff8a1660009081529152604090209094505491508982101561152057611520610d8a565b8383526002602090815281842073ffffffffffffffffffffffffffffffffffffffff891660009081529152604090208a83039055805192507fa9059cbb00000000000000000000000000000000000000000000000000000000602084015284891660248401528960448401526044835260808301945082851067ffffffffffffffff861117156115b2576115b26108a0565b8481526115bf8385611038565b80519450505050508383837f3ceee06c1e37648fcbb6ed52e17b3e1f275a1f8c7b22a84b2b84732431e046b3846115f98d8d8d8d8a610dd1565b0385a45050505050505050565b73ffffffffffffffffffffffffffffffffffffffff600081815416803b61162b578182fd5b6040517f3dbb202b00000000000000000000000000000000000000000000000000000000815283851660048201526060602482015261166d6064820187610ab6565b935062030d40604482015282818286038386865af19350836116915761169161122a565b8315610c91576116a13d82610935565b82813d8301031215610c91578283fd5b73ffffffffffffffffffffffffffffffffffffffff600081815416803b6116d6578182fd5b6040517f3dbb202b0000000000000000000000000000000000000000000000000000000081528385166004820152606060248201526117186064820188610ab6565b935063ffffffff8616604482015282818286038386865af193508361173f5761173f61122a565b8315610cf95761174f3d82610935565b82813d8301031215610cf9578283fdfea36469706673582212204836dcf3206e79e5f9b4b00595411749c0e11e8aa8230368f2c5c6e3cfb9e9366c6578706572696d656e74616cf564736f6c63430008090041";

type L1StandardBridgeConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: L1StandardBridgeConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class L1StandardBridge__factory extends ContractFactory {
  constructor(...args: L1StandardBridgeConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<L1StandardBridge> {
    return super.deploy(overrides || {}) as Promise<L1StandardBridge>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): L1StandardBridge {
    return super.attach(address) as L1StandardBridge;
  }
  override connect(signer: Signer): L1StandardBridge__factory {
    return super.connect(signer) as L1StandardBridge__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): L1StandardBridgeInterface {
    return new utils.Interface(_abi) as L1StandardBridgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): L1StandardBridge {
    return new Contract(address, _abi, signerOrProvider) as L1StandardBridge;
  }
}
