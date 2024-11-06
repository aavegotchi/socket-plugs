import {
  ChainSlug,
  DeploymentMode,
  IntegrationTypes,
} from "@socket.tech/dl-core";
import { Hooks, ProjectConstants } from "../../../../src";
import { NFTs, Tokens } from "../../../../src/enums";

// For testnet deployments, ChainSlug enum may not have some chains, therefore some keys will look like {421614:{}} instead of {[ChainSlug.ARBITRUM_SEPOLIA]:{}}. This wont affect the functionality of the project.
export const pc: ProjectConstants = {
  [DeploymentMode.SURGE]: {
    [Tokens.FUD]: {
      vaultChains: [80002],
      controllerChains: [631571],
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          80002: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000000000000000000000",
              receivingLimit: "100000000000000000000000",
            },
          },
          631571: {
            [IntegrationTypes.fast]: {
              sendingLimit: "10000000000000000000000000",
              receivingLimit: "100000000000000000000000",
            },
          },
        },
      },
      superTokenInfo: {
        name: Tokens.FUD,
        symbol: Tokens.FUD,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
    [Tokens.FOMO]: {
      vaultChains: [80002],
      controllerChains: [631571],
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          80002: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000000",
              receivingLimit: "100000000000000000000000000",
            },
          },
          631571: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000000",
              receivingLimit: "100000000000000000000000000",
            },
          },
        },
      },
      superTokenInfo: {
        name: "Aavegotchi Fomo",
        symbol: Tokens.FOMO,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
    [Tokens.ALPHA]: {
      vaultChains: [80002],
      controllerChains: [631571],
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          80002: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000",
              receivingLimit: "100000000000000000000000",
            },
          },
          631571: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000",
              receivingLimit: "100000000000000000000000",
            },
          },
        },
      },
      superTokenInfo: {
        name: "Aavegotchi Alpha",
        symbol: Tokens.ALPHA,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
    [Tokens.KEK]: {
      vaultChains: [80002],
      controllerChains: [631571],
      hook: {
        hookType: Hooks.LIMIT_HOOK,
        limitsAndPoolId: {
          80002: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000000",
              receivingLimit: "100000000000000000000000000",
            },
          },
          631571: {
            [IntegrationTypes.fast]: {
              sendingLimit: "1000000000000000000000000000",
              receivingLimit: "100000000000000000000000000",
            },
          },
        },
      },
      superTokenInfo: {
        name: "Aavegotchi Kek",
        symbol: Tokens.KEK,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
  },
};
