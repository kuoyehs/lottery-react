const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

//const provider = new HDWalletProvider(
//  'game saddle oyster laundry equal loop lunch allow cactus endless hover unfair',
//  'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
//);
const provider = new HDWalletProvider(
  'seed parrot hub trash horse shy assume arctic slogan joy elevator photo',
  'https://rinkeby.infura.io/v3/c0363c7f8f8f4a28b36ed0a764a659f7'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();
