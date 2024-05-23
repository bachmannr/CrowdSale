// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const NAMEJUNE = 'June Token'
  const SYMBOLJUNE = 'JUNE'
  const NAMERALPH = 'Ralph Token'
  const SYMBOLRALPH = 'RALPH'

  const MAX_SUPPLY = '1000000'
  const PRICE = ethers.utils.parseUnits('0.025', 'ether')

  // Deploy Token
  const TokenJune = await hre.ethers.getContractFactory("TokenJune")
  const tokenJune = await TokenJune.deploy(NAMEJUNE, SYMBOLJUNE, MAX_SUPPLY)
  await tokenJune.deployed()

  console.log(`TokenJune deployed to: ${tokenJune.address}\n`)

  const TokenRalph = await hre.ethers.getContractFactory("TokenRalph")
  const tokenRalph = await TokenRalph.deploy(NAMERALPH, SYMBOLRALPH, MAX_SUPPLY)
  await tokenRalph.deployed()

  console.log(`TokenRalph deployed to: ${tokenRalph.address}\n`)


  // Deploy Crowdsale
  //const Crowdsale = await hre.ethers.getContractFactory("Crowdsale")
  //const crowdsale = await Crowdsale.deploy(token.address, PRICE, ethers.utils.parseUnits(MAX_SUPPLY, 'ether'))
  //await crowdsale.deployed();

  //console.log(`Crowdsale deployed to: ${crowdsale.address}\n`)

  //const transaction = await tokenJune.transfer(crowdsale.address, ethers.utils.parseUnits(MAX_SUPPLY, 'ether'))
  //await transaction.wait()
  //const transaction = await tokenRalph.transfer(crowdsale.address, ethers.utils.parseUnits(MAX_SUPPLY, 'ether'))
  //await transaction.wait()


  //console.log(`Tokens transferred to Crowdsale\n`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
