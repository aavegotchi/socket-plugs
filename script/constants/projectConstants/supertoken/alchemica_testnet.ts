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
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi Gotchiverse Fud",
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
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi Gotchiverse Fomo",
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
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi Gotchiverse Alpha",
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
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi Gotchiverse Kek",
        symbol: Tokens.KEK,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
    [Tokens.GLTR]: {
      vaultChains: [80002],
      controllerChains: [631571],
      hook: {
        hookType: Hooks.NO_HOOK,
      },
      superTokenInfo: {
        name: "Aavegotchi Gotchiverse Kek",
        symbol: Tokens.KEK,
        decimals: 18,
        owner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupplyOwner: "0xB9D736c48351Bad464710ee73BA80A0A659c1795",
        initialSupply: "0",
      },
    },
  },
};
