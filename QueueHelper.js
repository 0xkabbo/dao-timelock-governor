const { ethers } = require("ethers");

/**
 * Utility to hash a proposal for the timelock.
 */
function calculateOperationId(target, value, data, predecessor, salt) {
  const descriptionHash = ethers.keccak256(ethers.toUtf8Bytes(salt));
  return ethers.keccak256(
    ethers.AbiCoder.defaultAbiCoder().encode(
      ["address", "uint256", "bytes", "bytes32", "bytes32"],
      [target, value, data, predecessor, descriptionHash]
    )
  );
}

module.exports = { calculateOperationId };
