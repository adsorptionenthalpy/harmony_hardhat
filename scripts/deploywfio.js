require ("@nomiclabs/hardhat-waffle");
require('dotenv').config()

const { CUSTODIANS_LOCAL, CUSTODIANS_DEVNET, CUSTODIANS_TESTNET, CUSTODIANS_MAINNET } = process.env;
const custodiansLocal = CUSTODIANS_LOCAL.split(',');
const custodiansDevnet = CUSTODIANS_DEVNET.split(',');
const custodiansTestnet = CUSTODIANS_TESTNET.split(',');
const custodiansMainnet = CUSTODIANS_MAINNET.split(',');

async function main() {
    const WFIO = await hre.ethers.getContractFactory("WFIO");
    const fiotoken = await WFIO.deploy(0,custodiansLocal);
    console.log("FIO.ERC20 deployed to:", fiotoken.target);
    //console.log("Account balance:", ethers.utils.formatUnits(await deployer.getBalance(), 18));
};

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});