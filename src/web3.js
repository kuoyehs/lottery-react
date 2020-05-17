import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);
window.web3.currentProvider.enable()
/*
let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    //'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
    'https://rinkeby.infura.io/v3/c0363c7f8f8f4a28b36ed0a764a659f7'
  );
  web3 = new Web3(provider);
}
*/
export default web3;
