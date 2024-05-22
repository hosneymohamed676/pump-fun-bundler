"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.feeRecipient = exports.eventAuthority = exports.MPL_TOKEN_METADATA_PROGRAM_ID = exports.mintAuthority = exports.global = exports.RayLiqPoolv4 = exports.PUMP_PROGRAM = exports.connection = exports.NFT_STORAGE_TOKEN = exports.rpc = exports.payer = exports.wallet = void 0;
const web3_js_1 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));


// PRIV KEY OF DEPLOYER
exports.wallet = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(""));


// PRIV KEY OF FEEPAYER
exports.payer = web3_js_1.Keypair.fromSecretKey(bs58_1.default.decode(""));


// ENTER YOUR RPC
exports.rpc = "";


// classic.nft.storage token
exports.NFT_STORAGE_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDY3N2ZFYzhmZDc3QzI2OTgwMDBkQjg0RjNiMTM5MEVCRTM4MEU4M0YiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwODYxOTgxMTA3MiwibmFtZSI6InNoaXRjb2lucyJ9.zAvvtUVe6mY-sTxxnJ_lr23H3TnhoodnWurcftpMQxc";



/* DONT TOUCH ANYTHING BELOW THIS */
exports.connection = new web3_js_1.Connection(exports.rpc, "confirmed");
exports.PUMP_PROGRAM = new web3_js_1.PublicKey("6EF8rrecthR5Dkzon8Nwu78hRvfCKubJ14M5uBEwF6P");
exports.RayLiqPoolv4 = new web3_js_1.PublicKey('675kPX9MHTjS2zt1qfr1NYHuzeLXfQM9H24wFSUt1Mp8');
exports.global = new web3_js_1.PublicKey("4wTV1YmiEkRvAtNtsSGPtUrqRYQMe5SKy2uB4Jjaxnjf");
exports.mintAuthority = new web3_js_1.PublicKey("TSLvdd1pWpHVjahSpsvCXUbgwsL3JAcvokwaKt1eokM");
exports.MPL_TOKEN_METADATA_PROGRAM_ID = new web3_js_1.PublicKey("metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s");
exports.eventAuthority = new web3_js_1.PublicKey("Ce6TQqeHC9p8KetsN6JsjHK7UTZk7nasjjnr7XxXp9F1");
exports.feeRecipient = new web3_js_1.PublicKey("CebN5WGQ4jvEPvsVU4EoHEpgzq1VV7AbicfhtW4xC9iM");
