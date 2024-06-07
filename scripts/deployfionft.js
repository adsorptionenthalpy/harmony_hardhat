require ("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const { CUSTODIANS_LOCAL, CUSTODIANS_DEVNET, CUSTODIANS_TESTNET, CUSTODIANS_MAINNET } = process.env;
const custodiansLocal = CUSTODIANS_LOCAL.split(',');
const custodiansDevnet = CUSTODIANS_DEVNET.split(',');
const custodiansTestnet = CUSTODIANS_TESTNET.split(',');
const custodiansMainnet = CUSTODIANS_MAINNET.split(',');

async function main() {
  const FIONFT = await hre.ethers.getContractFactory("FIONFT");
  console.log('Deploying FIO ERC721 contract...');
  const nft = await FIONFT.deploy(custodiansLocal);
  await nft.waitForDeployment();
  console.log("FIO.ERC721 deployed to:", nft.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});