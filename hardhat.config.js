require("@nomiclabs/hardhat-waffle");
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()





module.exports = {
  networks:{
    hardhat : {
      chainId : 1337
    },
    mumbai : {
      url : " https://polygon-mumbai.g.alchemy.com/v2/uxsLZaa24KfIqL-v6XodDH-soYGnIQrV ",
      accounts : [privateKey]
    },
  },
  solidity: "0.8.4",
};
