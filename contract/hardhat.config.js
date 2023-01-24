
require('@nomicfoundation/hardhat-toolbox');

module.exports = {
  solidity: "0.8.9",
  networks: {
    Goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/SSjCGX8o7t5RS3d23-h1tZUyK2T6oY-Z',
      accounts: ['31dddb4463dabe81f0b90d1fda66c6bdd3608928e7cb40def4616d24d178c295'],
    },
  },
  Etherscan: {
    apiKey: "A2CGN6RUM9263GJPRE7GMJVQW742UI4Y64"
  }
};