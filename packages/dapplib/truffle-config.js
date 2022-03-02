require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom drip flock tooth guard render remain umbrella hidden close brisk twenty'; 
let testAccounts = [
"0xee73414022d539106f66422858090eb138377d7c17330a6bbee48a4e12d34bb0",
"0x4af3a2f3af640bce78ca96fbe9c46a03ea1152922f3906c24c0ba25231871fff",
"0x583f3920b98638f8ccd335ea3380ecd82bd10f41b040752086fb7941671ba245",
"0x38cf7572d5224c56a01539b5e18ffd154e46bd586138dd2aa0da95e08a31aa3b",
"0x3257b3f84618a82b77f26246cc964a333025352839e16624546d639b39482446",
"0x5d626fe4090cc5f452ce90b41a034fbc715de0f1da8ad67aae528cbc5d159feb",
"0x8920a88075596bc6c0cdb2c71191bd08691e68e3b6784013643450a390218f3f",
"0x38b506088fb72673ed504d888701ccdc70af9cbd50c1dd7efa6fed0b56ddb027",
"0x74844a2795649264ed591b368674a25827e4ab2a07f3a4d7b08647b9b4e0cfe1",
"0x9af58d8bf3d4a7d92b1c49f0b7f85c8eeb0920ecb8b332063fa93db016ae2468"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

