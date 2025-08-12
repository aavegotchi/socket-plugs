import { Contract } from "ethers";
import { getSignerFromChainSlug } from "../helpers/networks";
import { ChainSlug } from "@socket.tech/dl-core";

// SuperToken ABI - only the function we need
const SUPER_TOKEN_ABI = [
  "function grantRealmDiamondMinterRole(address _realmDiamond) public",
  "function owner() public view returns (address)",
  "function hasRole(bytes32 role, address account) public view returns (bool)",
];

// Base (Chain ID: 8453) SuperToken addresses for Alchemica tokens
const BASE_ALCHEMICA_ADDRESSES = {
  FUD: "0x2028b4043e6722Ea164946c82fe806c4a43a0fF4",
  FOMO: "0xA32137bfb57d2b6A9Fd2956Ba4B54741a6D54b58",
  ALPHA: "0x15e7CaC885e3730ce6389447BC0f7AC032f31947",
  KEK: "0xE52b9170fF4ece4C35E796Ffd74B57Dec68Ca0e5",
};

// Realm Diamond address on Base
const REALM_DIAMOND_ADDRESS = "0x4B0040c3646D3c44B8a28Ad7055cfCF536c05372";

// CONTROLLER_ROLE constant from SuperToken contract
const CONTROLLER_ROLE =
  "0x7b765e0e932d348852a6f810bfa1ab891e259123f02db8cdcde614c570223357"; // keccak256("CONTROLLER_ROLE")

const BASE_CHAIN_SLUG: ChainSlug = 8453;

export const main = async () => {
  try {
    console.log("🚀 Starting Realm Diamond minter role grant process...");
    console.log(`Realm Diamond Address: ${REALM_DIAMOND_ADDRESS}`);
    console.log(`Target Chain: Base (${BASE_CHAIN_SLUG})`);
    console.log("─".repeat(80));

    const signer = getSignerFromChainSlug(BASE_CHAIN_SLUG);
    console.log(`Using signer: ${await signer.getAddress()}`);
    console.log("─".repeat(80));

    // Process each Alchemica token
    for (const [tokenName, tokenAddress] of Object.entries(
      BASE_ALCHEMICA_ADDRESSES
    )) {
      console.log(`\n📝 Processing ${tokenName} token...`);
      console.log(`Token Address: ${tokenAddress}`);

      try {
        const superTokenContract = new Contract(
          tokenAddress,
          SUPER_TOKEN_ABI,
          signer
        );

        // Check current owner
        const owner = await superTokenContract.owner();
        console.log(`Current Owner: ${owner}`);
        console.log(`Signer Address: ${await signer.getAddress()}`);

        // Check if signer is the owner
        if (owner.toLowerCase() !== (await signer.getAddress()).toLowerCase()) {
          console.log(
            `❌ Signer is not the owner of ${tokenName}. Skipping...`
          );
          continue;
        }

        // Check if Realm Diamond already has the role
        const hasRole = await superTokenContract.hasRole(
          CONTROLLER_ROLE,
          REALM_DIAMOND_ADDRESS
        );
        if (hasRole) {
          console.log(
            `✅ Realm Diamond already has CONTROLLER_ROLE for ${tokenName}`
          );
          continue;
        }

        return;

        // Grant the role
        console.log(
          `🔄 Granting CONTROLLER_ROLE to Realm Diamond for ${tokenName}...`
        );
        const tx = await superTokenContract.grantRealmDiamondMinterRole(
          REALM_DIAMOND_ADDRESS
        );
        console.log(`Transaction Hash: ${tx.hash}`);

        // Wait for confirmation
        const receipt = await tx.wait();
        console.log(`✅ Transaction confirmed in block ${receipt.blockNumber}`);
        console.log(`Gas Used: ${receipt.gasUsed.toString()}`);

        // Verify the role was granted
        const hasRoleAfter = await superTokenContract.hasRole(
          CONTROLLER_ROLE,
          REALM_DIAMOND_ADDRESS
        );
        if (hasRoleAfter) {
          console.log(
            `✅ CONTROLLER_ROLE successfully granted to Realm Diamond for ${tokenName}`
          );
        } else {
          console.log(
            `❌ Failed to grant CONTROLLER_ROLE to Realm Diamond for ${tokenName}`
          );
        }
      } catch (error) {
        console.error(`❌ Error processing ${tokenName}:`, error);
      }

      console.log("─".repeat(40));
    }

    console.log("\n🎉 Realm Diamond minter role grant process completed!");
  } catch (error) {
    console.error("❌ Error in main execution:", error);
    process.exit(1);
  }
};

main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error("❌ Script failed:", error);
    process.exit(1);
  });
