require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea clog office skull dance birth remain comic hover beach swing stand'; 
let testAccounts = [
"0xa2ef7fc7a1fa9a640774a8e94fbfe50abd8ed591917ded6f4a448cff95a5b626",
"0x6555f5785f46b934a68b27881a86da571219950aada6246e2e7ef36ed327e212",
"0x94a0fc88f7c6d967e9977691a898b9dd334cfd5bfbaf50c8b37100bb976452f6",
"0x84eebec1a3f6523464c3b69fb46c005675c88382bb54e5824decee1fd41a9105",
"0x0954eff6403eddc7f8e9ea5e5db0ed33d257b4d23e22f228ec120c43b76cce54",
"0xa70d61a010353ae128f7f4b204da92e0fa8dbfcffd527dcab0fef16bb65d6958",
"0x823f4615eccd069c123b1a8d8c0b8761a7d1dcb0b6f1d09aa31e35568da97eef",
"0x62579d9088a7b45379d64f732ffdfc290e1ec33c1e5e22d1f74733e77502c95b",
"0xd32010ddb12b0053eac336f6c25e666e60be466bf23948053af5c8e3bd8a70c0",
"0x170e8aa5a9541397382688f3445e27bd31a067904caee1d8f280b1b09bef5603"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


