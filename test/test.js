const hre = require('hardhat');
describe('KUSH.sol', () => {
  before(async () => {
    await hre.deployments.fixture();
    const kush = await hre.ethers.getContract('KUSH');
  });
  it('should get metadata', async () => {
    const kush = await hre.ethers.getContract('KUSH');
    console.log(await kush.tokenURI('0x01'));
  });
});
