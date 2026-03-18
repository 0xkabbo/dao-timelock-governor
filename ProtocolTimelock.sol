// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/governance/TimelockController.sol";

/**
 * @title ProtocolTimelock
 * @dev This contract manages the delay for governance decisions.
 */
contract ProtocolTimelock is TimelockController {
    /**
     * @param minDelay Minimum time for a proposal to be in the timelock.
     * @param proposers List of addresses that can propose/queue actions.
     * @param executors List of addresses that can execute actions.
     * @param admin Optional admin address (usually the DAO itself).
     */
    constructor(
        uint256 minDelay,
        address[] memory proposers,
        address[] memory executors,
        address admin
    ) TimelockController(minDelay, proposers, executors, admin) {}
}
