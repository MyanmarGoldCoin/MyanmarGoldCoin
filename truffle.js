require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const PrivateKeyProvider = require('truffle-privatekey-provider');

const privateKey = process.env.PRIVATE_KEY || '';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: '127.0.0.1',
      port: 7545,
      network_id: '*', // Match any network id
    },
    rinkeby: {
      provider() {
        return new PrivateKeyProvider(privateKey, 'https://rinkeby.infura.io/DpOAC0QU1DFQ3wDA2kyx');
      },
      network_id: 4,
      gas: 4e6,
      gasPrice: 2e10,
    },
    mainnet: {
      provider() {
        return new PrivateKeyProvider(privateKey, 'https://mainnet.infura.io/DpOAC0QU1DFQ3wDA2kyx');
      },
      network_id: 1,
    },
  },
};
