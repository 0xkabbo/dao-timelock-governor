# DAO Timelock Governor

This repository features a robust **Timelock Controller** based on OpenZeppelin's audited standards. It acts as the owner of your protocol's smart contracts, ensuring that no sensitive function can be executed without a predefined delay.

## Why Timelocks?
* **Security:** Prevents "rug pulls" by giving users time to exit if a malicious proposal is passed.
* **Transparency:** All pending actions are visible on-chain before they happen.
* **Decentralization:** Typically paired with a Voting contract (Governor) where only the DAO can queue transactions.

## Workflow
1. **Propose:** A proposal is created in a separate Governor contract.
2. **Queue:** Once passed, the action is "queued" in this Timelock.
3. **Wait:** The `minDelay` (e.g., 2 days) must pass.
4. **Execute:** Anyone can trigger the execution once the timer expires.

## Configuration
* `minDelay`: The minimum time (in seconds) an operation must wait.
* `proposers`: Addresses allowed to queue operations (usually the Governor contract).
* `executors`: Addresses allowed to trigger the execution (often set to address(0) for anyone).
