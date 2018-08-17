require('dotenv').config();

const MyanmarGoldToken = artifacts.require('MyanmarGoldToken');
const Web3 = require('web3');

const web3 = new Web3();
let privateKey = process.env.PRIVATE_KEY || '';

if (!privateKey.startsWith('0x')) {
  privateKey = `0x${privateKey}`;
}

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
const icoAddress = account.address;

module.exports = function(deployer) {
  deployer.deploy(MyanmarGoldToken, icoAddress);
};
