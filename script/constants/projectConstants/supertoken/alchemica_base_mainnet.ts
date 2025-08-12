import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { NFTs, Tokens } from "../../../../src/enums";

// For testnet deployments, ChainSlug enum may not have some chains, therefore some keys will look like {421614:{}} instead of {[ChainSlug.ARBITRUM_SEPOLIA]:{}}. This wont affect the functionality of the project.
export const pc: ProjectConstants = {
  [DeploymentMode.PROD]: {
    [Tokens.FUD]: {
      vaultChains: [ChainSlug.POLYGON_MAINNET],
      controllerChains: [ChainSlug.BASE],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi FUD Token",
        symbol: Tokens.FUD,
        decimals: 18,
        owner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupplyOwner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupply: "0",
      },
    },
    [Tokens.FOMO]: {
      vaultChains: [ChainSlug.POLYGON_MAINNET],
      controllerChains: [ChainSlug.BASE],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi FOMO Token",
        symbol: Tokens.FOMO,
        decimals: 18,
        owner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupplyOwner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupply: "0",
      },
    },
    [Tokens.ALPHA]: {
      vaultChains: [ChainSlug.POLYGON_MAINNET],
      controllerChains: [ChainSlug.BASE],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi ALPHA TOKEN",
        symbol: Tokens.ALPHA,
        decimals: 18,
        owner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupplyOwner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupply: "0",
      },
    },
    [Tokens.KEK]: {
      vaultChains: [ChainSlug.POLYGON_MAINNET],
      controllerChains: [ChainSlug.BASE],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi KEK Token",
        symbol: Tokens.KEK,
        decimals: 18,
        owner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupplyOwner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupply: "0",
      },
    },
    [Tokens.GLTR]: {
      vaultChains: [ChainSlug.POLYGON_MAINNET],
      controllerChains: [ChainSlug.BASE],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi GLTR Token",
        symbol: Tokens.GLTR,
        decimals: 18,
        owner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupplyOwner: "0x3a2E7D1E98A4a051B0766f866237c73643fDF360",
        initialSupply: "0",
      },
    },
  },
};
