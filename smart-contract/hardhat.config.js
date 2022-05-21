require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/b383d9Jv73T4vIt6yJO6y33OxhU16nB_',
      accounts: [
        'ac262961d1752c942037656d73e9adfe5d0cffa74d8d5cb01119e11a72154389',
      ],
    },
  },
}
