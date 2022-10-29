import { JsonRpcSigner } from '@ethersproject/providers';
import { providers } from 'ethers';
import { useEffect, useState } from 'react';
import { LensHub, LensHub__factory } from '../../typechain-types';

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const LENS_HUB_ADDRESS = '0x1A1FEe7EeD918BD762173e4dc5EfDB8a78C924A8';

export function useContract() {
  const [signer, setSigner] = useState<JsonRpcSigner>();
  const [lensContract, setLensContract] = useState<LensHub | null>();

  useEffect(() => {
    async function enableMetamask() {
      if (!window.ethereum) return;
      await window.ethereum.enable();

      const provider = new providers.Web3Provider(window.ethereum);
      setSigner(provider.getSigner());
    }
    enableMetamask();
  }, [setSigner]);

  useEffect(() => {
    if (!signer) return;
    const lens = LensHub__factory.connect(LENS_HUB_ADDRESS, signer);
    setLensContract(lens);
  }, [signer, setLensContract]);

  return { lensContract, signer };
}
