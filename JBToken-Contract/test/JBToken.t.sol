// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "forge-std/Test.sol";
import "../src/JBToken.sol";

contract JBTokenTest is Test {
  JBToken public instance;

  function setUp() public {
    instance = new JBToken();
  }

  function testName() public {
    assertEq(instance.name(), "JBToken");
  }
}
