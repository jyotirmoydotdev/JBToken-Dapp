// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "forge-std/Script.sol";
import "../src/JBToken.sol";

contract JBTokenScript is Script {
  function setUp() public {}

  function run() public {
    vm.startBroadcast();
    JBToken instance = new JBToken();
    console.log("Contract deployed to %s", address(instance));
    vm.stopBroadcast();
  }
}
