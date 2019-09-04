// import "allocator/arena";
import { context, storage, near, collections, base64 } from "./near";
import { Corgi, CorgiArray, CorgiMetaData } from "./model.near";

// export { memory }

// --- contract code goes below
///////////////////////////////
// ERC721 for Non Fungible Tokens

const NAME: string = "The NEAR Corgi Token";
const SYMBOL: string = "CORG"
const TOTAL_SUPPLY: u64 = 420;

// Collections where we store data
let balances = collections.map<string, u64>("b");

// *********************************************************
// // Methods to call for Terms
export function name(): string {
  return NAME;
}

export function symbol(): string {
  return SYMBOL;
}

// Initializaton
export function init(initialOwner: string): void {
  near.log("initialOwner: " + initialOwner);
  assert(storage.getItem("init") == null, "Already initialized token supply");
  storage.setU64("io::" + initialOwner, TOTAL_SUPPLY);
  storage.setItem("init", "done");
}

// Balance for owner
export function balanceOf(owner: string): u64 {
  return balances.get(owner);
}

export function updateBalance(owner: string, increment: u64): void {
  let balance = balanceOf(owner);
  if (balance) {
    near.log(`${balance}`);
  } else {
    near.log("issues");
  }
}

export function setBalance(owner: string, balance: u64): void {
  balances.set(owner, balance);
}

// Total supply
export function totalSupply(): string {
  return TOTAL_SUPPLY.toString();
}

// simplified version of the ERC721
// contract ERC721 {
//    ERC20 compatible functions
//    function name() constant returns (string name);
//    function symbol() constant returns (string symbol);

//    function totalSupply() constant returns (uint256 totalSupply);
//    function balanceOf(address _owner) constant returns (uint balance);

//    Functions that define ownership
//    function ownerOf(uint256 tokenId) constant returns (address owner);

//    function approve(address to, uint256 tokenId);
//    function takeOwnership(uint256 tokenId);

//   //  function transfer(address to, uint256 tokenId);
//    function tokenOfOwnerByIndex(address _owner, uint256 _index) constant returns (uint tokenId);

//    // Token metadata
//    function tokenMetadata(uint256 tokenId) constant returns (string infoUrl);

