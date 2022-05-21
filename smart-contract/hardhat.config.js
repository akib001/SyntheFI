require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/b383d9Jv73T4vIt6yJO6y33OxhU16nB_',
      accounts: [
        'e880ca8f82d9c29f0770092af12332dff5dfa9de48775984ecadf6145c62e56d',
      ],
    },
  },
}
