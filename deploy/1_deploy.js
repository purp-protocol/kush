'use strict';

const { ethers, deployments } = require('hardhat');

module.exports = async () => {
  const [ signer ] = await ethers.getSigners();
  await deployments.deploy('KUSH', {
    contractName: 'KUSH',
    args: [],
    from: await signer.getAddress()
  });
  const wock = await ethers.getContract('KUSH');
  console.log('deployed KUSH');
};
