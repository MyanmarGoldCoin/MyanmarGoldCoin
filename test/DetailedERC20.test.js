const BigNumber = web3.BigNumber;

require('chai')
  .use(require('chai-as-promised'))
  .use(require('chai-bignumber')(BigNumber))
  .should();

const MyanmarGoldToken = artifacts.require('MyanmarGoldToken');

contract('MyanmarGoldToken', accounts => {
  let detailedERC20 = null;

  const _name = 'MyanmarGoldToken';
  const _symbol = 'MGC';
  const _decimals = 18;

  beforeEach(async function() {
    detailedERC20 = await MyanmarGoldToken.new(accounts[0]);
  });

  it('has a name', async function() {
    const name = await detailedERC20.name();
    name.should.be.equal(_name);
  });

  it('has a symbol', async function() {
    const symbol = await detailedERC20.symbol();
    symbol.should.be.equal(_symbol);
  });

  it('has an amount of decimals', async function() {
    const decimals = await detailedERC20.decimals();
    decimals.should.be.bignumber.equal(_decimals);
  });
});
